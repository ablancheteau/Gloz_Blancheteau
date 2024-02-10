import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
            <nav>
                <h3>Gloz</h3>
                <div>
                    <button>Aros</button>
                    <button>Collares</button>
                    <button>Pulseras</button>
                </div>
                <CartWidget />
            </nav>
    )

}

export default NavBar