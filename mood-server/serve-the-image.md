# Serve the Image

Handle situations where you want to load images!

```javascript
const server = http.createServer(async (req, res) => {
  if (req.url.match(/.jpg/)) {
    const img = await readFile(`./public/${req.url}`);
    res.writeHead(200, { "Content-Type": "image/jpeg" });
    return res.end(img);
  }

  const html = await readFile(
    `./public/happy.html`,
    "UTF-8"
  );
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
});
```
