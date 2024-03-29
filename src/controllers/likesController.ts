import { Response } from "express";
import { AuthenticateRequest } from "../middlewares/auth";
import { likeService } from "../services/likeService";

export const likesController = {
  //POST /likes
  save: async (req: AuthenticateRequest, res: Response) => {
    const userId = req.user!.id;
    const { courseId } = req.body;

    try {
      const like = await likeService.create(userId, courseId);
      return res.status(201).json(like);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
  //DELETE /likes/:id
  delete: async (req: AuthenticateRequest, res: Response) => {
    const userId = req.user!.id;
    const courseId = req.params.id;
    try {
      await likeService.delete(userId, Number(courseId));
      return res.status(204).send();
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
};
