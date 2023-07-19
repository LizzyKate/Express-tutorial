const express = require("express");
const friendController = require("./controller/friends.controller");
const app = express();
const port = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/friends", friendController.getFriends);

app.get("/friends/:id", friendController.getFriend);

app.post("/friends", friendController.createFriend);

app.listen(port, () => console.log(`Server listening on port ${port}!`));
