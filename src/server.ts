import express from "express";
import { sequelize } from "./database";
import { adminJsRouter, adminjs } from "./adminjs";

const app = express();
app.use(express.static("public"));
app.use(adminjs.options.rootPath, adminJsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log("DB Connection Sucessfull");
  });
  console.log(`Server starde sucessfuly at port ${PORT}`);
});