import { sliderTitleEnum } from "@/types/enum";
import { ISliderData } from "@/types/interfaces";
import { katrine, jennifer, timmy, woody } from "@/assets/pats";

export const sliderData: ISliderData[] = [
  {
    title: sliderTitleEnum.KATRINE,
    path: katrine,
    disc: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human",
    type: "Cat - British Shorthair",
    info: {
      age: 3,
      diseases: "none",
      inoculations: "none",
      parasites: "none",
    },
  },
  {
    title: sliderTitleEnum.JENNIFER,
    path: jennifer,
    disc: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys",
    type: "Dog - Labrador",
    info: {
      age: 1,
      diseases: "none",
      inoculations: "none",
      parasites: "none",
    },
  },
  {
    title: sliderTitleEnum.WOODY,
    path: woody,
    disc: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him",
    type: "Dog - Golden Retriever",
    info: {
      age: 4,
      diseases: "none",
      inoculations: "none",
      parasites: "none",
    },
  },
  {
    title: sliderTitleEnum.TIMMY,
    path: timmy,
    disc: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with",
    type: "Cat - British Shorthair",
    info: {
      age: 5,
      diseases: "none",
      inoculations: "none",
      parasites: "none",
    },
  },
];
