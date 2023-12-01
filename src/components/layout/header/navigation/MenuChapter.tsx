import { IChildrenLeftMenu } from "@/redux/slices/leftmenu/leftmenu.model";
import { FC, useState } from "react";
import s from "./MenuChapter.module.scss";
import { animated, useTransition } from "@react-spring/web";

export const MenuChapter: FC<{
  id: number;
  title: string;
  children?: IChildrenLeftMenu[] | undefined;
}> = (props) => {
  const { title, children } = props;
  const [isOpenChapter, setIsOpenChapter] = useState(false);

  const toggleChapter = () => {
    setIsOpenChapter(!isOpenChapter);
  };
  return (
    <>
      <li className={isOpenChapter ? s.chapterOpened : s.chapterClosed}>
        <div
          onClick={toggleChapter}
          className={isOpenChapter ? s.checkMarkOpened : s.checkMarkClosed}
        >
          <div className={s.line}></div>
          <div className={s.line}></div>
        </div>

        <p>{title}</p>
      </li>
      <ul
        style={{ transition: "all 1s easy" }}
        className={isOpenChapter ? s.chapterListOpened : s.chapterListClosed}
      >
        {children?.map((child) => (
          <li>{child.title}</li>
        ))}
      </ul>
    </>
  );
};
