import { Layout } from "@/components/layout/Layout";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

const EducationInfo: NextPage<{ page: {} }> = ({ page }) => {
  return <Layout>Ed info</Layout>;
};

export default EducationInfo;
