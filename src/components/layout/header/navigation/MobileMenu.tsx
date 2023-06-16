import { ItemNav } from "@/redux/slices/leftmenu/leftmenu.model";
import { AppState } from "@/redux/store/store";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./MobileMenu.module.scss";
import { setMobileMenuData } from "@/redux/slices/mobileMenu/mobileMenu.slice";
import { animated, useTransition } from "@react-spring/web";
const s = styles;

export const MobileMenu: FC = () => {
  const dispatch = useDispatch();

  const isOpenMenu = useSelector(
    (state: AppState) => state.mobileMenu.data.isOpen
  );
  const dataLeftMenu: ItemNav[] = useSelector(
    (state: AppState) => state.leftMenu.data.data
  );
  const dataTopMenu: ItemNav[] = useSelector(
    (state: AppState) => state.topMenu.data.data
  );

  const transition = useTransition(isOpenMenu, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const dataMobileMenu: ItemNav[] = [...dataLeftMenu, ...dataTopMenu];

  return (
    <>
      {transition(
        (style, item) =>
          item && (
            <animated.div className={s.wrapper} style={style}>
              <div
                className={s.back}
                onClick={() => {
                  dispatch(
                    setMobileMenuData({ data: { isOpen: !isOpenMenu } })
                  );
                }}
              >
                {[1, 2].map(() => (
                  <div className={s.line}></div>
                ))}
              </div>

              {dataMobileMenu?.map((element: ItemNav) => {
                return (
                  <div className={s.chapter}>
                    {element.title}
                    <div>\/</div>
                  </div>
                );
              })}
            </animated.div>
          )
      )}
    </>
  );
};
