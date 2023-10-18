import express from "express";
import { catetoriesController } from "./controllers/categoriesController";
const router = express.Router();

router.get("/categories", catetoriesController.index);
router.get("/categories/:id", catetoriesController.show);
export { router };
