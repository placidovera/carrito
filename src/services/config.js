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
    "nombre": "Triple Omega-3",
    "descripcion": "Fórmula balanceada que aporta 3 ácidos grasos, 286 mg de EPA, 214 mg de DHA y 11mg de ALA, proveniente de semillas de chía blanca.45 cápsulas blandas",
    "idCat": "Suplementos Nutricionales",
    "img": "/imagenes/omega3.jpg",
    "precio": 90.650,
    "stock": 150
  },
  {
    "nombre": "Satinique Shampoo Anticaída",
    "descripcion": "Ayuda a fortalecer el cabello desde la raíz hasta las puntas ayudando a prevenir la caída debido al quiebre*. En un mes tendrás un cabello más abundante y de aspecto más grueso al mismo tiempo, ayudas a mejorar la barrera de hidratación del cuero cabelludo.",
    "idCat": "Cuidado del Cabello",
    "img": "/imagenes/shampooAnti.jpg",
    "precio": 31.230,
    "stock": 15
  },
  {
    "nombre": "Satinique Tratamiento Reparador Intensivo",
    "descripcion": "Ayuda a sellar las cutículas, mejorando la superficie del cabello dañado y reparando la fibra del cabello desde el interior, al mismo tiempo, ayuda a fortalecer cada hebra para un cabello más fuerte y de aspecto más sedoso.250 ml",
    "idCat": "Cuidado del Cabello",
    "img": "/imagenes/reparadorIntensivo.jpg",
    "precio": 50.680,
    "stock": 150
  },
  {
    "nombre": "Satinique Acondicionador Reparador Intensivo",
    "descripcion": "Fórmulas enriquecidas con proteínas que ayudan a reparar y fortalecer las puntas abiertas para un cabello más fuerte y con aspecto más sedoso, mientras ayuda a mantener el color.",
    "idCat": "Cuidado del Cabello",
    "img": "/imagenes/acondiccionadorReparador.jpg",
    "precio": 31.228,
    "stock": 150
  },
  {
    "nombre": "Limpiador Nivelador en Gel",
    "descripcion": "Esta fórmula elimina el exceso de grasa superficial que puede obstruir los poros. Su acción de limpieza profunda puede ayudar a mantener tu piel libre de imperfecciones dejando la sensación refrescante. Gel transparente, con un toque iridiscente que se convierte en espuma abundante y refrescante que limpia en profundidad los poros. Purifica y libera la piel del exceso de grasa, los restos de maquillaje, la suciedad, la contaminación y otras impurezas. El Limpiador Nivelador en Gel Artistry Skin Nutrition ha demostrado clínicamente que elimina la contaminación y las impurezas irritantes (incluidas las PM 2,5) de la piel. Esto ayuda a mantener la barrera de defensa de la piel en un estado más estable. Tipo de piel: grasa o normal a grasa.",
    "idCat": "Cuidado de la Piel",
    "img": "/imagenes/gelLimpiador.jpg",
    "precio": 114.608,
    "stock": 150
  },
  {
    "nombre": "Cepillo Dental Suave Multiacción",
    "descripcion": "Esta herramienta de acción múltiple con cerdas suaves ayuda a eliminar la placa, limpiar los dientes, la lengua y masajear las encías. Una parte esencial de tu rutina diaria de cuidado bucal.4 unidades",
    "idCat": "Cuidado Oral",
    "img": "/imagenes/cepillos.jpg",
    "precio": 24.875,
    "stock": 150
  },
  {
    "nombre": "Crema para manos nutritiva",
    "descripcion": "La crema de manos intensiva con agua de complejo de bambú, ceramida derivada del aceite de oliva, aceite de chía blanca y una alta concentración de manteca de karité nutre y alivia instantáneamente las manos secas y ásperas, proporcionando también una capa protectora de humectación en la superficie de la piel.75 ml",
    "idCat": "Cuidado Corporal",
    "img": "/imagenes/cremaManos.jpg",
    "precio": 23.472,
    "stock": 150
  },
  {
    "nombre": "Proteína Vegetal en Polvo",
    "descripcion": "Proteína 100% de origen vegetal que contiene proteína aislada de soya, trigo y arvejas. La proteína es un macronutriente que nuestro cuerpo necesita diariamente. Cada porción contiene 8 gramos de proteína y 9 aminoácidos esenciales.Proteína 100% vegetalTarro de 450 g",
    "idCat": "Suplementos Nutricionales",
    "img": "/imagenes/proteina.jpg",
    "precio": 85.104,
    "stock": 150
  },
  {
    "nombre": "Tri Iron Folic - Combina hierro y vitamina C",
    "descripcion": "Una combinación de 3 nutrientes esenciales: ácido fólico, 3 fuentes de hierro y vitamina C. Además, el Tri-Iron Folic contiene concentrado de espinaca Nutrilite, una importante fuente de fitonutrientes.90 pastillas",
    "idCat": "Suplementos Nutricionales",
    "img": "/imagenes/vitaminaC.jpg",
    "precio": 41.288,
    "stock": 150
  },
  {
    "nombre": "Vitamina B Plus - Potencia tu energía",
    "descripcion": "Su tableta bicapa de liberación dual provee 8 horas de soporte. Cuenta con una tecnología de liberación inmediata de vitaminas B2 y B12 y una tecnología de liberación prolongada para las vitaminas B1, B3, B5, B6, B7 y B9 las cuales se liberan de forma gradual, lenta y constante, permitiendo que se absorban eficientemente. Ayuda a combatir la fatiga relacionada con una baja ingesta de ocho vitaminas B esenciales para el organismo. 60 pastillas",
    "idCat": "Suplementos Nutricionales",
    "img": "/imagenes/vitaminaB.jpg",
    "precio": 34.189,
    "stock": 150
  },
  {
    "nombre": "Satinique Loción Reparadora Intensiva",
    "descripcion": "Ayuda a tener un cabello dócil y manejable controlando el frizz y revitalizando el cabello opaco y dañado o quebradizo, promoviendo un aumento del brillo.",
    "idCat": "Cuidado del Cabello",
    "img": "/imagenes/locionCapilar.jpg",
    "precio": 52.080,
    "stock": 150
  },
  {
    "nombre": "Suero en Aceite Capilar de Reparación Intensiva",
    "descripcion": "De rápida absorción, revitaliza al instante, proporcionándote un cabello manejable y brillante que luce y se siente sedoso, ayudando a reparar el cabello dañado y las puntas abiertas.",
    "idCat": "Cuidado del Cabello",
    "img": "/imagenes/sueroCapilar.jpg",
    "precio": 51.800,
    "stock": 150
  },
  {
    "nombre": "Pasta de Dientes Multi-acción con Fluoruro",
    "descripcion": "Nueva fórmula de acción múltiple libre de parabenos y con una mezcla mejorada de sabor a menta certificada por Nutrilite™ ayuda a combatir las caries, ayuda a eliminar la placa, promueve la remineralización, ayuda a fortalecer y proteger el esmalte. Además limpia y refresca el aliento de forma segura cada vez que te cepillas los dientes. Una parte esencial de tu rutina diaria de cuidado bucal",
    "idCat": "Cuidado Oral",
    "img": "/imagenes/pasta.jpg",
    "precio":15.000,
    "stock": 200
  },
  {
    "nombre": "Cal Mag D Advanced",
    "descripcion": "Aporta dos tipos de calcio: el del carbonato de calcio y el obtenido de algas marinas calcificadas, una de las fuentes más ricas de calcio. Además, este suplemento contiene vitamina D y magnesio, que favorecen la absorción del calcio. Enriquecido con zinc y manganeso.90 pastillas",
    "idCat": "Suplementos Nutricionales",
    "img": "/imagenes/calcio.jpg",
    "precio": 37.490,
    "stock": 150
  },
  {
    "nombre": "Satinique Shampoo Anticaspa",
    "descripcion": "Probado dermatológicamente limpia profundamente el cuero cabelludo y el cabello ayudando a reducir la descamación y a prevenir la reaparición de la caspa.",
    "idCat": "Cuidado del Cabello",
    "img": "/imagenes/shampooCaspa.jpg",
    "precio": 31.228,
    "stock": 150
  },
  {
    "nombre": "Gel de baño y Shampoo para bebé",
    "descripcion": "Producto 2 en 1 que brinda triple barrera de protección. Ayuda a suavizar mientras limpia cuidadosamente la delicada piel del bebé, de la cabeza a los pies.400 ml",
    "idCat": "Cuidado Corporal",
    "img": "/imagenes/gelDucha.jpg",
    "precio": 30.387,
    "stock": 150
  },
  {
    "nombre": "Satinique Solución Anticaída",
    "descripcion": "La Solución Anticaída ayuda a fortalecer el cabello hasta 2 veces* desde la raíz hasta las puntas, ayudando a prevenir la caída debido al quiebre. En un mes*, tendrás un cabello más abundante y de aspecto más grueso. Al mismo tiempo, mejorará la hidratación del cuero cabelludo.(- Masajeador por tiempo limitado, hasta agotar existencias)",
    "idCat": "Promos",
    "img": "/imagenes/kitAnticaida.jpg",
    "precio": 131.056,
    "stock": 150
  },
  {
    "nombre": "Barra de Jabón Nutritiva",
    "descripcion": "El jabón en barra para dividirse en 3 partes con ceramida derivada del aceite de oliva y aceite de chía blanca limpia suavemente mientras mejora la tez de la piel. Fórmula biodegradable. Barra de 250 g (9 oz.) con 3 piezas",
    "idCat": "Cuidado Corporal",
    "img": "/imagenes/barraJabon.jpg",
    "precio": 15.295,
    "stock": 150
  },
  {
    "nombre": "Enjuague Bucal Multiacción",
    "descripcion": "Nuestro mejorado Enjuague bucal concentrado de acción múltiple ahora sin alcohol, sin colorantes y con una mezcla mejorada de sabor a menta certificada por Nutrilite™ ayuda a reducir la placa, refresca el aliento y ayuda a limpiar entre los dientes como parte esencial de tu rutina diaria de cuidado bucal. Contenido neto: 72 mL.",
    "idCat": "Cuidado Oral",
    "img": "/imagenes/enjuague.jpg",
    "precio": 33.026,
    "stock": 300
  },{
  "nombre": "Crema para Pies Renovadora",
  "precio":24.212,
  "stock": 150,
  "img": "/imagenes/cremaPies.jpg",
  "idCat": "Cuidado Corporal",
  "descripcion": "Su extraordinaria combinación de extractos botánicos restituye la suavidad de la piel, ayuda a reducir la reaparición de asperezas en los pies y también a aliviar la sensación de cansancio. 150 ml"
},{
    "nombre": "Gel de baño Exfoliante Refrescante",
    "descripcion": "El gel de baño exfoliante diario con agua de complejo de bambú, ceramida derivada del aceite de oliva, acerola verde y exfoliantes naturales, ayuda a eliminar suavemente las impurezas y las células muertas de la piel, dejándola con una sensación de frescura e hidratación. Fórmula biodegradable.400 ml",
    "idCat": "Cuidado Corporal",
    "img": "/imagenes/gelExfoliante.jpg",
    "precio": 29.685,
    "stock": 150
  },
  {
    "nombre": "Multicaroteno",
    "descripcion": "Exclusiva fórmula con combinación de nutrientes como alfa y betacarotenos, luteína y zeaxantina que no son producidos por tu cuerpo. Ideal para quienes quieren aumentar el consumo de estos nutrientes de frutas y vegetales de la gama de color amarillo y naranja.90 cápsulas blandas",
    "idCat": "Suplementos Nutricionales",
    "img": "/imagenes/multicaroteno.jpg",
    "precio":44.820,
    "stock": 150
  },
  {
    "nombre": "Satinique Shampoo Hidratación y Suavidad",
    "descripcion": "Fórmula vegana enriquecida con proteínas que ayuda a mantener el cabello hidratado, sedoso y manejable desde la raíz hasta las puntas.",
    "idCat": "Cuidado del Cabello",
    "img": "/imagenes/shampoo.jpg",
    "precio": 31.228,
    "stock": 150
  },
  {
    "nombre": "Loción corporal para bebé",
    "descripcion": "Loción corporal de textura suave, no grasosa y sin fragancia que proporciona una hidratación duradera para cuidar la piel de tu bebé. 400 ml",
    "idCat": "Cuidado Corporal",
    "img": "/imagenes/locionBebe.jpg",
    "precio": 30.387,
    "stock": 150
  },
  {
    "nombre": "Satinique Acondicionador Anticaída",
    "descripcion": "Ayuda a fortalecer el cabello desde la raíz hasta las puntas ayudando a prevenir la caída debido al quiebre*. En un mes tendrás un cabello más abundante y de aspecto más grueso al mismo tiempo, ayudas a mejorar la barrera de hidratación del cuero cabelludo.",
    "idCat": "Cuidado del Cabello",
    "img": "/imagenes/acondicionadorAnti.jpg",
    "precio": 31.228,
    "stock": 150
  },
  {
    "nombre": "HSN - Nutrición para cabello, piel y uñas",
    "descripcion": "Su fórmula contiene L-cisteína, un aminoácido que promueve la formación de queratina. Además contiene colágeno hidrolizado, biotina, extracto de semilla de uva y vitamina C que participan en la humectación de la piel. Es una combinación única de ingredientes que ayudan a nutrir el cabello, la piel y las uñas. 60 pastillas",
    "idCat": "Suplementos Nutricionales",
    "img": "/imagenes/hsnPiel.jpg",
    "precio": 37.356,
    "stock": 150
  },
  {
    "nombre": "Satinique Tónico Anticaída para el Cuero Cabelludo",
    "descripcion": "Revitaliza el cuero cabelludo y fortalece el cabello desde la raíz, ayudando a prevenir la caída por quiebre*. En un mes tu cabello lucirá más abundante, al mismo tiempo, mejora la hidratación del cuero cabelludo, creando el ambiente ideal para un cabello más fuerte. *Por causas no asociadas a enfermedades o terapéuticas.120 ml",
    "idCat": "Cuidado del Cabello",
    "img": "/imagenes/tonicoAnticaida.jpg",
    "precio": 68.601,
    "stock": 150
  },
  {
    "nombre": "Crema de Reactivación Renovadora",
    "descripcion": "Crema enriquecida para complementar las necesidades claves de tu piel y dejarla visiblemente bien cuidada ayudándola a reducir los factores estresantes, revitalizándola y devolviéndole una apariencia más juvenil.50 ml",
    "idCat": "Cuidado de la Piel",
    "img": "/imagenes/cremaReactivacion.jpg",
    "precio": 155.898,
    "stock": 150
  },
  {
    "nombre": "Tónico Suavizante Renovador",
    "descripcion": "Tónico especialmente formulado para ayudar a tratar los signos visibles de una piel seca, el cual fortalece el sistema de soporte de la piel y ayuda a minimizar las líneas visibles de expresión. Ayuda a estabilizar y fortalecer el microbioma de la piel manteniéndola en equilibrio al mismo tiempo que mantiene y fortalece la barrera de humectación de la piel. Contiene ingredientes relajantes que suavizan y ayudan a recuperar una piel con apariencia más juvenil.200 ml",
    "idCat": "Cuidado de la Piel",
    "img": "/imagenes/tonicoPiel.jpg",
    "precio": 87.879,
    "stock": 150
  },
  {
    "nombre": "Protector Solar Corporal Vegano FPS 50",
    "descripcion": "Diseñado para brindar una protección natural y segura para pieles extremadamente sensibles al sol.",
    "idCat": "Cuidado Corporal",
    "img": "/imagenes/protectorSolar.jpg",
    "precio": 47.828,
    "stock": 150
  },
  {
    "nombre": "Refrescante bucal en Spray Glister",
    "descripcion": "Obtén un aliento refrescante, instantáneo y duradero con cada rociado de este spray esencial para llevar a cualquier parte. Dosificador sin aerosol de 14 ml",
    "idCat": "Cuidado Oral",
    "img": "/imagenes/spray.jpg",
    "precio": 9.828,
    "stock": 250
  },
  {
    "nombre": "Agua Micelar - Desmaquillante y Limpiador",
    "descripcion": "El Agua Micelar sin fragancia ayuda a remover inmediatamente todo tipo de maquillaje, incluidos los de larga duración y a prueba de agua. Al ser tan eficaz, actúa sin frotar excesivamente la piel, lo que ayuda a evitar la irritación. Funciona con todo tipo de maquillaje de ojos, labios y rostro. No deja residuos oleosos, incluso acondiciona tus pestañas. La fórmula no requiere enjuague.",
    "idCat": "Cuidado de la Piel",
    "img": "/imagenes/aguaMicelar.jpg",
    "precio": 77.078,
    "stock": 150
  },
  {
    "nombre": "Satinique Acondicionador Hidratación y Suavidad",
    "descripcion": "Fórmula enriquecida con proteínas que ayudan a mantener el cabello hidratado, sedoso y manejable desde la raíz hasta las puntas.",
    "idCat": "Cuidado del Cabello",
    "img": "/imagenes/acondicionador.jpg",
    "precio": 31.228,
    "stock": 150
  },
  {
    "nombre": "Crema Hidratante",
    "descripcion": "Nuestra avanzada fórmula hidratante nutre y relaja la piel. Ayuda a prevenir los signos visibles de la edad, como las líneas de expresión, la falta de brillo, la textura deficiente y el tono desigual de la piel.",
    "idCat": "Cuidado de la Piel",
    "img": "/imagenes/gelRostro.jpg",
    "precio": 126.172,
    "stock": 150
  },
  {
    "nombre": "Jabón Líquido para Manos",
    "descripcion": "El jabón antibacterial de manos, que no reseca, está formulado con agua de palmera de cica, romero y té verde, efectivo contra los gérmenes más comunes, manteniendo las manos limpias y frescas. Fórmula con biodegradabilidad demostrada. 250 ml",
    "idCat": "Cuidado Corporal",
    "img": "/imagenes/jabonLiquidoManos.jpg",
    "precio":24.438,
    "stock": 150
  },
  {
    "nombre": "Desodorante y Antitranspirante Roll-On",
    "descripcion": "Roll-on antitranspirante de secado rápido con complejo cica agua, romero y té verde que aporta protección contra el olor y la humedad de las axilas sin dejar manchas blancas.100 ml",
    "idCat": "Cuidado Corporal",
    "img": "/imagenes/desodoranteAnti.jpg",
    "precio": 10.565,
    "stock": 150
  },
  {
    "nombre": "Espuma Limpiadora Renovadora",
    "descripcion": "Limpiador cremoso que se transforma en espuma densa y espesa que deja la piel limpia de impurezas y contaminación (incluido el Material Particulado PM 2.5). Ayuda a eliminar la suciedad, las impurezas, los residuos de maquillaje y el exceso de grasa de forma eficaz, fácil y rápida sin dejar la piel seca. Fórmula patentada que acondiciona suavemente la piel. 125 ml",
    "idCat": "Cuidado de la Piel",
    "img": "/imagenes/espumaLimpiadora.jpg",
    "precio": 96.388,
    "stock": 150
  },
  {
    "nombre": "Crema para Manos Intensive Care Anti-Edad",
    "descripcion": "La Crema para Manos proporciona cuidado y protección diarios, diseñadas específicamente para la delicada y sensible piel de las manos. 100 ml",
    "idCat": "Cuidado Corporal",
    "img": "/imagenes/cremaManosAnti.jpg",
    "precio": 24.486,
    "stock": 150
  },
  {
    "nombre": "Té Bodykey Herbal Mix",
    "descripcion": "Herbal Mix contiene una mezcla de Té negro y Té verde. Su exclusiva fórmula contiene vitaminas del complejo B y vitamina C, además contiene guaraná, jengibre y canela. Delicioso sabor a limón y endulzado con Stevia. 51 g",
    "idCat": "Suplementos Nutricionales",
    "img": "/imagenes/te.jpg",
    "precio": 46.517,
    "stock": 150
  },
  {
    "nombre": "Nutrilite Collagen+C",
    "descripcion": "Nutrilite Collagen +C contiene colágeno hidrolizado, además de una combinación de vitamina C, procedente del ácido ascórbico y de la acerola. También contiene ácido pantoténico, biotina, selenio y zinc. Suplemento alimenticio en polvo para preparar una deliciosa bebida con sabor frutos mixtos. Envase con 150 g",
    "idCat": "Suplementos Nutricionales",
    "img": "/imagenes/colageno.jpg",
    "precio": 65.000,
    "stock": 150
  },
  {
    "nombre": "Crema de Reactivación Renovadora para ojos",
    "descripcion": "Crema de Reactivación que reafirma y levanta y con el uso frecuente, tonifica visiblemente la piel alrededor del área de los ojos además ayuda a reducir la apariencia de líneas finas y signos visibles de la edad (líneas de expresión, pérdida de firmeza, resequedad, ojeras). Ofrece protección antioxidante gracias a que contiene granada cultivada de la marca Nutrilite™. 15 ml",
    "idCat": "Cuidado de la Piel",
    "img": "/imagenes/cremaOjos.jpg",
    "precio": 141.832,
    "stock": 150
  },
  {
    "nombre": "Satinique Shampoo Reparador Intensivo",
    "descripcion": "Fórmulas enriquecidas con proteínas que ayudan a reparar y fortalecer las puntas abiertas para un cabello más fuerte y con aspecto más sedoso, mientras ayuda a mantener el color.",
    "idCat": "Cuidado del Cabello",
    "img": "/imagenes/shampooReparador.jpg",
    "precio": 31.228,
    "stock": 150
  },
  {
    "nombre": "Locion Corporal Refrescante",
    "descripcion": "La loción corporal refrescante con agua de complejo de bambú, ceramida derivada del aceite de oliva y acerola verde brinda una explosión de hidratación y ayuda a reparar y proteger la barrera de la piel. 400 ml",
    "idCat": "Cuidado Corporal",
    "img": "/imagenes/locionCorporal.jpg",
    "precio": 31.158,
    "stock": 150
  },
  {
    "nombre": "Hilo Dental Multiacción",
    "descripcion": "Por primera vez en el cuidado bucal Glister™, este hilo dental de acción múltiple ayuda a eliminar la placa de las superficies de los dientes, que el cepillado no puede alcanzar, mientras estimula suavemente las encías. Una parte esencial de tu rutina diaria de cuidado bucal. 2 unidades con 50 metros c/u",
    "idCat": "Cuidado Oral",
    "img": "/imagenes/hiloDental.jpg",
    "precio": 10.495,
    "stock": 300
  },
  {
    "nombre": "Daily Plus",
    "descripcion": "Suplemento alimenticio de uso diario que contiene 12 vitaminas, 10 minerales y concentrados de plantas que juegan un importante papel en el funcionamiento diario de nuestro cuerpo. 90 pastillas",
    "idCat": "Suplementos Nutricionales",
    "img": "/imagenes/daily.jpg",
    "precio": 44.960,
    "stock": 150
  },
  {
    "nombre": "Detergente Líquido Concentrado para Ropa",
    "descripcion":"Su fórmula quitamanchas y el delicioso aroma floral se unen para dejar tu ropa limpia y suave. La fórmula concentrada de triple acción te ayuda a usar menos detergente, y sus ingredientes no dañan tus prendas ni el planeta.",
    "idCat": "Hogar",
    "img": "/imagenes/detergenteRopa.jpg",
    "precio":45.311,
    "stock": 150
  },
    {
    "nombre": "Blanqueador para Múltiples Telas",
    "descripcion":"Blanqueador de telas que usa el poder del oxígeno para eliminar las manchas y dejar la ropa limpia y brillante.",
    "idCat": "Hogar",
    "img": "/imagenes/blanqueador.jpg",
    "precio":49.418,
    "stock": 150
  },
   {
    "nombre": "Dish Drops Lavaplatos Liquido Concentrado",
    "descripcion":"La fórmula de Dish Drops Lavaplatos Líquido Concentrado elimina la grasa y los residuos o manchas de alimentos dejando tu vajilla y utensilios de cocina limpios y relucientes.",
    "idCat": "Hogar",
    "img": "/imagenes/detergente.jpg",
    "precio":30.643,
    "stock": 150
  }, {
    "nombre": "L.O.C. Limpiador Concentrado Multiusos",
    "descripcion":"Limpiador desinfectante concentrado que extermina virus, hongos y bacterias, incluidos E. coli, salmonella y otros.",
    "idCat": "Hogar",
    "img": "/imagenes/desinfectante.jpg",
    "precio":29.814,
    "stock": 150
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
  console.error("Error subiendo productos:", error.message);
}
};
// subirProductos()

