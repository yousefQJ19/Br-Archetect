import {
    createBrowserRouter,
    Route,
    RouterProvider,
    createRoutesFromElements,
}from "react-router-dom"
//importing main page
import MainPage from "../pages/MainPage";
//importing root layout
import RootLayout from "../Layout/layout"
//importing projects section
import Projects from "../Containers/Projects/projects";
//importing contact section
import Contact from "../Containers/Contact/contact";
//importing about section
import About from "../Containers/About/about";

const router= createBrowserRouter(
    createRoutesFromElements(
        <Route path = "/" element={<RootLayout/>}>
                <Route index element={<MainPage/>}/>
                <Route path="Projects" element={<Projects/>}/>
                <Route path="About" element={<About cardsNumber={1}/>}/>
                <Route path="Contact" element={<Contact/>}/>
        </Route>
    )
)

function App(){
    return(
        <RouterProvider router={router}/>
    )
}

export default App;
