import { FC, useState } from "react";
import styles from "./LeftMenu.module.scss";
import { Logo } from "./logo/Logo";
import { DetailMenu } from "./navigation/DetailMenu";
import { useSelector } from "react-redux";
import { AppState } from "@/redux/store/store";
import {
  IChildrenLeftMenu,
  ItemNav,
} from "@/redux/slices/leftmenu/leftmenu.model";

const s = styles;
const info =
  "Профессиональная образовательная автономная некоммерческая организация «Национальный инновационный колледж»";

export const LeftMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedLeftMenuData = useSelector(
    (state: AppState) => state.leftMenu.data.data
  );
  const [detailMenuData, setDetailMenuData] = useState<IChildrenLeftMenu[]>();
  const setDetailMenuDataAndIsOpen = (element: ItemNav) => {
    element.children !== undefined
      ? setDetailMenuData(element.children)
      : setDetailMenuData([element]);
    setIsOpen(!isOpen);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.heading}>
        <Logo />
        <div className={s.details}>
          <p>{info}</p>
        </div>
        <ul>
          {selectedLeftMenuData?.map((element: ItemNav) => {
            return (
              <li
                key={element.id}
                onClick={() => {
                  setDetailMenuDataAndIsOpen(element);
                }}
              >
                {element.title}
              </li>
            );
          })}
        </ul>
      </div>
      <DetailMenu isOpen={isOpen} dataForButtons={detailMenuData} />
    </div>
  );
};
