import { Response } from "express";
import { AuthenticateRequest } from "../middlewares/auth";
import { userService } from "../services/userService";
import { Error } from "sequelize";

export const usersController = {
  //GET /users/curent
  show: async (req: AuthenticateRequest, res: Response) => {
    try {
      const currentUser = req.user!;
      return res.json(currentUser);
    } catch (err) {
      if (err instanceof Error) return res.status(400).json({ message: err.message });
    }
  },

  // PUT /users/current
  update: async (req: AuthenticateRequest, res: Response) => {
    const { id } = req.user!;
    const { firstName, lastName, phone, email, birth } = req.body;

    try {
      const updatedUser = await userService.update(id, {
        firstName,
        lastName,
        phone,
        email,
        birth,
      });

      return res.json(updatedUser);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  //PUT /users/current/password
  updatePassword: async (req: AuthenticateRequest, res: Response) => {
    const user = req.user;
    const { currentPassword, newPassword } = req.body;

    if (!user) {
      return res.status(401).json({ message: "Não autorizado!" });
    }

    try {
      user.checkPassword(currentPassword, async (err, isSame) => {
        if (err) {
          return res.status(400).json({ message: err.message });
        }

        if (!isSame) {
          return res.status(400).json({ message: "Senha incorreta" });
        }

        if (newPassword === currentPassword) {
          return res.status(400).json({ message: "Senha igua à senha antiga!" });
        }

        await userService.updatePassword(user.id, newPassword);
        return res.status(204).json({ message: "Senha atualizada com sucesso" });
      });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  //GET /users/current/watching

  watching: async (req: AuthenticateRequest, res: Response) => {
    const { id } = req.user!;

    try {
      const watching = await userService.gepKeepWatchingList(id);
      return res.json(watching);
    } catch (err) {
      if (err instanceof Error) return res.status(400).json({ message: err.message });
    }
  },
};
