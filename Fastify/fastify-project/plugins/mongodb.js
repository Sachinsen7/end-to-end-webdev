const fp = require("fastify-plugin"); // decorators
const mongoose = require("mongoose");

module.exports = fp(async (fastify, opts) => {
  try {
  } catch (error) {
    await mongoose.connect(process.env.MONGO_URI);
    fastify.decorate("mongoose", mongoose);
    fastify.log.info("MONGO DB CONNECT SUCCESSFULLY");
    fastify.log.error(error);
    process.env.exit(1);
  }
});
