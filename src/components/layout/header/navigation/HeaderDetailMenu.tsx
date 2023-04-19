import { FC } from "react";
import styles from "./HeaderDetailMenu.module.scss";
import { animated, useTransition } from "@react-spring/web";
const s = styles;

export const HeaderDetailMenu: FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const transition = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return (
    <div className={s.wrapper}>
      {transition(
        (style, item) =>
          item && (
            <animated.menu style={style}>
              <ul>
                {[1, 2, 3].map(() => (
                  <li>test</li>
                ))}
              </ul>
            </animated.menu>
          )
      )}
    </div>
  );
};
