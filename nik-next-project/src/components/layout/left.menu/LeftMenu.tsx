import { FC } from "react";

import styles from "./LeftMenu.module.scss";
import { Navigation } from "./navigation/Navigation";

const s = styles;

export const LeftMenu: FC = () => {
  return (
    <div>
      <div className={s.heading}>
        <p>Сведения об образовательной организации</p>
      </div>

      <Navigation />
    </div>
  );
};
