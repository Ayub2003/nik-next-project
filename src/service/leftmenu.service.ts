import { BASE_URL, LEFT_MENU_DATA } from "@/components/api.fetches/api.consts";
import { LeftMenu } from "@/components/layout/left.menu/LeftMenu";
import {
  IChildrenLeftMenu,
  ILeftMenu,
  ItemNav,
} from "@/redux/slices/leftmenu/leftmenu.model";
import axyos from "axios";

export const getAllLeftMenu = async () => {
  const response = await fetch(LEFT_MENU_DATA);
  const data = await response.json();
  return data;
};

export const getAllLeftMenuSlugs = async () => {
  const slugs: string[] = [];
  const data: ItemNav[] = await fetch(LEFT_MENU_DATA)
    .then((response) => response.json())
    .then((data) => data.data);

  data.map((element: ItemNav) => {
    if (element.children !== undefined) {
      element.children.map((childElement: IChildrenLeftMenu) => {
        slugs.push(childElement.slug);
      });
    } else {
      slugs.push(element.slug);
    }
  });
  console.log(slugs);

  return slugs;
};
