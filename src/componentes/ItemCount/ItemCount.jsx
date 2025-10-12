import { useState } from "react";

const ItemCount = ({inicial,stock,funcionAgregar}) => {
  const [contador, setContador] = useState(inicial);

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - inicial);
    }
  };

  return (
 <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
   <button className="item-button" onClick={decrementar}>-</button>
    <p style={{ color: 'black', paddingTop: '5px' }}>{contador}</p>
    <button className="item-button" onClick={incrementar}>+</button>
  <button className="item-button" onClick={() => funcionAgregar(contador)}>Agregar al carrito</button>
</div>
  );
};

export default ItemCount;
