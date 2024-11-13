import express from "express";
import path from "path";
import Mailchimp from "mailchimp-api-v3";
import dotenv from "dotenv";

const __dirname = new URL(".", import.meta.url).pathname;

dotenv.config({ path: path.resolve(__dirname, ".env") });

const mc_api_key = process.env.MAILCHIMP_API_KEY;
const list_id = process.env.LIST_ID;

const app = express();
const mailchimp = new Mailchimp(mc_api_key);

// Serve static files from React app
app.use(express.static(path.resolve(__dirname, "client/dist")));

// API endpoint
app.get("/api/memberAdd", (req, res) => {
  mailchimp
    .post(`/lists/${list_id}/members/`, {
      email_address: req.query.email,
      status: "subscribed",
    })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "client/build", "/client/publicindex.html")
  );
});

const port = process.env.PORT || 9001;
app.listen(port);

console.log(`Express listening on port ${port}`);
