import express from 'express';
import { catetoriesController } from './controllers/categoriesController';
import { coursesController } from './controllers/coursesController';
import { episodesController } from './controllers/episodesController';
import { authController } from './controllers/authController';
import { ensureAuth, ensureAuthViaQuery } from './middlewares/auth';
import { favoritesController } from './controllers/favoritesController';
import { likesController } from './controllers/likesController';
import { usersController } from './controllers/usersControlle';
import homeController from './controllers/home.controller';
const router = express.Router();

router.get('/', homeController.index);

router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);

router.get('/categories', ensureAuth, catetoriesController.index);
router.get('/categories/:id', ensureAuth, catetoriesController.show);
router.get('/courses/popular', ensureAuth, coursesController.popular);
router.get('/courses/featured', ensureAuth, coursesController.featured);
router.get('/courses/newest', coursesController.newest);
router.get('/courses/search', ensureAuth, coursesController.search);
router.get('/courses/:id', ensureAuth, coursesController.show);

router.get('/episodes/stream', ensureAuthViaQuery, episodesController.stream);

router.get(
	'/episodes/:id/watchtime',
	ensureAuth,
	episodesController.getWatchTime
);
router.post(
	'/episodes/:id/watchtime',
	ensureAuth,
	episodesController.setWatchTime
);

router.post('/favorites', ensureAuth, favoritesController.save);
router.get('/favorites', ensureAuth, favoritesController.index);
router.delete('/favorites/:id', ensureAuth, favoritesController.delete);

router.post('/likes', ensureAuth, likesController.save);
router.delete('/likes/:id', ensureAuth, likesController.delete);

router.get('/users/current', ensureAuth, usersController.show);
router.put('/users/current', ensureAuth, usersController.update);
router.put(
	'/users/current/password',
	ensureAuth,
	usersController.updatePassword
);
router.get('/users/current/watching', ensureAuth, usersController.watching);

export { router };
