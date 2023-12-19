import Projects from "../Containers/Projects/projects";
import About from "../Containers/About/about"
import Contact from "../Containers/Contact/contact";

const MainPage=()=>(
    <div>
        <Projects/>
        <About cardsNumber = {4}/>
        <Contact/>
    </div>
)

export default MainPage;