const express = require("express");
const router = express.Router();
const securityManager = require("../utilities/securityManager");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await securityManager.authenticateUser(username, password);

  if (!user) {
    return res.status(401).send({ message: "Invalid username or password" });
  }

  const accessToken = securityManager.generateAccessToken(user);

  res.send({ accessToken });
});

router.post("/user", (req, res) => {

  securityManager.addUser(req);

  res.status(201).send();
});

module.exports = router;
