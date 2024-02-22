import { pathEnum } from "@/types/enum";
import { IHeaderNavLink } from "@/types/interfaces";

export const headerNavLinks: IHeaderNavLink[] = [
  {
    title: "About the shelter",
    path: pathEnum.ABOUT,
  },
  {
    title: "Our pets",
    path: pathEnum.PETS,
  },
  {
    title: "Help the shelter",
    path: pathEnum.HELP,
  },
  {
    title: "Contacts",
    path: pathEnum.CONTACTS,
  },
];
