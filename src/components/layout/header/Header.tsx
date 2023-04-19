import { FC } from "react";

import Link from "next/link";
import styles from "./Header.module.scss";
import { HeaderNavBar } from "./navigation/HeaderNavBar";

const s = styles;

export const Header: FC = () => {
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
    </div>
  );
};
