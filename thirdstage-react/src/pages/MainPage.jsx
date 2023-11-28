import NavBar from "../component/NavBar/navBar" ;
import Header from"../component/Header/header"
import Projects from "../component/Projects/projects";
import About from "../component/About/about"
import Contact from "../component/Contact/contact";

const MainPage=()=>(
        <div>
                <NavBar/>
                <Header/>
                <Projects/>
                <About/>
                <Contact/>
        </div>
)

export default MainPage;