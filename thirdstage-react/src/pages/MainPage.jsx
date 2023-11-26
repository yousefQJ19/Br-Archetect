import NavBar from "../component/NavBar/navBar" ;
import Header from"../component/Header/header"
import Projects from "../component/Projects/projects";
import About from "../component/About/about"
import Contact from "../component/Contact/contact";
function MainPage(){
        return(
        <div>
                <NavBar/>
                <Header/>
                <Projects/>
                <About/>
                <Contact/>
        </div>
        )
        
}

export default MainPage;