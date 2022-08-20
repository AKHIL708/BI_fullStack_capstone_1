const express = require("express");
const path = require("path");
require("./db/conn");
const app = express();
const port = process.env.PORT || 4000;

const mainPage_Path = path.join(__dirname, "../public/MainPage.html");
const DeletePage_Path = path.join(__dirname, "../public/DeletePage.html");
// console.log(mainPage_Path);

const groceryList = require("./model/structure");

// app.set("view engine", "hbs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(mainPage_Path);
});
app.get("/Delete", (req, res) => {
  res.send("delete page");
});

app.post("/Delete", async (req, res) => {
  try {
    let DeletegroceryItem = req.body.DeletegroceryItem;
    let deleteData = await groceryList.deleteOne({
      groceryItem: DeletegroceryItem,
    });
    res.send(deleteData);
  } catch (err) {
    res.send(err);
    console.log(err);
  }
});

app.post("/", async (req, res) => {
  try {
    const ListOfGrocery = new groceryList({
      groceryItem: req.body.groceryItem,
    });
    let data = await ListOfGrocery.save();

    // res.status(200).json({ result: "successFully Sent the list of items" });
    // res.send("added successfull");
    console.log(data);
  } catch (err) {
    res.send(err);
    console.log(err);
  }
});
app.listen(port, "127.0.0.1", () => {
  console.log(`Express Port Running at ${port}`);
});
