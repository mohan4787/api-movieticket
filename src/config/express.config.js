const express = require("express");
const router = require("./router.config");
const app = express();

app.use("/api/v1/", router);
app.use(express.json());
app.use(express.urlencoded());

app.use((req, res, next) => {
  next({
    code: 400,
    message: "Router not found",
    status: "NOT_FOUND",
  });
});

app.use((err, req, res, next) => {
  let code = error.code || 500;
  let detail = error.detail || null;
  let msg = error.message || "Internal Server Error...";
  let status = error.status || "SERVER_ERROR";

  res.status(code).json({
    error: detail,
    message: msg,
    status: status,
    options: null,
  });
});

module.exports = app;
