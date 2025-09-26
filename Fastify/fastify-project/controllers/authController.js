const User = require("../models/user");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("@fastify/jwt");

exports.register = async (request, reply) => {
  try {
    const { name, email, password, country } = request.body;

    // validate fields

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ name, email, password: hashedPassword, country });
    await user.save();

    reply.code(201).send({ message: "user registered successfully" });
  } catch (error) {
    reply.send(err);
  }
};

exports.login = async (request, reply) => {
  try {
    const { email, password } = request.body;
    const user = await User.findOne({ email });
    if (!user) {
      return reply.code(400).send({ message: "invaild email or password" });
    }

    // validate password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return reply.code(400).send({ message: "invaild email or password" });
    }

    const token = request.server.jwt.sign({ id: user._id });
    reply.send({ token });
  } catch (error) {
    reply.send(error);
  }
};

exports.fogotPassword = async (request, reply) => {
  try {
    const { email } = request.body;
    const user = await User.findOne({ email });
    if (!user) {
      return reply.badRequest({ message: "user not found" });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpiry = Date.now() + 3600000;
    await user.save({ validateBeforeSave: false });

    const url = `http://localhost:3000/api/auth/reset-password/${resetToken}`;

    reply.code(200).send({ url, message: "email sent" });
  } catch (error) {
    reply.send(error);
  }
};

exports.resetPassword = async (request, reply) => {
  try {
    const { token } = request.params;
    const { password } = request.body;

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpiry: { $gt: Date.now() },
    });
    if (!user) {
      return reply.code(400).send({ message: "token is invalid or expired" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiry = undefined;
    await user.save({ validateBeforeSave: false });

    reply.code(200).send({ message: "password reset successfully" });
  } catch (error) {
    reply.send(error);
  }
};

exports.logout = async (request, reply) => {
  try {
    request.logOut();
    reply.code(200).send({ message: "logout successfully" });
  } catch (error) {
    reply.send(error);
  }
};
