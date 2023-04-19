import { FC } from "react";
import { Layout } from "@/components/layout/Layout";
import { MainSwiper } from "./swipers/MainSwiper";
import { Specialties } from "./specialties/Specialties";

export const Home: FC<any> = ({ data }) => {
  return (
    <Layout>
      <MainSwiper />
    </Layout>
  );
};
