import { FC } from "react";

import styles from "./LeftMenu.module.scss";
import { Navigation } from "./navigation/Navigation";
const s = styles;

export const LeftMenu: FC = () => {
  return (
    <div>
      <h4>Сведения об образовательной организации</h4>
      <Navigation />
    </div>
  );
};
