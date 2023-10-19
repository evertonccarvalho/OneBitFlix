import { Response } from "express";
import { AuthenticateRequest } from "../middlewares/auth";
import { userService } from "../services/userService";

export const usersController = {
  //GET /users/curent
  show: async (req: AuthenticateRequest, res: Response) => {
    try {
      const currentUser = req.user!;
      return res.json(currentUser);
    } catch (err) {
      if (err instanceof Error)
        return res.status(400).json({ message: err.message });
    }
  },
  //GET /users/current/watching

  watching: async (req: AuthenticateRequest, res: Response) => {
    const { id } = req.user!;

    try {
      const watching = await userService.gepKeepWatchingList(id);
      return res.json(watching);
    } catch (err) {
      if (err instanceof Error)
        return res.status(400).json({ message: err.message });
    }
  },
};
