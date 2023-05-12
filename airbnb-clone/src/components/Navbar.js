import logo from "../images/airbnb-logo.png"
function Navbar() {
    return (
        <>
            <nav>
                <img className="nav-img" src={logo} alt="airbnb" />
            </nav>
        </>
    )
}

export default Navbar