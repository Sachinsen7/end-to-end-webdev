import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Sachin!");
});

app.use(express.json());

let teaArray = [];
let nextId = 1;

// making tea

app.post("/teas", (req, res) => {
  const { name, price } = req.body;
  const newTea = { id: nextId++, name, price };
  teaArray.push(newTea);
  res.status(200).send(newTea);
});

// get all the tea
// It saves the  data of json

app.get("/teas", (req, res) => {
  res.status(200).send(teaArray);
});

// get a tea with id

app.get("/teas/:id", (req, res) => {
  const tea = teaArray.find((t) => t.id === parseInt(req.params.id));

  if (!tea) {
    return res.status(404).send("tea not found");
  }
  res.status(200).send(tea);
});

// update tea
app.put("/teas/:id", (req, res) => {
  const tea = teaArray.find((t) => t.id === parseInt(req.params.id));

  if (!tea) {
    return res.status(404).send("tea not found");
  }
  const { name, price } = req.body;
  tea.name = name;
  tea.price = price;

  res.status(200).send(tea);
});

// delete tea

app.delete("/teas/:id", (req, res) => {
  const index = teaArray.findIndex((t) => t.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).send("tea not found");
  }

  teaArray.splice(index, 1);
  res.status(200).send("deleted");
});

app.listen(port, () => {
  console.log(`server is listening to the: ${port}...`);
});
