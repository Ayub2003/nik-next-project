import { FC } from "react";
import { ContactInfo } from "./contact.info/ContactInfo";

export const Header: FC = () => {
  const contacts = [
    { number: "8928-000-00-00", name: "директор" },
    { number: "8928-000-00-00", name: "директор" },
  ];
  return (
    <div>
      <ContactInfo contacts={contacts} />
    </div>
  );
};
