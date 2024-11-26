// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { htmlData } = require("./template/email");
const { transporter } = require("./configs/email");
const app = express();
const port = 8000;

app.use(express.json());
app.use(bodyParser.json());

app.use(cors());

app.post("/send-email", async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: "Request body is missing." });
  }

  const html = htmlData
    .replace("{{ fullName }}", req.body?.fullName || "")
    .replace("{{ email }}", req.body?.email || "")
    .replace("{{ phoneNumber }}", req.body?.phoneNumber || "")
    .replace("{{ userType }}", req.body?.userType || "")
    .replace("{{ contentType }}", req.body?.branch || "")
    .replace("{{ contentType }}", req.body?.contentType || "")
    .replace("{{ content }}", req.body?.content || "");

  await transporter.sendMail({
    from: "osdouadi@gmail.com",
    to: "osdouadi@gmail.com",
    subject: "Portal de sugerencias y consultas",
    text: "Nuevo mensaje",
    html,
  });
  res.status(200).send({ message: "success" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
