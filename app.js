const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/posts", (req, res) => {
  const posts = [
    {
      id: "2de2422",
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
  res.json({
    message: "Posts fetched successfully",
    posts: posts,
  });
});

app.listen(3000);
