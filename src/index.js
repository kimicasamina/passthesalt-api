import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import corsOption from "./middleware/corsOption";

dotenv.config();
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(helmet());
app.use(cors(corsOption));

// custom middleware logger
// app.use(logger);

// app.use("/api/users", userRouter);
// app.use("/api/logins", verifyToken, loginRouter);
// app.use("/api/notes", verifyToken, noteRouter);
// app.use("/api/auth", authRouter);

// endpoints
app.get("/", (req, res) => {
  console.log("HELLO WORLD!");
});

// global error handler
app.use("*", (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(err.message);
});

app.listen(process.env.PORT, async () => {
  console.log(
    `Server running on port ${process.env.PORT} \nin ${process.env.NODE_ENV} mode`
  );
  //   connection();
});
