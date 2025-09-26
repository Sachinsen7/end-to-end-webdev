const Thumbnail = require("../models/thumbnail.js");
const path = require("path");
const fs = require("fs");
const util = require("util");
const { pipeline } = require("stream");
const pipelineAsync = util.promisify(pipeline);

exports.createThumbnail = async (request, reply) => {
  try {
    const part = request.part();
    let fields = {};
    let filename;

    for await (const part of part) {
      if (part.file) {
        const filename = `${Date.now()}-${part.filename}`;
        const saveTo = path.join(
          __dirname,
          "..",
          "uploads",
          "thumbnails",
          filename
        );

        await pipelineAsync(part.file, fs.createWriteStream(saveTo));
        fields[part.filename] = filename;
      } else {
        fields[part.filename] = part.value;
      }
    }

    const thumbnail = new Thumbnail({
      user: request.user.id,
      videoName: fields.videoName,
      version: fields.version,
      image: `/uploads/thumbnails/${filename}`,
      paid: fields.paid === "true",
    });

    await thumbnail.save();
    reply.code(201).send(thumbnail);
  } catch (error) {
    reply.send(error);
  }
};

exports.getThumbnails = async (request, reply) => {
  try {
    await Thumbnail.find({ user: request.user.id }).then((thumbnail) => {
      reply.send(thumbnail);
    });
  } catch (error) {
    reply.send(error);
  }
};

exports.getThumbnail = async (request, reply) => {
  try {
    const thumbnail = await Thumbnail.findOne({
      _id: request.params.id,
      user: request.user.id,
    });

    if (!thumbnail) {
      reply.code(404).send({ message: "thumbnail not found" });
    }
    reply.send(thumbnail);
  } catch (error) {
    reply.send(error);
  }
};

exports.updateThumbnail = async (request, reply) => {
  try {
    const updateData = request.body;
    const thumbnail = await Thumbnail.findOneAndUpdate(
      { _id: request.params.id, user: request.user.id },

      updateData,
      { new: true }
    );
    if (thumbnail) {
      reply.code(404).send({ message: "thumbnail not found" });
    }
    reply.send(thumbnail);
  } catch (error) {
    reply.send(error);
  }
};

exports.deleteThumbnail = async (request, reply) => {
  try {
    const thumbnail = await Thumbnail.findByIdAndDelete({
      _id: request.params.id,
      user: request.user.id,
    });
    if (!thumbnail) {
      reply.code(404).send({ message: "thumbnail not found" });
    }

    const imagePath = path.join(
      __dirname,
      "..",
      "uploads",
      "thumbnails",
      path.basename(thumbnail.image)
    );
    fs.unlink(imagePath, (err) => {
      if (err) {
        reply.send(err);
      }
    });

    reply.send({ message: "thumbnail deleted successfully" });
  } catch (error) {
    reply.send(error);
  }
};

exports.deletAllThumbnails = async (request, reply) => {
  try {
    const thumbnails = await Thumbnail.deleteMany({ user: request.user.id });
    for (const thumbnail of thumbnails) {
      const imagePath = path.join(
        __dirname,
        "..",
        "uploads",
        "thumbnails",
        path.basename(thumbnail.image)
      );
      fs.unlink(imagePath, (err) => {
        if (err) {
          reply.send(err);
        }
      });
    }
    reply.send({ message: "all thumbnails deleted successfully" });
  } catch (error) {
    reply.send(error);
  }
};
