 import "./CartWidget.css"
 import { Link } from "react-router-dom"
 import { useContext } from "react"
 import { CarritoContext } from "../context/CarritoContext"

const CartWidget = () => {
    const imagCarrito ="/imagenes/carrito.png"
    const{cantidadTotal}=useContext(CarritoContext)

  return (
    <>
    <Link to="/cart">
  <img src={imagCarrito} alt="Imagen carrito" />
  <strong className="cantidades">{cantidadTotal}</strong>
</Link>
  </>
  )
}

export default CartWidget