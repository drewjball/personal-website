export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html")
  res.status(500).sendFile("500.html", { root: "public" })
}
