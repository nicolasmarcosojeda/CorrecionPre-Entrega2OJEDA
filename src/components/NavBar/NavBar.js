import CartWidget from "../CartWidget/Cartwidget"

const NavBar = () => {
   return (
    <nav>
        <h3>Mr.Soccer</h3>
        <div>
            <button>Inicio</button>
            <button>Botines</button>
            <button>Informacion</button>
            <button>Seguinos</button>
        </div>
        <CartWidget/>
    </nav>
   ) 
}

export default NavBar