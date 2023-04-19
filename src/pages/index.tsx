import { Home } from "@/components/screens/home/Home";
import { setLeftMenu } from "@/redux/slices/leftmenu/leftmenu.slice";
import { AppState, wrapper } from "@/redux/store/store";
import { getAllLeftMenu } from "@/service/leftmenu.service";
import { NextPage } from "next";
import { useSelector } from "react-redux";

const HomePage: NextPage<{}> = (props) => {
  const selected = useSelector((state: AppState) => state.leftMenu);
  console.log("selected", selected.data);

  return <Home />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const data = await getAllLeftMenu();
    store.dispatch(setLeftMenu(data));

    return {
      props: {},
    };
  }
);

export default HomePage;
