import { sliderTitleEnum } from "@/types/enum";
import { ISliderData } from "@/types/interfaces";
import { katrine, jennifer, timmy, woody } from "@/assets/pats";

export const sliderData: ISliderData[] = [
  {
    title: sliderTitleEnum.KATRINE,
    path: katrine,
    disc: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations",
    type: "Cat - British Shorthair",
    info: {
      Age: "3 years",
      Diseases: "none",
      Inoculations: "none",
      Parasites: "none",
    },
  },
  {
    title: sliderTitleEnum.JENNIFER,
    path: jennifer,
    disc: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys",
    type: "Dog - Labrador",
    info: {
      Age: "1 month",
      Diseases: "none",
      Inoculations: "none",
      Parasites: "none",
    },
  },
  {
    title: sliderTitleEnum.WOODY,
    path: woody,
    disc: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him",
    type: "Dog - Golden Retriever",
    info: {
      Age: "4 years",
      Diseases: "none",
      Inoculations: "none",
      Parasites: "none",
    },
  },
  {
    title: sliderTitleEnum.TIMMY,
    path: timmy,
    disc: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on Age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with",
    type: "Cat - British Shorthair",
    info: {
      Age: "5 mothnses",
      Diseases: "none",
      Inoculations: "none",
      Parasites: "none",
    },
  },
];
