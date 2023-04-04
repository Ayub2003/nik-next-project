import { Home } from "@/components/screens/home/Home";
import { setLeftMenu } from "@/redux/slices/leftmenu/leftmenu.slice";
import { AppState, wrapper } from "@/redux/store/store";
import { NextPage } from "next";
import { useSelector } from "react-redux";

const HomePage: NextPage<{}> = (props) => {
  const selected = useSelector((state: AppState) => state.leftMenu);
  console.log("selected", selected);

  return <Home />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    store.dispatch(
      setLeftMenu({
        data: [
          {
            id: 1,
            parent_id: 0,
            slug: "o-college",
            title: "О колледже",
            sort: null,
          },
        ],
      })
    );

    return {
      props: {},
    };
  }
);

export default HomePage;
