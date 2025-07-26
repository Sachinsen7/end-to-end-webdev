import express from "express";
import logger from "./logger.js";
import morgan from "morgan";

const app = express();
const port = 3000;
app.use(express.json());

const morganFormat = ":method :url :status :response-time ms";

let teaData = [];
let nextId = 1;

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

// add a new tea
app.post("/teas", (req, res) => {
  logger.warn("Adding a new tea");
  const { name, price } = req.body;
  const newTea = { id: nextId++, name, price };
  teaData.push(newTea);
  res.status(201).send(newTea);
});

// get all tea

app.get("/teas", (req, res) => {
  res.status(201).send(teaData);
});

// get a tea with id

app.get("/teas/:id", (req, res) => {
  logger.warn("Getting a tea");
  const tea = teaData.find((t) => t.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("tea Not found");
  }
  res.status(201).send(tea);
});

// update the tea

app.put("/teas/:id", (req, res) => {
  const tea = teaData.find((t) => t.id === parseInt(req.params.id));

  if (!tea) {
    return res.status(404).send("tea Not found");
  }
  const { name, price } = req.body;
  tea.name = name;
  tea.price = price;
  res.status(201).send(tea);
});

// delete the tea

app.delete("/teas/:id", (req, res) => {
  const index = teaData.findIndex((t) => t.id === parseInt(req.params.id));
  if (index == -1) {
    return res.status(404).send("Tea Not Found");
  }
  teaData.splice(index, 1);
  return res.status(204).send("deleted tea");
});

// app.get("/", (req, res) => {
//   res.send("hello from Sachin");
// });

// app.get("/ice-tea", (req, res) => {
//   res.send("Again Hello");
// });

// app.get("/instagram", (req, res) => {
//   res.send("so much influencers");
// });

app.listen(port, () => {
  console.log(`server is listening at port: ${port}...`);
});
