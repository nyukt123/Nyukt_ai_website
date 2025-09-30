// server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 8080;

// serve static files
app.use(express.static(path.join(__dirname, "dist")));

// fallback for React Router
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`✅ Server listening on port ${port}`);
});