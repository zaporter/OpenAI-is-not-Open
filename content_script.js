function replaceTextOnPage() {

  const openaiRegex = /openai/gi;

  function replaceText(node) {
    const text = node.textContent;
    const replacedText = text
      .replace(openaiRegex, "\"Open\"AI")
    if (replacedText !== text) {
      node.textContent = replacedText;
    }
  }

  function scanPageForNewNodes() {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );
    let node;
    while ((node = walker.nextNode())) {
      replaceText(node);
    }
  }

  // Replace text on existing nodes
  scanPageForNewNodes();

  // Periodically scan the page for new nodes and replace text
  setInterval(scanPageForNewNodes, 1200);
}

replaceTextOnPage();
