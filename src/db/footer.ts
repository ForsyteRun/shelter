import { IFooterInfo } from "@/types/interfaces";
import { email, phone, marker } from "./../assets/icons";

export const footerInfo: IFooterInfo[] = [
  {
    title: "For questions and suggestions",
    info: [
      {
        logo: email,
        content: "email@shelter.com",
      },
      {
        logo: phone,
        content: "+13 674 567 75 54",
      },
    ],
  },
  {
    title: "We are waiting for your visit",
    info: [
      {
        logo: marker,
        content: "1 Central Street, Boston (entrance from the store)",
      },
      {
        logo: marker,
        content: "18 South Park, London ",
      },
    ],
  },
];
