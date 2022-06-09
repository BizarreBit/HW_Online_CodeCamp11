const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); // Security LAB 1
const { User } = require("../models");

const register = async (req, res, next) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword)
      return res.status(400).json({ message: "'password' did not match" });

    if (typeof password !== "string")
      throw new Error("Password must be a string");
    if (password.length < 8)
      throw new Error(
        "Password length must be equal or greater than 8 characters"
      );

    const existUsername = await User.findOne({ where: { username } });
    if (existUsername)
      return res.status(400).json({ message: "'username' is already exist" });
    const existEmail = await User.findOne({ where: { email } });
    if (existEmail)
      return res.status(400).json({ message: "'email' is already exist" });

    const hashed = await bcrypt.hash(password, 12);
    await User.create({ username, email, password: hashed });

    res.status(201).json({
      message: "user created",
      username,
      email,
    });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({
      where: { username },
      // attributes: ["password"],   // Security LAB 1
    });

    if (!user)
      return res
        .status(400)
        .json({ message: "`username or password is incorrect`" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res
        .status(400)
        .json({ message: "`username or password is incorrect`" });

    // Security LAB 1
    const payload = { id: user.id, email: user.email, username };

    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: "30d", // 60*60*24*30
    });

    res.json({ message: "Login Success", token });
  } catch (err) {
    next(err);
  }
};

const authenticate = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!(authorization || (typeof authorization === "string" && authorization.startsWith("Bearer "))))
      return res.status(401).json({ message: "Unauthorized Access" });

    const token = authorization.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized Access" });

    const payload = jwt.verify(token, process.env.JWT_SECRET_KEY );
    // req.payload = payload; // Not recommended , password change issue, need to compare token issue date to last password change date

    const user = await User.findOne({ where: { id: payload.id } }); // and check date

    if (!user) return res.status(401).json({ message: "Unauthorized Access" }); // Need to check, Banned or Deleted User issue

    req.user = user;

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  register,
  login,
  authenticate,
};
