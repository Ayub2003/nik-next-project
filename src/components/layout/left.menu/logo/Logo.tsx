import Image from "next/image";
import whitelogo from "public/whitelogo.png";
import styles from "./Logo.module.scss";
import Link from "next/link";
const s = styles;

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        className={s.logoImg}
        src={whitelogo}
        width={180}
        height={180}
        alt={""}
      ></Image>
    </Link>
  );
};
