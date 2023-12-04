require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const ToDo = require("./models/todoModel");

const PORT = 3000;
const app = express();
app.use(express.json());

const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@212.233.79.7/MongoDBMidis`;

app.post("/createTask", async (req, res) => {
  try {
    const task = await ToDo.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    console.log(error.message);
    res.status(500);
  }
});

app.get("/getAllTasks", async (req, res) => {
  try {
    const tasks = await ToDo.find({});
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error.message);
    res.status(500);
  }
});

app.get("/getOneTask/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const task = await ToDo.findById(id);
    res.status(200).json(task);
  } catch (error) {
    console.log(error.message);
    res.status(500);
  }
});

app.put("/updateTask/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const task = await ToDo.findByIdAndUpdate(id, req.body, { new: true });
    if (!task) {
      return res.status(404).send("Задача с таким ID не найдена.");
    }
    res.status(200).json(task);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Ошибка при обновлении задачи.");
  }
});

app.delete("/deleteTask/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const task = await ToDo.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).send("Задача с таким ID не найдена.");
    }
    res.status(200).send(`Задача с ID ${id} удалена.`);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Ошибка при удалении задачи.");
  }
});

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDBMidis!");
    app.listen(PORT, () => {
      console.log(`Сервер запущен на порту ${PORT}`);
    });
  })
  .catch((err) => console.error("An error occurred:", err));
