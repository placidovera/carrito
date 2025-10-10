import { Link } from "react-router-dom"
const Item = ({id , nombre,precio,stock,img}) => {
  return (
    <div>
      <img style={{width:"300px"}}src={img} alt="imagen del producto" />
        <h3>Producto: {nombre}</h3>
        <p>Precio: {precio}</p>
        <p>Stock: {stock}</p>
        <p>Id: {id}</p>
        <Link to={`/item/${id}`}>
        <button>Detalles</button>
        </Link>
    </div>
  )
}

export default Item