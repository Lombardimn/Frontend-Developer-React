//  Genera una constante que sea un array de objetos que contenga 4 encuestas sobre servicio al cliente. Cada encuesta debe tener 2 preguntas con 4 opciones de respuesta. Cada encuesta debe tener un id consecutivo con titulo y descripcion. Todas las preguntas deben tener un id consecutivo al igual que las opciones.

// Se ha complementado la informacion con ChatGPT

// cambia el array de opciones en todas las encuestas para que contenga 4 objetos con id y texto. Manten los valores de optiones para la nueva propiedad texto.  

export const listSurveys = [
    {
        id: 1,
        titulo: "Encuesta de Satisfacción",
        descripcion: "Esta encuesta está diseñada para evaluar su nivel de satisfacción con nuestros servicios. Queremos conocer su opinión para mejorar nuestra calidad de servicio.",
        preguntas: [
            {
                id: 1,
                pregunta: "¿Cuán satisfecho está con nuestros servicios?",
                opciones: [
                    { id: 1, texto: "Muy satisfecho" },
                    { id: 2, texto: "Satisfecho" },
                    { id: 3, texto: "Neutral" },
                    { id: 4, texto: "Insatisfecho" },
                ],
            },
            {
                id: 2,
                pregunta: "¿Recomendaría nuestros servicios a otros?",
                opciones: [
                    { id: 1, texto: "Definitivamente sí" },
                    { id: 2, texto: "Probablemente sí" },
                    { id: 3, texto: "No estoy seguro" },
                    { id: 4, texto: "Probablemente no" },
                    { id: 5, texto: "Definitivamente no" },
                ],
            }
        ]
    },
    {
        id: 2,
        titulo: "Encuesta de Productos",
        descripcion: "Esta encuesta se enfoca en nuestros productos. Queremos conocer su opinión sobre ellos para ofrecerle una mejor experiencia y productos de calidad.",
        preguntas: [
            {
                id: 1,
                pregunta: "¿Cuál es su producto favorito de nuestra marca?",
                opciones: [
                    { id: 1, texto: "Producto A" },
                    { id: 2, texto: "Producto B" },
                    { id: 3, texto: "Producto C" },
                    { id: 4, texto: "Producto D" },
                ],
            },
            {
                id: 2,
                pregunta: "¿Qué producto le gustaría ver en nuestro catálogo?",
                opciones: [
                    { id: 1, texto: "Producto E" },
                    { id: 2, texto: "Producto F" },
                    { id: 3, texto: "Producto G" },
                    { id: 4, texto: "Producto H" },
                ],
            }
        ]
    },
    {
        id: 3,
        titulo: "Encuesta de Facilidad de la Compra",
        descripcion: "Esta encuesta se centra en la facilidad de la compra en nuestra tienda en línea. Sus respuestas nos ayudarán a mejorar su experiencia de compra.",
        preguntas: [
            {
                id: 1,
                pregunta: "¿Qué tan fácil le resultó comprar en nuestra tienda en línea?",
                opciones: [
                    { id: 1, texto: "Muy fácil" },
                    { id: 2, texto: "Fácil" },
                    { id: 3, texto: "Neutral" },
                    { id: 4, texto: "Difícil" },
                    { id: 5, texto: "Muy difícil" },
                ],
            },
            {
                id: 2,
                pregunta: "¿Qué aspecto de la compra considera que podemos mejorar?",
                opciones: [
                    { id: 1, texto: "Proceso de pago" },
                    { id: 2, texto: "Navegación del sitio" },
                    { id: 3, texto: "Servicio al cliente" },
                    { id: 4, texto: "Otro (especifique)" },
                ],
            }
        ]
    },
    {
        id: 4,
        titulo: "Encuesta Sobre donde Escucho de Nosotros",
        descripcion: "Esta encuesta busca entender cómo se enteró de nuestra empresa y su percepción previa. Sus respuestas nos ayudarán a conocer mejor nuestros canales de comunicación y su opinión inicial.",
        preguntas: [
            {
                id: 1,
                pregunta: "¿Dónde escuchó por primera vez acerca de nuestra empresa?",
                opciones: [
                    { id: 1, texto: "Redes sociales" },
                    { id: 2, texto: "Amigos/Familiares" },
                    { id: 3, texto: "Publicidad en línea" },
                    { id: 4, texto: "Publicidad impresa" },
                ],
            },
            {
                id: 2,
                pregunta: "¿Qué opinión tenía de nosotros antes de conocer nuestra empresa?",
                opciones: [
                    { id: 1, texto: "Positiva" },
                    { id: 2, texto: "Negativa" },
                    { id: 3, texto: "Neutral" },
                ],
            }
        ]
    }
];
