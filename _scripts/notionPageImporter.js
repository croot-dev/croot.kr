const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const dayjs = require("dayjs");
const path = require("path");
const fs = require("fs");
const axios = require("axios");
const { getColorset, calloutToMarkdown, embedToMarkdown } = require("./notionUtils");

// 노션 데이터베이스 속성명
const PROPERTY = {
  PUBLISH: '공개', // 타입: 체크박스(checkbox)
  TITLE: '게시물', // 타입: 제목(plain_text)
  CATEGORY: '카테고리',
  TAGS: '태그', // 타입: 다중선택(multi_select)
  TEST: '테스트'
}
const DEFAULT_CATEGORY_NAME = '기타'; // 카테고리 없을 시 기본으로 적용할 카테고리 명

// Using dotenv in local
if (process.env.NODE_ENV === 'local') {
  require('dotenv').config({ path: process.env.ENV_PATH, override: true });
}

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const rootDir = "_posts";
fs.mkdirSync(rootDir, { recursive: true });

(async () => {

  const databaseId = process.env.DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: PROPERTY.PUBLISH,
      checkbox: {
        equals: true,
      },
    },
  });
  for (const { id, properties, created_time, last_edited_time } of response.results) {
    // date
    const createdDate = dayjs(created_time).format("YYYY-MM-DD");
    const updatedDate = dayjs(last_edited_time).format("YYYY-MM-DD");

    // 2025년도 조건 확인
    if (!updatedDate.startsWith("2025")) {
      continue;
    }

    // title
    const tempTitle = properties?.[PROPERTY.TITLE]?.["title"];
    const title = tempTitle.length > 0? tempTitle[0]?.["plain_text"] : id;

    // category
    const category = properties?.[PROPERTY.CATEGORY]?.["select"]?.name || DEFAULT_CATEGORY_NAME;

    // tags
    const tagList = properties?.[PROPERTY.TAGS]?.["multi_select"] || [];
    
    const tags = tagList.map((tag) => {
      const color = getColorset(tag['color']);
      return `${tag['name']}:${color.background}:${color.font}`
    });

    // frontmatter
    const frontmatter = `---
layout: post
title: "${title}"
created: ${createdDate}
edited: ${updatedDate}
category: [${category}]
tags: [${tags.join(',')}]
---

`;
    
    // passing notion client to the option
    const n2m = new NotionToMarkdown({ notionClient: notion });
    n2m.setCustomTransformer("callout", calloutToMarkdown);
    n2m.setCustomTransformer("embed", embedToMarkdown);
    const blocks = await n2m.pageToMarkdown(id);
    const markdown = n2m.toMarkdownString(blocks)["parent"];
    const fileTitle = `${createdDate}-${title.replaceAll(" ", "-")}.md`;

    if(!markdown) { continue; }

    let imageIndex = 0;
    const edited_markdown = markdown
    // 이미지 링크 변경
    .replace(
      /!\[(.*?)\]\((.*?)\)/g,
      (match, p1, p2, p3) => {
        const dirname = path.join("assets/img", fileTitle);
        if (!fs.existsSync(dirname)) {
          fs.mkdirSync(dirname, { recursive: true });
        }
        const filename = path.join(dirname, `${imageIndex}.png`);

        axios.get(p2, { responseType: "stream" })
          .then(function (response) {
            let file = fs.createWriteStream(`${filename}`);
            response.data.pipe(file);
          })
          .catch(function (error) {
            console.log(error);
          });

        const res = (p1 === '')? '' : `_${p1}_`;
        return `![${imageIndex++}]` + `(/${filename})` + `${res}`;
      });

    // Write file
    fs.writeFile(path.join(rootDir, fileTitle), frontmatter + edited_markdown, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
})();