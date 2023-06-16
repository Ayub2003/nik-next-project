import { FC, useState } from "react";
import styles from "./ToggleNavBar.module.scss";
import { setMobileMenuData } from "@/redux/slices/mobileMenu/mobileMenu.slice";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/redux/store/store";
import { MobileMenu } from "./MobileMenu";

const s = styles;

export const ToggleNavBar: FC = (props) => {
  const dispatch = useDispatch();
  const isOpenMenu = useSelector(
    (state: AppState) => state.mobileMenu.data.isOpen
  );

  return (
    <div
      className={s.wrapper}
      onClick={() => {
        dispatch(setMobileMenuData({ data: { isOpen: !isOpenMenu } }));
      }}
    >
      {[1, 2, 3].map(() => (
        <div className={s.line}></div>
      ))}
    </div>
  );
};
