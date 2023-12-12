import { Outlet } from "react-router-dom";
import Header from "../component/Header/header";
import NavBar from "../component/NavBar/navBar";

function rootLayout (){
    return(
        <div>
            <NavBar/>
            <Header/>
            <Outlet/>
        </div>
    )
}

export default rootLayout;