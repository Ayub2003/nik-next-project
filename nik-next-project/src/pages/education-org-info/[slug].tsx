import { Layout } from "@/components/layout/Layout";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

// export const getStaticPaths: GetStaticPaths = async () => {
//   const response = await fetch("http://localhost:5000/leftPages");
//   const pages: Array<{}> = await response.json();
//   const paths = pages.map((element: {}) => {
//     return { params: { slug: element.slug, id: element.id } };
//   });

//   return {
//     paths: paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context: {}) => {
//   const slug = context.params.slug;
//   const id = context.params.id;

//   const response = await fetch(`http://localhost:5000/leftPages/${id}`);
//   const page: {}[] = await response.json();

//   return {
//     props: { page: page },
//   };
// };

const EducationInfo: NextPage<{ page: {} }> = ({ page }) => {
  return <Layout>Ed info</Layout>;
};

export default EducationInfo;
