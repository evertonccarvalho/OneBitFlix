import { ResourceWithOptions } from "adminjs";
import { Category, Course } from "../../models";
import { CategoryResouceOptions } from "./category";
import { courseResourceOptions } from "./course";
export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Category,
    options: CategoryResouceOptions,
  },
  {
    resource: Course,
    options: courseResourceOptions,
  },
];
