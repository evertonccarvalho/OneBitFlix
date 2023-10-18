import express from "express";
import { catetoriesController } from "./controllers/categoriesController";
import { coursesController } from "./controllers/coursesController";
const router = express.Router();

router.get("/categories", catetoriesController.index);
router.get("/categories/:id", catetoriesController.show);

router.get("/courses/featured", coursesController.featured);
router.get("/courses/newest", coursesController.newest);
router.get("/courses/:id", coursesController.show);
export { router };
