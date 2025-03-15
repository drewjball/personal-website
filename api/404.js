export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html")
  res.status(404).sendFile("404.html", { root: "public" })
}
