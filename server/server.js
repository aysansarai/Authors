const express = require("express");

const app = express();
const cors = require("cors");
app.use(express.json(), cors());

const connectDb = require("./config/mongoose.config");
connectDb();

app.get("/", (req, res) => {
  res.send("Server is working");
});

const authorRouter = require("./routes/author.routes");

app.use("/api/authors", authorRouter);

const port = 8000;
app.listen(port, () => console.log(`listening on port: ${port}`));
