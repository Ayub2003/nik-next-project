import { FC } from "react";

import Link from "next/link";
import styles from "./Header.module.scss";
import { HeaderNavBar } from "./navigation/HeaderNavBar";
import { ToggleNavBar } from "./navigation/ToggleNavBar";
import { useSelector } from "react-redux";
import { AppState } from "@/redux/store/store";
import { MobileMenu } from "./navigation/MobileMenu";
import { animated, useTransition } from "@react-spring/web";

const s = styles;

export const Header: FC = () => {
  const mobileMenuIsOpen = useSelector(
    (state: AppState) => state.mobileMenu.data.isOpen
  );

  const contacts = [
    { number: "+7 (928)-000-00-00", name: "директор" },
    { number: "+7 (928)-000-00-00", name: "директор" },
    { number: "+7 (928)-000-00-00", name: "директор" },
  ];
  return (
    <div className={s.wrapper}>
      <div className={s.contacts}>
        <ul>
          {contacts.map(({ number, name }) => (
            <li>
              {number} - {name}
            </li>
          ))}
        </ul>
      </div>
      <HeaderNavBar />
      <MobileMenu />
    </div>
  );
};
