import { FC } from "react";

import styles from "./Specialties.module.scss";
const s = styles;

export const Specialties: FC = () => {
  return (
    <div>
      <div className={s.heading}>
        <h1>Специальности</h1>
        <div className={s.pointWrapper}>
          <div className={s.point}></div>
          <div className={s.point}></div>
          <div className={s.point}></div>
        </div>
        <div className={s.contentBlocks}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
