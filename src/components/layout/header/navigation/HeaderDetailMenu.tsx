import React, { FC } from "react";
import styles from "./HeaderDetailMenu.module.scss";
import { animated, useTransition } from "@react-spring/web";
import { IChildrenTopMenu } from "@/redux/slices/topmenu/topmenu.model";
import Link from "next/link";
const s = styles;
const animationProps = {
  from: { opacity: 0 },
  enter: { opacity: 1 },
  leave: { opacity: 0 },
};

export const HeaderDetailMenu: FC<{
  isOpen: boolean;
  dataForButtons?: IChildrenTopMenu[];
}> = ({ isOpen, dataForButtons }) => {
  const transition = useTransition(isOpen, animationProps);

  return (
    <div className={s.wrapper}>
      {transition(
        (style, item) =>
          item && (
            <animated.menu style={style} className={s.menu}>
              {dataForButtons?.map((element, index) => (
                <Link
                  key={index}
                  className={s.link}
                  href={"/education-org-info/" + element.slug}
                >
                  <li>{element.title}</li>
                </Link>
              ))}
            </animated.menu>
          )
      )}
    </div>
  );
};
