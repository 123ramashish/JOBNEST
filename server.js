// importing module
import express from "express";
import path from "path";
import { createServer } from "http";
import { Server } from "socket.io";
import authRouter from "./src/routers/auth.router.js";
import jobRouter from "./src/routers/jobs.router.js";
import applicantRouter from "./src/routers/applicant.router.js";
import jobupdateRouter from "./src/routers/update.router.js";
import jobdeleteRouter from "./src/routers/delete.router.js";
import applyRouter from "./src/routers/apply.router.js";
import errorRouter from "./src/routers/err.router.js";
import expressEjsLayouts from "express-ejs-layouts";
import questionRouter from "./src/routers/question.router.js";
// import { authvalidation } from "./src/middleware/login.middleware.js";
import session from 'express-session';
// import main from "./src/public/main.js";

const app = express();
app.use(
  session({
    secret: "SecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
//set npm template
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "public", "views"));


// chat script start

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

const users = [];

io.on("connection", (socket) => {
  console.log("Connection Established!");
  socket.on("join", ({ username }) => {
    socket.username = username;
    if (username !== null && username !== undefined) {
      users.push(username);
    }

    socket.emit("message", { text: `Welcome ${username}`, users });
    chatModel
      .find()
      .sort({ timestamp: 1 })
      .limit(50)
      .then((messages) => {
        socket.emit("updateMessage", messages);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  socket.on("newMessage", (data) => {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const hour = now.getHours();
    const minutes = now.getMinutes();

    const newMessage = {
      username: data.username,
      time: `${day}/${month}/${year}, ${hour}:${minutes}`,
      message: data.message,
    };
    const newChat = new chatModel({
      username: data.username,
      message: data.message,
      timestamp: `${day}/${month}/${year}, ${hour}:${minutes}`,
    });
    newChat.save();
    io.emit("updateMessage", newMessage);
  });

  socket.on("disconnect", () => {
    console.log("Connection is disconnected!");
  });
});

// chat script end

// middleware
app.use(express.static("src/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressEjsLayouts);
app.use("/auth", authRouter);
app.use("/jobs", jobRouter);
app.use("/new-job", applicantRouter);
app.use("/question", questionRouter);
// app.use("/jobs/:id/update", jobupdateRouter);
// app.use("/jobs/:id/delete", jobdeleteRouter);
app.use("/apply/:id", applyRouter);
app.use("/404", errorRouter);
app.get("/login", (req, res) => {
  res.render("login-page");
});
app.get("/", (req, res) => {
  res.render("landing");
});
app.use((req, res) => {
  res.render("error-page", { message: "Route is not defined!" });
});
app.listen(8000, (req, res) => {
  console.log("Server is listening on port 8000");
  // connectToDB();
});

