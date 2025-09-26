require("dotenv").config();
const fastify = require("fastify")({ logger: true });

fastify.register(require("@fastify/cors"));
fastify.register(require("@fastify/sensible"));
fastify.register(require("@fastify/multipart"));
fastify.register(require("@fastify/static"), {
  root: path.join(__dirname, "public"),
  prefix: "/uploads/",
});

fastify.register(require("@fastify/env"), {
  dotenv: true,
  schema: {
    type: "object",
    required: ["PORT", "MONGO_URI", "JWT_TOKEN"],
    properties: {
      PORT: { type: "string" },
      MONGO_URI: { type: "string" },
      JWT_TOKEN: { type: "string" },
    },
  },
});

fastify.register(require("./plugins/mongodb"));
fastify.register(require("./plugins/jwt"));

//register route

fastify.register(require("./routes/auth"), { prefix: "/api/auth" });
fastify.register(require("./routes/thumbnail"), { prefix: "/api/thumbnail" });

fastify.get("/", (request, reply) => {
  reply.send({ hello: "world" });
});

fastify.get("/test-db", async (request, reply) => {
  try {
    const mongoose = fastify.mongoose;
    const connectionState = mongoose.connection.readyState;

    let status = "";
    switch (connectionState) {
      case 0:
        status = "disconnected";
        break;
      case 1:
        status = "connected";
        break;
      case 2:
        status = "connecting";
        break;
      case 3:
        status = "disconnecting";
        break;
      default:
        status = "unknown";
        break;
    }

    reply.send({ database: status });
  } catch (error) {
    fastify.log.error(error);
    reply.status(500).send({ error: "Database check failed" });
  }
});

const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT });
    fastify.log.info(
      `Server is listening at http://localhost:${process.env.PORT}`
    );
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
