const thumbnail = require("../controllers/thumbnailControllers");

module.exports = async function (fastify, opts) {
  fastify.register(async function (fastify) {
    fastify.addHook("preHandler", fastify.authenticate);

    fastify.post("/", thumbnail.createThumbnail);
    fastify.get("/", thumbnail.getThumbnails);
    fastify.get("/:id", thumbnail.getThumbnail);
    fastify.put("/:id", thumbnail.updateThumbnail);
    fastify.delete("/:id", thumbnail.deleteThumbnail);
    fastify.delete("/", thumbnail.deletAllThumbnails);
  });
};
