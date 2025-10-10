import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


export const misProductos = [

{
  nombre: "Fernet Branca",
  precio: 15000,
  stock: 102,
  img: "/imagenes/branca.png",
  idCat: "botellas",
  descripcion: "Fernet Branca | Peso Neto: 1.203 kg | Volumen: 750 ml | Amaro italiano elaborado con más de 27 hierbas y especias provenientes de cuatro continentes. Su sabor es intenso, amargo y herbal, ideal para disfrutar solo o con gaseosa cola."
},

{ 
  nombre: "Gancia", 
  precio: 17000, 
  stock: 200, 
  img: "/imagenes/ganciaSprite.png", 
  idCat: "promos",
   descripcion: "Aperitivo Gancia Unidades:1| Peso Neto: 1.203 kg | Volumen: 750 ml |Gaseosas Sprite Unidades:2| Peso Neto: 1.5 kg | Volumen: 1500 ml"
},
];

import { collection,doc,writeBatch } from "firebase/firestore";
const subirProductos =async()=>{
const batch = writeBatch(db);
const productosRef = collection(db,"productos");

misProductos.forEach((producto)=>{
  const nuevoDoc = doc(productosRef);
  batch.set(nuevoDoc,producto);
});
try{
  await batch.commit();
  console.log("productos subidos exitosamente");
}catch(error){
  console.log("Error subiendo productos",error)
}
};
// subirProductos()

