async function renderMarkdown(path) {
  try {
    const res = await fetch(path);
    let text = await res.text();

    // Detect normative marker (passive recognition)
    const normativeMarker = "<!-- QKP:NORMATIVE -->";
    const isNormative = text.startsWith(normativeMarker);

    // Remove marker from rendered content
    if (isNormative) {
      text = text.replace(normativeMarker, "").trimStart();
    }

    // Minimal markdown rendering (presentational only)
    const html = text
      .replace(/^### (.*)$/gim, "<h3>$1</h3>")
      .replace(/^## (.*)$/gim, "<h2>$1</h2>")
      .replace(/^# (.*)$/gim, "<h1>$1</h1>")
      .replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/gim, "<em>$1</em>")
      .replace(/\n/gim, "<br>");

    const content = document.getElementById("content");
    content.innerHTML = html;

    // Passive exposure only (non-authoritative)
    if (isNormative) {
      document.body.setAttribute("data-qkp-normative", "true");
    } else {
      document.body.removeAttribute("data-qkp-normative");
    }

  } catch (err) {
    document.getElementById("content").innerText =
      "Error loading document.";
    console.error(err);
  }
}
