import { FC, useState } from "react";
import styles from "./HeaderNavBar.module.scss";
import { HeaderDetailMenu } from "./HeaderDetailMenu";
const s = styles;

export const HeaderNavBar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={s.wrapper}>
      <ul>
        {[1, 2, 3, 4].map((e) => (
          <li
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Testtest_{e}
          </li>
        ))}
      </ul>
      <HeaderDetailMenu isOpen={isOpen} />
    </div>
  );
};
