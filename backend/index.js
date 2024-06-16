const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./Routes/auth.js");
const userRoute = require("./Routes/user.js");
const doctorRoute = require("./Routes/doctor.js");
const reviewRoute = require("./Routes/review.js");
const bodyParser = require("body-parser");

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*"); // Replace this with your actual frontend domain in production
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Specify the allowed HTTP methods
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Specify the allowed request headers

//   // Handle preflight requests (OPTIONS)
//   if (req.method === "OPTIONS") {
//     res.sendStatus(200);
//   } else {
//     next();
//   }
// });
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

const corsOptions = {
  origin: "http://localhost:5173", // Replace with your frontend origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  optionsSuccessStatus: 200,
};

app.get("/", (req, res) => {
  res.send("Api is working");
});

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

//database connections
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("mongodb is connected");
  } catch (err) {
    console.log("connection failed");
    console.log(err);
  }
};

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/doctors", doctorRoute);
app.use("/api/v1/reviews", reviewRoute);

app.listen(port, () => {
  connectDB();
  console.log("server is running on " + port);
});
