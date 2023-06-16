import { FC, PropsWithChildren } from "react";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { LeftMenu } from "./left.menu/LeftMenu";
import { RightMenu } from "./right.menu/RightMenu";
import styles from "./Layout.module.scss";
import { MobileMenu } from "./header/navigation/MobileMenu";

const s = styles;

export const Layout: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <div className={s.layout}>
      <aside className={s.leftMenu}>
        <LeftMenu />
      </aside>
      <div className={s.wrapper}>
        <Header />
        <div className={s.contentWrapper}>
          <main className={s.main}>{children}</main>
          <aside className={s.rightMenu}>
            <RightMenu />
          </aside>
        </div>
        <footer className={s.footer}>
          <Footer />
        </footer>
      </div>
    </div>
  );
};
