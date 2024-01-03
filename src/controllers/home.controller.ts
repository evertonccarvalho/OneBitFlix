import { Request, Response } from 'express';

class HomeController {
	async index(req: Request, res: Response) {
		res.send('By Éverton Carvalho');
	}

	async validate(req: Request, res: Response) {
		res.send('okay');
	}
}

const homeController = new HomeController();
export default homeController;
