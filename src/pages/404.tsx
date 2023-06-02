import {Layout} from "@/components/layout/Layout";
import {wrapper} from "@/redux/store/store";
import {getAllLeftMenu} from "@/service/leftmenu.service";
import {setLeftMenu} from "@/redux/slices/leftmenu/leftmenu.slice";
import {NextPage} from "next";


const Error404: NextPage= () => {
    return <h1 style={{marginTop:"25%"}}>Page not found</h1>

}
export default Error404;

export const getStaticProps = wrapper.getStaticProps(
    (store) => async (context) => {
        const leftMenuData = await getAllLeftMenu();
        const slugData = await getAllLeftMenu();
        store.dispatch(setLeftMenu(leftMenuData));

        return {
            props: { leftMenuData, slugData },
        };
    }
);