import { Home } from "@/components/screens/home/Home";
import { setLeftMenu } from "@/redux/slices/leftmenu/leftmenu.slice";
import { setTopMenu } from "@/redux/slices/topmenu/topmenu.slice";
import { AppState, wrapper } from "@/redux/store/store";
import { getAllLeftMenu } from "@/service/leftmenu.service";
import { NextPage } from "next";
import { useSelector } from "react-redux";
import { ILeftMenu } from "@/redux/slices/leftmenu/leftmenu.model";
import { getAllTopMenu } from "@/service/topmenu.service";

const HomePage: NextPage<{}> = (props) => {
  const selected: ILeftMenu = useSelector((state: AppState) => state.leftMenu);
  console.log("selected", selected.data);

  return <Home />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const dataLeftMenu = await getAllLeftMenu();
    const dataTopMenu = await getAllTopMenu();

    store.dispatch(setLeftMenu(dataLeftMenu));
    store.dispatch(setTopMenu(dataTopMenu));

    return {
      props: {},
    };
  }
);

export default HomePage;
