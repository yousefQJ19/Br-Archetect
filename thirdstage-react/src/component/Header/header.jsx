import "./style.scss"

function Header(){
    return(
        <header className = "header">
            <div className = "header__logo">
            <span className = "header__logo--bold">BR</span>
            <p className = "header__logo--light" >Architects</p>
            </div>
        </header>
    )
}

export default Header;