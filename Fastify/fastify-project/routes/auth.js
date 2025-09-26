const authController = require("../controllers/authController");

module.exports = async function (fastify, opts) {
  fastify.post("/register", authController.register);
  fastify.post("/login", authController.login);
  fastify.post("/forgot-password", authController.fogotPassword);
  fastify.post("/reset-password/:token", authController.resetPassword);
  fastify.post(
    "/logout",
    { preHandler: [fastify.authenticate] },
    authController.logout
  );
};
