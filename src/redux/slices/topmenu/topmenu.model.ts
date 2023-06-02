import {ILeftMenu, IChildrenLeftMenu, ItemNav} from "@/redux/slices/leftmenu/leftmenu.model"

export interface IChildrenTopMenu extends IChildrenLeftMenu{}
export interface ITopMenu extends ILeftMenu{}
export interface ItemTopNav extends ItemNav{}

