import { ResourceWithOptions } from "adminjs";
import { Category } from "../../models";
import { CategoryResouceOptions } from "./category";
export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Category,
    options: CategoryResouceOptions,
  },
];
