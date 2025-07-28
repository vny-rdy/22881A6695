const axios = require("axios");
let token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJrb3VrdW50bGF2aW5heXJlZGR5MjJjbUBzdHVkZW50LnZhcmRoYW1hbi5vcmciLCJleHAiOjE3NTM2ODc1MTYsImlhdCI6MTc1MzY4NjYxNiwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6Ijk4ZjgyNmFkLWEzZjQtNDA4Zi1hOTMwLWEyY2NlNTYwODg3NSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImtvdWt1bnRsYSB2aW5heSByZWRkeSIsInN1YiI6ImM5NzcyYjFhLTZlMTktNGU3NS04MjMxLWMyNGUxMDY1OTMxMCJ9LCJlbWFpbCI6ImtvdWt1bnRsYXZpbmF5cmVkZHkyMmNtQHN0dWRlbnQudmFyZGhhbWFuLm9yZyIsIm5hbWUiOiJrb3VrdW50bGEgdmluYXkgcmVkZHkiLCJyb2xsTm8iOiIyMjg4MWE2Njk1IiwiYWNjZXNzQ29kZSI6IndQRWZHWiIsImNsaWVudElEIjoiYzk3NzJiMWEtNmUxOS00ZTc1LTgyMzEtYzI0ZTEwNjU5MzEwIiwiY2xpZW50U2VjcmV0IjoiTVV4elFZUlRHY1dHZlhXQSJ9.qVvhMjH6D1Kp5fUJ3xZmif-4FCx-Yp5kxUF0xF6fHL8";


function configure({ bearerToken }) {
  token = bearerToken;
}

async function Log(stack, level, pkg, message) {
  const payload = { stack, level, package:pkg, message };
  console.log("LOG PAYLOAD", payload);
  await axios.post(
    "http://20.244.56.144/evaluation-service/logs",
    payload,
    { headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}` 
      } }
  );
}

module.exports = { configure, Log };
