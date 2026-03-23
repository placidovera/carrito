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
  "nombre": "Crema para Pies Renovadora",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/cremaPies.jpg",
  "idCat": "Cuidado Corporal",
  "descripcion": "Su extraordinaria combinación de extractos botánicos restituye la suavidad de la piel, ayuda a reducir la reaparición de asperezas en los pies y también a aliviar la sensación de cansancio. 150 ml"
}
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

