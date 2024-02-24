import { helpEnum } from "@/types/enum";
import { IHelpData } from "@/types/interfaces";
import {
  bowls,
  collars,
  food,
  medicines,
  shampoos,
  sleeping,
  toys,
  transportation,
  vitamins,
} from "@/assets/icons";

export const helpData: IHelpData[] = [
  {
    title: helpEnum.PET_FOOD,
    path: food,
  },
  {
    title: helpEnum.TRANSPORTATION,
    path: transportation,
  },
  {
    title: helpEnum.TOYS,
    path: toys,
  },
  {
    title: helpEnum.BOWLS_CUPS,
    path: bowls,
  },
  {
    title: helpEnum.SHAMPOOS,
    path: shampoos,
  },
  {
    title: helpEnum.VITAMINS,
    path: vitamins,
  },
  {
    title: helpEnum.MEDICINES,
    path: medicines,
  },
  {
    title: helpEnum.COLLARS,
    path: collars,
  },
  {
    title: helpEnum.SLEEPING,
    path: sleeping,
  },
];
