# Serving Text Files and Binary

(1) Serve HTML File

```javascript
const server = http.createServer(async (req, res) => {
  const homePage = await readFile(
    "./public/index.html",
    "UTF-8"
  );
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(homePage);
});
```

(2) Serve CSS File

```javascript
const server = http.createServer(async (req, res) => {
  if (req.url.includes("css")) {
    const css = await readFile(
      `./public/${req.url}`,
      "UTF-8"
    );
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(supportingFile);
  }

  const homePage = await readFile(
    "./public/index.html",
    "UTF-8"
  );
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(homePage);
});
```

(3) Serve Image

```javascript
if (req.url.includes("js")) {
  const js = await readFile(`./public/${req.url}`, "UTF-8");
  res.writeHead(200, { "Content-Type": "text/javascript" });
  res.end(js);
}
```

(4) Serve JS File

```javascript
if (req.url.includes("png")) {
  const png = await readFile(`./public/${req.url}`);
  res.writeHead(200, { "Content-Type": "image/png" });
  res.end(png);
}
```
