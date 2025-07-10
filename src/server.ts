import express from "express";

const port = process.env.PORT || 3333;
const app = express();

app.get("/api", (req, res) => {
  res.send("Olá").status(200)
});


app.listen(port, () => {
  console.log(`Server is running port ${port}`);
});