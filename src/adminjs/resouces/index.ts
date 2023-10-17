import { ResourceWithOptions } from "adminjs";
import { Category, Course, Episode } from "../../models";
import { CategoryResouceOptions } from "./category";
import { courseResourceOptions } from "./course";
import { episodeResourceFeatures, episodeResourceOptions } from "./episode";
export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Category,
    options: CategoryResouceOptions,
  },
  {
    resource: Course,
    options: courseResourceOptions,
  },
  {
    resource: Episode,
    options: episodeResourceOptions,
    features: episodeResourceFeatures,
  },
];
