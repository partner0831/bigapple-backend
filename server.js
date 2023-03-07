// Import modules
const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");

// Import Router
const mintRouter = require("./routes/mint/mint.route");

const app = express();

app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ limit: "50mb" }));

app.use(express.json({ extended: false }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

var corsOption = {
  origin: `*`,
  methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  credentials: true,
  exposedHeaders: ["x-auth-token"],
  url: [
    "https://punk-purchase.vercel.app",
    "https://punk-purchase.vercel.app/new.html",
  ],
};
app.use(cors(corsOption));

app.use("/mint", mintRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
