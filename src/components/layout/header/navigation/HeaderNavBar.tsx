import { FC, useState } from "react";
import styles from "./HeaderNavBar.module.scss";
import { HeaderDetailMenu } from "./HeaderDetailMenu";
import {useSelector} from "react-redux";
import {AppState} from "@/redux/store/store";
import {ItemTopNav} from "@/redux/slices/topmenu/topmenu.model";
import {IChildrenLeftMenu, ItemNav} from "@/redux/slices/leftmenu/leftmenu.model";

const s = styles;

export const HeaderNavBar: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const selectedTopMenuData = useSelector((state: AppState) => state.topMenu.data.data)
    const [detailMenuData, setDetailMenuData] = useState<IChildrenLeftMenu[]>();
    const setDetailMenuDataAndIsOpen = (element: ItemNav) => {
        element.children !== undefined
            ? setDetailMenuData(element.children)
            : setDetailMenuData([element]);
        setIsOpen(!isOpen);
    };
  return (
    <div className={s.wrapper}>
      <ul>
        {selectedTopMenuData?.map((element: ItemTopNav) => (
          <li
              key={element.id}
            onClick={() => {
              setDetailMenuDataAndIsOpen(element);
            }}
          >
              {element.title}
          </li>
        ))}
      </ul>
      <HeaderDetailMenu isOpen={isOpen} dataForButtons={detailMenuData} />
    </div>
  );
};
