import { helpEnum, navLinkPathEnum, sliderTitleEnum } from "./enum";
import { Dispatch, SetStateAction } from "react";

export interface IHeaderNavLink {
  title: string;
  path: navLinkPathEnum;
}

export interface ISliderData {
  title: sliderTitleEnum;
  path: string;
  disc: string;
  type: string;
  info: ISliderDataInfo;
}

interface ISliderDataInfo {
  Age: string;
  Inoculations: string;
  Diseases: string;
  Parasites: string;
}
export interface IHelpData {
  title: helpEnum;
  path: string;
}

export interface IFooterInfo {
  title: string;
  info: IFooterInfoContent[];
}

export interface IFooterInfoContent {
  logo: string;
  content: string;
}

export interface IPaginationProps {
  pageCount: number;
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
}
