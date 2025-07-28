const express = require("express");
const bodyParser = require("body-parser");
const { configure, Log } = require("../LoggingMiddleware");
const shorturlsRoutes = require("./routes/shorturls");


const BEARER = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJrb3VrdW50bGF2aW5heXJlZGR5MjJjbUBzdHVkZW50LnZhcmRoYW1hbi5vcmciLCJleHAiOjE3NTM2ODQ1MzUsImlhdCI6MTc1MzY4MzYzNSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImU1MThiZjI5LTZkYWEtNDYxNy05ZjcyLWUzMmRhZDRlMDhlYyIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImtvdWt1bnRsYSB2aW5heSByZWRkeSIsInN1YiI6ImM5NzcyYjFhLTZlMTktNGU3NS04MjMxLWMyNGUxMDY1OTMxMCJ9LCJlbWFpbCI6ImtvdWt1bnRsYXZpbmF5cmVkZHkyMmNtQHN0dWRlbnQudmFyZGhhbWFuLm9yZyIsIm5hbWUiOiJrb3VrdW50bGEgdmluYXkgcmVkZHkiLCJyb2xsTm8iOiIyMjg4MWE2Njk1IiwiYWNjZXNzQ29kZSI6IndQRWZHWiIsImNsaWVudElEIjoiYzk3NzJiMWEtNmUxOS00ZTc1LTgyMzEtYzI0ZTEwNjU5MzEwIiwiY2xpZW50U2VjcmV0IjoiTVV4elFZUlRHY1dHZlhXQSJ9.195li6KZp9Uq0tTOc-TvuU0E7z9tmjimnBEpDW7A9t4";

configure({ bearerToken: BEARER });

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  Log("backend", "debug", "route", `Incoming ${req.method} ${req.url}`);
  next();
});

app.use("/shorturls", shorturlsRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});