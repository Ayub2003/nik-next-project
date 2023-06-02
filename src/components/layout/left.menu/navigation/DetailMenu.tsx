import { IChildrenLeftMenu } from "@/redux/slices/leftmenu/leftmenu.model";
import Link from "next/link";
import React, { FC } from "react";
import styles from "./DetailMenu.module.scss";
import { animated, useSpring, useTransition } from "@react-spring/web";
const s = styles;

export const DetailMenu: FC<{
  isOpen: boolean;
  dataForButtons?: IChildrenLeftMenu[];
}> = ({ isOpen, dataForButtons }) => {
  const transition = useTransition(isOpen, {
    from: { opacity: 1, x: -300 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 1, x: -300 },
  });
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
