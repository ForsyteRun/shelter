import { sliderTitleEnum } from "@/types/enum";
import { ISliderData } from "@/types/interfaces";
import { katrine, jennifer, timmy, woody } from "@/assets/pats";

export const sliderData: ISliderData[] = [
  {
    title: sliderTitleEnum.KATRINE,
    path: katrine,
  },
  {
    title: sliderTitleEnum.JENNIFER,
    path: jennifer,
  },
  {
    title: sliderTitleEnum.WOODY,
    path: woody,
  },
  {
    title: sliderTitleEnum.TIMMY,
    path: timmy,
  },
];
