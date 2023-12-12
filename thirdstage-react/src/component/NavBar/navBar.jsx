import { NavLink } from "react-router-dom";
import "./style.scss"

function NavBar(){
    return(
        <section className = "navBar">
            <NavLink className = "navBar__link" to="/">
                <p className = "navBar__link__logo">
                    <span>
                        BR
                    </span>
                        Archeticts
                </p>
            </NavLink>
            <ul className = "navBar__list">
                <li>
                    <NavLink to = "Projects">
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to = "About">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to = "Contact">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </section>
    )
}
export default NavBar;