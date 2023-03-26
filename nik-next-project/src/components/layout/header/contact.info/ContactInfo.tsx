import { FC } from "react";
import styles from "./ContactInfo.module.scss";
const s = styles;

export const ContactInfo: FC<{
  contacts: Array<{ number: string; name: string }>;
}> = ({ contacts }) => {
  return (
    <div className={s.wrapper}>
      <ul>
        {contacts.map((element) => (
          <li>
            <p>{element.number} -</p>
            <p>{element.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
