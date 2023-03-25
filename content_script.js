function replaceTextOnPage() {
  const openaiRegex = /openai/gi;
  const open_aiRegex = /open[ ]ai/gi;

  // Get all the text nodes on the page
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );

  // Loop through each text node and replace the matching text
  let node;
  while ((node = walker.nextNode())) {
    const text = node.nodeValue;
    const replacedText = text
      .replace(openaiRegex, "\"Open\"AI")
      .replace(open_aiRegex, "\"Open\"-AI");
    if (replacedText !== text) {
      node.nodeValue = replacedText;
    }
  }
}

replaceTextOnPage();

