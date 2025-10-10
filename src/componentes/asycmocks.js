

export const misProductos = [

{
  id:1,
  nombre: "Fernet Branca",
  precio: 15000,
  stock: 102,
  img: "/imagenes/branca.png",
  idCat: "botellas",
  descripcion: "Fernet Branca | Peso Neto: 1.203 kg | Volumen: 750 ml | Amaro italiano elaborado con más de 27 hierbas y especias provenientes de cuatro continentes. Su sabor es intenso, amargo y herbal, ideal para disfrutar solo o con gaseosa cola."
},

{ 
  id:2,
  nombre: "Gancia", 
  precio: 17000, 
  stock: 200, 
  img: "/imagenes/ganciaSprite.png", 
  idCat: "promos",
   descripcion: "Aperitivo Gancia Unidades:1| Peso Neto: 1.203 kg | Volumen: 750 ml |Gaseosas Sprite Unidades:2| Peso Neto: 1.5 kg | Volumen: 1500 ml"
},
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(misProductos);
    }, 500);
  });
};


export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = misProductos.find(item => item.id === Number(id));
      resolve(producto);
    }, 600);
  });
};

export const getProductosPorCategoria=(idCategoria)=>{
  return new Promise(resolve=>{
    setTimeout(()=> {
      const productosCategoria = misProductos.filter(item =>item.idCat === idCategoria)
      resolve(productosCategoria)
  },100)  
  })
}

