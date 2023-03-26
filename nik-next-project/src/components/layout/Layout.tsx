import { FC, PropsWithChildren } from "react";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { LeftMenu } from "./left.menu/LeftMenu";
import { RightMenu } from "./right.menu/RightMenu";
import styles from "./Layout.module.scss";
const s = styles;

export const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div className={s.layout}>
      <div className={s.leftMenu}>
        <LeftMenu />
      </div>
      <div className={s.wrapper}>
        <div className={s.header}>
          <Header />
        </div>
        <div className={s.contentWrapper}>
          <main className={s.main}>{children}</main>
          <div className={s.rightMenu}>
            <RightMenu />
          </div>
        </div>
        <div className={s.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
};
