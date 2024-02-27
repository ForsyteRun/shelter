import { helpEnum, pathEnum, sliderTitleEnum } from "./enum";

export interface IHeaderNavLink {
  title: string;
  path: pathEnum;
}
export interface ISliderData {
  title: sliderTitleEnum;
  path: string;
  disc: string;
  type: string;
  info: ISliderDataInfo;
}

interface ISliderDataInfo {
  age: number;
  inoculations: string;
  diseases: string;
  parasites: string;
}
export interface IHelpData extends Omit<ISliderData, "title"> {
  title: helpEnum;
}

export interface IFooterInfo {
  title: string;
  info: IFooterInfoContent[];
}

export interface IFooterInfoContent {
  logo: string;
  content: string;
}
