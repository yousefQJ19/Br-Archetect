import Projects from "../component/Projects/projects";
import About from "../component/About/about"
import Contact from "../component/Contact/contact";

const MainPage=()=>(
    <div>
        <Projects/>
        <About cardsNumber = {4}/>
        <Contact/>
    </div>
)

export default MainPage;