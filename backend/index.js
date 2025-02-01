const express = require("express");
const cors = require("cors");
require("express-async-errors");

const publicRouters = require("./routes/public");
const authRouters = require("./routes/auth");

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const authMiddleware = require("./middleware/requireAuth");

const connectDB = require("./db/connect");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.status(200).json({
    projectName: "DSinnovtech",
    msg: "server is running...",
  });
});

app.use("/api/auth", authRouters);
app.use("/api/public", publicRouters);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`database is connected.\nbackend is running on port ${port}.`)
    );
  } catch (error) {
    console.log(error);
  }
};
start();
