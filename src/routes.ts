import express from "express";
import { catetoriesController } from "./controllers/categoriesController";
import { coursesController } from "./controllers/coursesController";
import { episodesController } from "./controllers/episodesController";
const router = express.Router();

router.get("/categories", catetoriesController.index);
router.get("/categories/:id", catetoriesController.show);

router.get("/courses/featured", coursesController.featured);
router.get("/courses/newest", coursesController.newest);
router.get("/courses/search", coursesController.search);
router.get("/courses/:id", coursesController.show);

router.get("/episodes/stream", episodesController.stream);
export { router };
