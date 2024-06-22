function richTextParser(block) {
  return block.rich_text.reduce((acc, curr) => {
    const { plain_text: text, annotations, href } = curr;
    const { bold, code, italic, strikethrough } = annotations;
    const url = href && new URL(href);
    let path = href;
    let parsed = text.replace(/\n/g, '<br />');
    console.log(parsed);

    if (italic) {
      parsed = `_${parsed}_`;
    }
    if (bold) {
      parsed = `**${parsed}**`;
    }
    if (code) {
      parsed = `\`${parsed}\``;
    }
    if (strikethrough) {
      parsed = `~~${parsed}~~`;
    }
    if (path) {
      parsed = `[${parsed}](${path})`;
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
  calloutToMarkdown: async function (block) {
    const { callout } = block;
    return `<div class="callout" style="display:flex;width:100%;border-radius:4px;background:rgb(241,241,239);padding: 16px 16px 16px 12px;">
${iconParser(callout)}
<div style="display:flex;flex-direction:column;min-width:0px;margin-left:8px;width:100%;">${await richTextParser(callout)}</div>
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