import { ResourceOptions } from "adminjs";
export const CategoryResouceOptions: ResourceOptions = {
  navigation: "Catalogo",
  editProperties: ["name", "position"],
  filterProperties: ["name", "position", "createdAt", "updateAt"],
  listProperties: ["id", "name", "position"],
  showProperties: ["id", "name", "position", "createdAt", "updatedAt"],
};
