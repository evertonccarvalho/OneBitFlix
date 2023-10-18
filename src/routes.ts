import express from "express";
import { catetoriesController } from "./controllers/categoriesController";
import { coursesController } from "./controllers/coursesController";
import { episodesController } from "./controllers/episodesController";
import { authController } from "./controllers/authController";
import { ensureAuth, ensureAuthViaQuery } from "./middlewares/auth";
const router = express.Router();

router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);

router.get("/categories", ensureAuth, catetoriesController.index);
router.get("/categories/:id", ensureAuth, catetoriesController.show);

router.get("/courses/featured", ensureAuth, coursesController.featured);
router.get("/courses/newest", coursesController.newest);
router.get("/courses/search", ensureAuth, coursesController.search);
router.get("/courses/:id", ensureAuth, coursesController.show);

router.get("/episodes/stream", ensureAuthViaQuery, episodesController.stream);
export { router };
