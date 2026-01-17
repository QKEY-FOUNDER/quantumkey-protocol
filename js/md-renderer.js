async function renderMarkdown(path) {
  try {
    const res = await fetch(path);
    const text = await res.text();

    const html = text
      .replace(/^### (.*)$/gim, "<h3>$1</h3>")
      .replace(/^## (.*)$/gim, "<h2>$1</h2>")
      .replace(/^# (.*)$/gim, "<h1>$1</h1>")
      .replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/gim, "<em>$1</em>")
      .replace(/\n/gim, "<br>");

    document.getElementById("content").innerHTML = html;
  } catch (err) {
    document.getElementById("content").innerText =
      "Erro ao carregar o README.md";
    console.error(err);
  }
}
