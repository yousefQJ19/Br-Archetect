import "./style.scss"

function NavBar(){
    return(
        <section className="navBar">
            <p className="navBar__logo"><span>BR</span>Archeticts</p>
            <ul className="navBar__list">
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Contact">Contact</a></li>
            </ul>
        </section>
    )
}
export default NavBar;