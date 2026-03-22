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
  "nombre": "Pasta de Dientes Multi-acción con Fluoruro",
  "precio": 20000,
  "stock": 200,
  "img": "/imagenes/pasta.jpg",
  "idCat": "Cuidado Oral",
  "descripcion": "Nueva fórmula de acción múltiple libre de parabenos y con una mezcla mejorada de sabor a menta certificada por Nutrilite™ ayuda a combatir las caries, ayuda a eliminar la placa, promueve la remineralización, ayuda a fortalecer y proteger el esmalte.Además limpia y refresca el aliento de forma segura cada vez que te cepillas los dientes. Una parte esencial de tu rutina diaria de cuidado bucal"
},
{
  "nombre": "Enjuague Bucal Multiacción",
  "precio": 30000,
  "stock": 300,
  "img": "/imagenes/enjuague.jpg",
  "idCat": "Cuidado Oral",
  "descripcion":"Nuestro mejorado Enjuague bucal concentrado de acción múltiple ahora sin alcohol, sin colorantes y con una mezcla mejorada de sabor a menta certificada por Nutrilite™ ayuda a reducir la placa, refresca el aliento y ayuda a limpiar entre los dientes como parte esencial de tu rutina diaria de cuidado bucal.Contenido neto: 72 mL."
},
{
  "nombre": "Refrescante bucal en Spray Glister",
  "precio": 20000,
  "stock": 250,
  "img": "/imagenes/spray.jpg",
  "idCat": "Cuidado Oral",
  "descripcion":"Obtén un aliento refrescante, instantáneo y duradero con cada rociado de este spray esencial para llevar a cualquier parte.Dosificador sin aerosol de 14 ml"
},
{
  "nombre": "Cepillo Dental Suave Multiacción",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/cepillos.jpg",
  "idCat": "Cuidado Oral",
  "descripcion": "Esta herramienta de acción múltiple con cerdas suaves ayuda a eliminar la placa, limpiar los dientes, la lengua y masajear las encías. Una parte esencial de tu rutina diaria de cuidado bucal.4 unidades"
},
{
  "nombre": "Hilo Dental Multiacción",
  "precio": 50000,
  "stock": 300,
  "img": "/imagenes/hiloDental.jpg",
  "idCat": "Cuidado Oral",
  "descripcion":"Por primera vez en el cuidado bucal Glister™, este hilo dental de acción múltiple ayuda a eliminar la placa de las superficies de los dientes, que el cepillado no puede alcanzar, mientras estimula suavemente las encías. Una parte esencial de tu rutina diaria de cuidado bucal.2 unidades con 50 metros c/u"},
{
  "nombre": "Satinique Shampoo Hidratación y Suavidad",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/shampoo.jpg",
  "idCat": "Cuidado del Cabello",
  "descripcion": "Fórmula vegana enriquecida con proteínas que ayuda a mantener el cabello hidratado, sedoso y manejable desde la raíz hasta las puntas."
},
{
  "nombre": "Satinique Acondicionador Hidratación y Suavidad",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/acondicionador.jpg",
  "idCat": "Cuidado del Cabello",
  "descripcion": "Fórmula enriquecida con proteínas que ayudan a mantener el cabello hidratado, sedoso y manejable desde la raíz hasta las puntas."
},{
  "nombre": "Satinique Shampoo Reparador Intensivo",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/shampooReparador.jpg",
  "idCat": "Cuidado del Cabello",
  "descripcion": "Fórmulas enriquecidas con proteínas que ayudan a reparar y fortalecer las puntas abiertas para un cabello más fuerte y con aspecto más sedoso, mientras ayuda a mantener el color."
},{
  "nombre": "Satinique Acondicionador Reparador Intensivo",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/acondiccionadorReparador.jpg",
  "idCat": "Cuidado del Cabello",
  "descripcion": "Fórmulas enriquecidas con proteínas que ayudan a reparar y fortalecer las puntas abiertas para un cabello más fuerte y con aspecto más sedoso, mientras ayuda a mantener el color."
},{
  "nombre": "Satinique Shampoo Anticaída",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/shampooAnti.jpg",
  "idCat": "Cuidado del Cabello",
  "descripcion": "Ayuda a fortalecer el cabello desde la raíz hasta las puntas ayudando a prevenir la caída debido al quiebre*. En un mes tendrás un cabello más abundante y de aspecto más grueso al mismo tiempo, ayudas a mejorar la barrera de hidratación del cuero cabelludo."
},{
  "nombre": "Satinique Acondicionador Anticaída",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/acondicionadorAnti.jpg",
  "idCat": "Cuidado del Cabello",
  "descripcion": "Ayuda a fortalecer el cabello desde la raíz hasta las puntas ayudando a prevenir la caída debido al quiebre*. En un mes tendrás un cabello más abundante y de aspecto más grueso al mismo tiempo, ayudas a mejorar la barrera de hidratación del cuero cabelludo."
},{
  "nombre": "Satinique Shampoo Anticaspa",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/shampooCaspa.jpg",
  "idCat": "Cuidado del Cabello",
  "descripcion": "Probado dermatológicamente limpia profundamente el cuero cabelludo y el cabello ayudando a reducir la descamación y a prevenir la reaparición de la caspa.**"
},{
  "nombre": "Satinique Tratamiento Reparador Intensivo",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/reparadorIntensivo.jpg",
  "idCat": "Cuidado del Cabello",
  "descripcion": "Ayuda a sellar las cutículas, mejorando la superficie del cabello dañado y reparando la fibra del cabello desde el interior, al mismo tiempo, ayuda a fortalecer cada hebra para un cabello más fuerte y de aspecto más sedoso.250 ml"
},{
  "nombre": "Satinique Tónico Anticaída para el Cuero Cabelludo",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/tonicoAnticaida.jpg",
  "idCat": "Cuidado del Cabello",
  "descripcion": "Revitaliza el cuero cabelludo y fortalece el cabello desde la raíz, ayudando a prevenir la caída por quiebre*. En un mes tu cabello lucirá más abundante, al mismo tiempo, mejora la hidratación del cuero cabelludo, creando el ambiente ideal para un cabello más fuerte. *Por causas no asociadas a enfermedades o terapéuticas.120 ml"
},{
  "nombre": "Satinique Loción Reparadora Intensiva",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/locionCapilar.jpg",
  "idCat": "Cuidado del Cabello",
  "descripcion": "Ayuda a tener un cabello dócil y manejable controlando el frizz y revitalizando el cabello opaco y dañado o quebradizo, promoviendo un aumento del brillo."
},{
  "nombre": "Suero en Aceite Capilar de Reparación Intensiva",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/sueroCapilar.jpg",
  "idCat": "Cuidado del Cabello",
  "descripcion": "De rápida absorción, revitaliza al instante, proporcionándote un cabello manejable y brillante que luce y se siente sedoso, ayudando a reparar el cabello dañado y las puntas abiertas."
},{
  "nombre": "Satinique Solución Anticaída",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/kitAnticaida.jpg",
  "idCat": "Promos",
  "descripcion": "La Solución Anticaída ayuda a fortalecer el cabello hasta 2 veces* desde las raíz hasta las puntas, ayudando a prevenir la caída debido al quiebre. En un mes*, tendrás un cabello más abundante y de aspecto más grueso. Al mismo tiempo, mejorará la hidratación del cuero cabelludo.(- Masajeador por tiempo limitado, hasta agotar existencias)"
},{
  "nombre": "Gel de baño Exfoliante Refrescante",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/gelExfoliante.jpg",
  "idCat": "Cuidado Corporal",
  "descripcion": "El gel de baño exfoliante diario con agua de complejo de bambú, ceramida derivada del aceite de oliva, acerola verde y exfoliantes naturales, ayuda a eliminar suavemente las impurezas y las células muertas de la piel, dejándola con una sensación de frescura e hidratación. Fórmula biodegradable.400 ml"
},{
  "nombre": "Locion Corporal Refrescante",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/locionCorporal.jpg",
  "idCat": "Cuidado Corporal",
  "descripcion": "La loción corporal refrescante con agua de complejo de bambú, ceramida derivada del aceite de oliva y acerola verde brinda una explosión de hidratación y ayuda a reparar y proteger la barrera de la piel.400 ml"
},{
  "nombre": "Jabón Líquido para Manos",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/jabonLiquidoManos.jpg",
  "idCat": "Cuidado Corporal",
  "descripcion": "El jabón antibacterial de manos, que no reseca, está formulado con agua de palmera de cica, romero y té verde, efectivo contra los gérmenes más comunes, manteniendo las manos limpias y frescas. Fórmula con biodegradabilidad demostrada.250 ml"
},{
  "nombre": "Desodorante y Antitranspirante Roll-On",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/desodoranteAnti.jpg",
  "idCat": "Cuidado Corporal",
  "descripcion": "Roll-on antitranspirante de secado rápido con complejo cica agua, romero y té verde que aporta protección contra el olor y la humedad de las axilas sin dejar manchas blancas.100 ml"
},{
  "nombre": "Crema para manos nutritiva",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/cremaManos.jpg",
  "idCat": "Cuidado Corporal",
  "descripcion": "La crema de manos intensiva con agua de complejo de bambú, ceramida derivada del aceite de oliva, aceite de chía blanca y una alta concentración de manteca de karité nutre y alivia instantáneamente las manos secas y ásperas, proporcionando también una capa protectora de humectación en la superficie de la piel.75 ml"
},{
  "nombre": "Barra de Jabón Nutritiva",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/barraJabon.jpg",
  "idCat": "Cuidado Corporal",
  "descripcion": "El jabón en barra para dividirse en 3 partes con ceramida derivada del aceite de oliva y aceite de chía blanca limpia suavemente mientras mejora la tez de la piel. Fórmula biodegradable.Barra de 250 g (9 oz.) con 3 piezas"
},{
  "nombre": "Gel de baño y Shampoo para bebé",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/gelDucha.jpg",
  "idCat": "Cuidado Corporal",
  "descripcion": "Producto 2 en 1que brinda triple barrera de protección. Ayuda a suavizar mientras limpia cuidadosamente la delicada piel del bebé, de la cabeza a los pies.400 ml"
},{
  "nombre": "Loción corporal para bebé",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/locionBebe.jpg",
  "idCat": "Cuidado Corporal",
  "descripcion": "Loción corporal de textura suave, no grasosa y sin fragancia que proporciona una hidratación duradera para cuidar la piel de tu bebé. 400 ml"
},{
  "nombre": "Crema para Manos Intensive Care Anti-Edad",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/cremaManosAnti.jpg",
  "idCat": "Cuidado Corporal",
  "descripcion": "La Crema para Manos proporciona cuidado y protección diarios, diseñadas específicamente para la delicada y sensible piel de las manos.100 ml"
},{
  "nombre": "Crema para Pies Renovadora",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/cremapies.jpg",
  "idCat": "Cuidado Corporal",
  "descripcion": "Su extraordinaria combinación de extractos botánicos restituye la suavidad de la piel, ayuda a reducir la reaparición de asperezas en los pies y también a aliviar la sensación de cansancio. 150 ml"
},{
  "nombre": "Protector Solar Corporal Vegano FPS 50",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/protectorSolar.jpg",
  "idCat": "Cuidado Corporal",
  "descripcion": "Diseñado para brindar una protección natural y segura para pieles extremadamente sensibles al sol."
},{
  "nombre": "Espuma Limpiadora Renovadora",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/espumaLimpiadora.jpg",
  "idCat": "Cuidado de la Piel",
  "descripcion": "Limpiador cremoso que se transforma en espuma densa y espesa que deja la piel limpia de impurezas y contaminación (incluido el Material Particulado PM 2.5). Ayuda a eliminar la suciedad, las impurezas, los residuos de maquillaje y el exceso de grasa de forma eficaz, fácil y rápida sin dejar la piel seca.Fórmula patentada que acondiciona suavemente la piel. 125 ml"
},{
  "nombre": "Tónico Suavizante Renovador",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/tonicoAnticaida.jpg",
  "idCat": "Cuidado de la Piel",
  "descripcion": "Tónico especialmente formulado para ayudar a tratar los signos visibles de una piel seca, el cual fortalece el sistema de soporte de la piel y ayuda a minimizar las líneas visibles de expresión.Ayuda a estabilizar y fortalecer el microbioma de la piel manteniéndola en equilibrio al mismo tiempo que mantiene y fortalece la barrera de humectación de la piel.Contiene ingredientes relajantes que suavizan y ayudan a recuperar una piel con apariencia más juvenil.200 ml"
},{
  "nombre": "Crema de Reactivación Renovadora para ojos",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/cremaOjos.jpg",
  "idCat": "Cuidado de la Piel",
  "descripcion": "Crema de Reactivación que reafirma y levanta y con el uso frecuente, tonifica visiblemente la piel alrededor del área de los ojos además ayuda a reducir la apariencia de líneas finas y signos visibles de la edad (líneas de expresión, pérdida de firmeza, resequedad, ojeras). Ofrece protección antioxidante gracias a que contiene granada cultivada de la marca Nutrilite™.15 ml"
},{
  "nombre": "Crema de Reactivación Renovadora",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/cremaReactivacion.jpg",
  "idCat": "Cuidado de la Piel",
  "descripcion": "Crema enriquecida para complementar las necesidades claves de tu piel y dejarla visiblemente bien cuidada ayudándola a reducir los factores estresantes, revitalizándola y devolviéndole una apariencia más juvenil.50 ml"
},{
  "nombre": "Crema Hidratante",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/gelRostro.jpg",
  "idCat": "Cuidado de la Piel",
  "descripcion": "Nuestra avanzada fórmula hidratante nutre y relaja la piel. Ayuda a prevenir los signos visibles de la edad, como las líneas de expresión, la falta de brillo, la textura deficiente y el tono desigual de la piel."
},{
  "nombre": "Agua Micelar - Desmaquillante y Limpiador",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/aguaMicelar.jpg",
  "idCat": "Cuidado de la Piel",
  "descripcion": "El Agua Micelar sin fragancia ayuda a remover inmediatamente todo tipo de maquillaje, incluidos los de larga duración y a prueba de agua.Al ser tan eficaz, actúa sin frotar excesivamente la piel, lo que ayuda a evitar la irritación. Funciona con todo tipo de maquillaje de ojos, labios y rostro. No deja residuos oleosos, incluso acondiciona tus pestañas. La fórmula no requiere enjuague."
},{
  "nombre": "Limpiador Nivelador en Gel",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/gelLimpiador.jpg",
  "idCat": "Cuidado de la Piel",
  "descripcion": "Esta fórmula elimina el exceso de grasa superficial que puede obstruir los poros.Su acción de limpieza profunda puede ayudar a mantener tu piel libre de imperfecciones dejando la sensación refrescante.beGel transparente, con un toque iridiscente que se convierte en espuma abundante y refrescante que limpia en profundidad los poros.Purifica y libera la piel del exceso de grasa, los restos de maquillaje, la suciedad, la contaminación y otras impurezas que pueden adherirse con mayor frecuencia a la piel grasa.El Limpiador Nivelador en Gel Artistry Skin Nutrition ha demostrado clínicamente que elimina la contaminación y las impurezas irritantes (incluidas las PM 2,5) de la piel.Esto ayuda a detener el inicio de la irritación antes de que pueda comenzar y ayuda a mantener la barrera de defensa de la piel en un estado más estable.Tipo de piel: grasa o normal a grasa"
},{
  "nombre": "Tri Iron Folic - Combina hierro y vitamina C",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/vitaminaC.jpg",
  "idCat": "Suplementos Nutricionales",
  "descripcion": "Una combinación de 3 nutrientes esenciales: ácido fólico, 3 fuentes de hierro y vitamina C. Además, el Tri-Iron Folic contiene concentrado de espinaca Nutrilite, una importante fuente de fitonutrientes.90 pastillas"
},{
  "nombre": "HSN - Nutrición para cabello, piel y uñas",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/hsnPiel.jpg",
  "idCat":"Suplementos Nutricionales",
  "descripcion": "Su fórmula contiene L-cisteína, un aminoácido que promueve la formación de queratina. Además contiene colágeno hidrolizado, biotina, extracto de semilla de uva y vitamina C que participan en la humectación de la piel. Es una combinación única de ingredientes que ayudan a nutrir el cabello, la piel y las uñas.60 pastillas"
},{
  "nombre": "Multicaroteno",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/multicaroteno.jpg",
  "idCat": "Suplementos Nutricionales",
  "descripcion": "Exclusiva fórmula con combinación de nutrientes como alfa y betacarotenos, luteína y zeaxantina que no son producidos por tu cuerpo. Ideal para quienes quieren aumentar el consumo de estos nutrientes de frutas y vegetales de la gama de color amarillo y naranja.90 cápsulas blandas"
},{
  "nombre": "Vitamina B Plus - Potencia tu energía",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/vitaminaB.jpg",
  "idCat": "Suplementos Nutricionales",
  "descripcion": "Su tableta bicapa de liberación dual provee 8 horas de soporte. Cuenta con una tecnología de liberación inmediata de vitaminas B2 y B12 y una tecnología de liberación prolongada para las vitaminas B1, B3, B5, B6, B7 y B9 las cuales se liberan de forma gradual, lenta y constante, permitiendo que se absorban eficientemente.Ayuda a combatir la fatiga relacionada con una baja ingesta de ocho vitaminas B esenciales para el organismo.60 pastillas"
},{
  "nombre": "Proteína Vegetal en Polvo",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/proteina.jpg",
  "idCat":"Suplementos Nutricionales",
  "descripcion": "Proteína 100% de origen vegetal que contiene proteína aislada de soya, trigo y arvejas. La proteína es un macronutriente que nuestro cuerpo necesita diariamente. Cada porción contiene 8 gramos de proteína y 9 aminoácidos esenciales.Proteína 100% vegetalTarro de 450 g "
},{
  "nombre": "Cal Mag D Advanced",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/calcio.jpg",
  "idCat":"Suplementos Nutricionales",
  "descripcion": "Aporta dos tipos de calcio: el del carbonato de calcio y el obtenido de algas marinas calcificadas, una de las fuentes más ricas de calcio. Además, este suplemento contiene vitamina D y magnesio, que favorecen la absorción del calcio. Enriquecido con zinc y manganeso.90 pastillas"
},{
  "nombre": "Daily Plus",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/minimize.png",
  "idCat": "Suplementos Nutricionales",
  "descripcion": "Suplemento alimenticio de uso diario que contiene 12 vitaminas, 10 minerales y concentrados de plantas que juegan un importante papel en el funcionamiento diario de nuestro cuerpo.90 pastillas"
},{
  "nombre": "",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/minimize.png",
  "idCat": "Suplementos Nutricionales",
  "descripcion": ""
},{
  "nombre": "",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/minimize.png",
  "idCat":"Suplementos Nutricionales",
  "descripcion": ""
},{
  "nombre": "",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/minimize.png",
  "idCat": "Suplementos Nutricionales",
  "descripcion": ""
},{
  "nombre": "",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/minimize.png",
  "idCat":"Suplementos Nutricionales",
  "descripcion": ""
},{
  "nombre": "",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/minimize.png",
  "idCat":"Suplementos Nutricionales",
  "descripcion": ""
},{
  "nombre": "",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/minimize.png",
  "idCat": "Suplementos Nutricionales",
  "descripcion": ""
},{
  "nombre": "",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/minimize.png",
  "idCat": "Suplementos Nutricionales",
  "descripcion": ""
},{
  "nombre": "",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/minimize.png",
  "idCat":"Suplementos Nutricionales",
  "descripcion": ""
},{
  "nombre": "",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/minimize.png",
  "idCat": "Cuidado de la Piel",
  "descripcion": ""
},{
  "nombre": "",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/minimize.png",
  "idCat": "Cuidado de la Piel",
  "descripcion": ""
},{
  "nombre": "",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/minimize.png",
  "idCat": "Cuidado de la Piel",
  "descripcion": ""
},{
  "nombre": "",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/minimize.png",
  "idCat": "Cuidado de la Piel",
  "descripcion": ""
},{
  "nombre": "",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/minimize.png",
  "idCat": "Cuidado de la Piel",
  "descripcion": ""
},{
  "nombre": "",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/minimize.png",
  "idCat": "Cuidado de la Piel",
  "descripcion": ""
},{
  "nombre": "",
  "precio": 25000,
  "stock": 150,
  "img": "/imagenes/minimize.png",
  "idCat": "Cuidado de la Piel",
  "descripcion": ""
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

