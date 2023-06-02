import { TOP_MENU_DATA} from "@/components/api.fetches/api.consts";

export const getAllTopMenu = async () => {
    const response = await fetch(TOP_MENU_DATA);
    const data = await response.json();
    return data;
}