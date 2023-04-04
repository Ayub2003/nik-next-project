import { LEFT_MENU_DATA } from "@/components/api.fetches/api.consts";
import { ILeftMenu } from "@/redux/slices/leftmenu/leftmenu.model";

export const getAllLeftMenu = async () => {
  const response = await fetch(LEFT_MENU_DATA);
  const data: ILeftMenu = await response.json();

  return data;
};
