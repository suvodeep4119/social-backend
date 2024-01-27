const http = require("http");
const bodyParser = require("body-parser");

const express = require("express");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.get('/', (req, res) => {
  const posts = [
    {
      id: "omg",
      title: "title 1",
      content: "Hello this is the content 1",
    },
    {
      id: "2ed2ede22e2",
      title: "title 1",
      content: "Hello this is the content 1",
    },
    {
      id: "2eee2ee2effff",
      title: "title 1",
      content: "Hello this is the content 1",
    },
  ];
  res.status(200).send({
    message: "Posts fetched successfully",
    posts: posts,
  });
});

app.listen(process.env.PORT || 3000);
