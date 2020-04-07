const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Home",
    name: "Alex Shulyaev",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Alex Shulyaev",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Alex Shulyaev",
    msg: "Help message",
  });
});

app.get("/home", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address",
    });
  }

  res.send({
    address: req.query.address,
  });
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }

  console.log(req.query.search);

  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Alex Shulyaev",
    error: "Help article not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Alex Shulyaev",
    error: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("Server is up in port 3000");
});