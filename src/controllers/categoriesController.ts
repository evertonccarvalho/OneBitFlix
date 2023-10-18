import { Request, Response } from "express";
import { Category } from "../models";

export const catetoriesController = {
  index: async (req: Request, res: Response) => {
    try {
      const categoeies = await Category.findAll({
        attributes: ["id", "name", "position"],
        order: [["position", "ASC"]],
      });

      return res.json(categoeies);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
};
