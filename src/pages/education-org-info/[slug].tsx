import { Layout } from "@/components/layout/Layout";
import { setLeftMenu } from "@/redux/slices/leftmenu/leftmenu.slice";
import { setTopMenu } from "@/redux/slices/topmenu/topmenu.slice";
import { wrapper } from "@/redux/store/store";
import {
  getAllLeftMenu,
  getAllLeftMenuSlugs,
} from "@/service/leftmenu.service";
import { getAllTopMenu } from "@/service/topmenu.service";
import { NextPage } from "next";

const EducationInfo: NextPage<any> = (props) => {
  const { slugData, leftMenuData } = props;
  console.log("sluGdata", slugData, leftMenuData);
  return <Layout>Ed info</Layout>;
};

export default EducationInfo;

export async function getStaticPaths() {
  const slugs: string[] = await getAllLeftMenuSlugs();
  const paths = slugs.map((slug) => {
    return {
      params: {
        slug: slug,
      },
    };
  });
  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    const leftMenuData = await getAllLeftMenu();
    const topMenuData = await getAllTopMenu();
    const slugData = await getAllLeftMenu();
    store.dispatch(setLeftMenu(leftMenuData));
    store.dispatch(setTopMenu(topMenuData));

    return {
      props: { leftMenuData, slugData },
    };
  }
);
