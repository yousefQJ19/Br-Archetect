import {
    createBrowserRouter,
    Route,
    RouterProvider,
    createRoutesFromElements,
}from "react-router-dom"
import MainPage from "../pages/MainPage";
import RootLayout from "../Layout/layout"
import Projects from "../component/Projects/projects";
import Contact from "../component/Contact/contact";
import About from "../component/About/about";

const router= createBrowserRouter(
    createRoutesFromElements(
        <Route path = "/" element = {<RootLayout/>}>
                <Route index element = {<MainPage/>}/>
                <Route path = "Projects" element = {<Projects/>}/>
                <Route path = "About" element = {<About cardsNumber = {1}/>}/>
                <Route path = "Contact" element = {<Contact/>}/>
        </Route>
    )
)

function App(){
    return(
        <RouterProvider router = {router}/>
    )
}

export default App;