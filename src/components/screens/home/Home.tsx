import { FC } from "react";
import { Layout } from "@/components/layout/Layout";
import { NewsSwiper } from "./swipers/MainSwiper";


export const Home: FC<any> = ({ data }) => {
  return (
    <Layout>
      <NewsSwiper />
    </Layout>
  );
};
