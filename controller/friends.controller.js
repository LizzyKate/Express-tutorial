const friends = require("../models/friends.model");

function getFriends(req, res) {
  res.send(friends);
}

function getFriend(req, res) {
  const friend = friends.find(
    (friend) => friend.id === parseInt(req.params.id)
  );
  if (!friend)
    res.status(404).send("The friend with the given ID was not found.");
  res.send(friend);
}

function createFriend(req, res) {
  if (!req.body.name || req.body.name.length < 3) {
    res
      .status(400)
      .json({ error: "Name is required and should be minimum 3 characters." });
    return;
  }
  const newFriend = {
    id: friends.length + 1,
    name: req.body.name,
  };

  friends.push(newFriend);
  res.json(newFriend);
}

module.exports = {
  getFriends,
  getFriend,
  createFriend,
};
