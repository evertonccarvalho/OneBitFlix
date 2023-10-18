import { Response } from "express";
import { AuthenticateRequest } from "../middlewares/auth";
import { favoriteService } from "../services/favoriteService";

export const favoritesController = {
  //POST /favorites
  save: async (req: AuthenticateRequest, res: Response) => {
    const userId = req.user!.id;
    const { courseId } = req.body;

    try {
      const favorite = await favoriteService.create(userId, Number(courseId));
      return res.status(201).json(favorite);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
};
