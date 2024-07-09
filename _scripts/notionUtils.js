function richTextParser(block) {
  return block.rich_text.reduce((acc, curr) => {
    const { plain_text: text, annotations, href } = curr;
    const { bold, code, italic, strikethrough } = annotations;
    const url = href && new URL(href);
    let path = href;
    let parsed = text.replace(/\n/g, '<br />');

    if (italic) {
      parsed = `<i>${parsed}</i>`;
    }
    if (bold) {
      parsed = `<strong>${parsed}</strong>`;
    }
    if (code) {
      parsed = `<code class="language-plaintext highlighter-rouge">${parsed}</code>`;
    }
    if (strikethrough) {
      parsed = `<s>${parsed}</s>`;
    }
    if (path) {
      parsed = `<a href="${path}" target="_blank">${parsed}</a>`;
    }

    return `${acc}${parsed}`;
  }, '');
}

function iconParser(block) {
  if (!block.icon) {
    return block;
  }
  
  var parsed = '<div style="display:flex;align-items:center;justify-content:center;height:24px;width:24px;border-radius:0.25em;flex-shrink:0;">';
  if (block.icon.type === 'emoji') {
    parsed += block.icon.emoji;
  } else if (block.icon.type === 'external') {
    parsed += `<img src="${block.icon.external.url}" alt="" />`;
  }
  parsed += '</div>';
  return parsed;
};

module.exports = {
  getColorset: function (colorType) {
    switch(colorType) {
      case 'gray': return {
        font: 'rgb(50 48 44)',
        background: 'rgb(227 226 224)'
      };
      case 'brown': return {
        font: 'rgb(68 42 30)',
        background: 'rgb(238 224 218)'
      };
      case 'orange': return {
        font: 'rgb(73 41 14)',
        background: 'rgb(250 222 201)'
      };
      case 'yellow': return {
        font: 'rgb(64 44 27)',
        background: 'rgb(253 236 200)'
      };
      case 'green': return {
        font: 'rgb(28 56 41)',
        background: 'rgb(219 237 219)'
      };
      case 'blue': return {
        font: 'rgb(24 51 71)',
        background: 'rgb(211 229 239)'
      };
      case 'purple': return {
        font: 'rgb(65 36 84)',
        background: 'rgb(232 222 238)'
      };
      case 'pink': return {
        font: 'rgb(76 35 55)',
        background: 'rgb(245 224 233)'
      };
      case 'red': return {
        font: 'rgb(93 23 21)',
        background: 'rgb(255 226 221)'
      };
      default: return {
        font: 'rgb(50 48 44)',
        background: 'rgba(227 226 224 0.5)'
      };
    }
  },
  calloutToMarkdown: async function (block) {
    const { callout } = block;
    return `<div class="callout" style="display:flex;width:100%;border-radius:4px;background:rgb(241,241,239);padding: 16px 16px 16px 12px;">
${iconParser(callout)}
<div style="white-space:pre-wrap;word-break:break-word;caret-color:rgb(55, 53, 47);margin-left:8px;padding-left:2px;padding-right:2px;">${await richTextParser(callout)}</div>
</div>`;
  },
  embedToMarkdown: async function (block) {
    const { embed } = block;
    if (!embed?.url) return block;
    return `<figure>
<iframe src="${embed?.url}"></iframe>
<figcaption>${await n2m.blockToMarkdown(embed?.caption)}</figcaption>
</figure>`;
  }
}