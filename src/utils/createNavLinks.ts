import { navLinksTitleEnum, navLinkPathEnum } from "@/types/enum";
import { IHeaderNavLink } from "@/types/interfaces";

const createNavLink = (): IHeaderNavLink[] => [
  {
    title: navLinksTitleEnum.ABOUT,
    path: navLinkPathEnum.ABOUT,
  },
  {
    title: navLinksTitleEnum.PETS,
    path: navLinkPathEnum.PETS,
  },
  {
    title: navLinksTitleEnum.HELP,
    path: navLinkPathEnum.HELP,
  },
  {
    title: navLinksTitleEnum.CONTACTS,
    path: navLinkPathEnum.CONTACTS,
  },
];

export default createNavLink;
