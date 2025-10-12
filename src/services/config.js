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
  "nombre": "Mary Kay TimeWise Set",
  "precio": 20000,
  "stock": 200,
  "img": "/imagenes/times.png",
  "idCat": "promos",
  "descripcion": "Mary Kay TimeWise | Set de cuidado facial con fórmulas anti-edad. Incluye cremas hidratantes y limpiadoras que ayudan a reducir la apariencia de líneas de expresión y mejorar la firmeza de la piel. Ideal para una rutina diaria de rejuvenecimiento facial."
},
{
  "nombre": "Mary Kay Oil-Free Eye Makeup Remover",
  "precio": 30000,
  "stock": 300,
  "img": "/imagenes/remover.png",
  "idCat": "cosmeticos",
  "descripcion": "Mary Kay Oil-Free Eye Makeup Remover | Desmaquillante bifásico libre de aceite, suave con la piel y efectivo para remover maquillaje resistente al agua. Ideal para el área delicada de los ojos. Contenido neto: 110 mL."
},
{
  "nombre": "Mary Kay TimeWise Age Minimize 3D Revitalizing Sculpting Cream",
  "precio": 20000,
  "stock": 250,
  "img": "/imagenes/timewise.png",
  "idCat": "cosmeticos",
  "descripcion": "Mary Kay TimeWise Age Minimize 3D Revitalizing Sculpting Cream | Crema reafirmante y revitalizante que ayuda a mejorar la elasticidad y firmeza de la piel. Su fórmula avanzada hidrata profundamente y reduce la apariencia de líneas finas y arrugas. Contenido neto: 48 g."
},
{
  "nombre": "Mary Kay TimeWise Age Minimize 3D",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/minimize.png",
  "idCat": "cosmeticos",
  "descripcion": "Mary Kay TimeWise Age Minimize 3D | Crema facial anti-edad que ayuda a reducir líneas de expresión y mejorar la elasticidad de la piel. Formulada con antioxidantes y péptidos para una piel más firme, suave y luminosa."
},
{
  "nombre": "Mary Kay TimeWise Day Solution Sunscreen SPF 30",
  "precio": 50000,
  "stock": 300,
  "img": "/imagenes/solution.png",
  "idCat": "cosmeticos",
  "descripcion": "Mary Kay TimeWise Day Solution Sunscreen SPF 30 | Fluido facial de día con protección solar de amplio espectro (SPF 30). Ayuda a prevenir los signos visibles del envejecimiento y protege la piel contra los rayos UVA/UVB. Textura ligera y rápida absorción. Contenido neto: 29 mL."
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

