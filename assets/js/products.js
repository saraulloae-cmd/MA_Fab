/* =========================================================
   CATÁLOGO DE PRODUCTOS
   Para agregar un producto nuevo, copiá uno de estos bloques
   y modificá los datos. Ver la guía PDF para el detalle de
   cada campo.
   ========================================================= */

const PRODUCTS = [
  {
    id: "base-universal",
    name: "Base Universal para Accesorios",
    tagline: "GPS, celular y cámara al mismo tiempo, sin ocupar el parabrisas",
    description:
      "Una sola base sobre el tablero para montar GPS, celular y cámara a la vez. Se apoya en tres patas con cinta adhesiva 3M de alta adherencia, por eso sirve en casi cualquier vehículo. Soporta bastante peso (lo probamos).<br><br>" +
      "<strong>Qué resuelve</strong><br>" +
      "• No ocupa espacio en el parabrisas.<br>" +
      "• No hay que agujerear nada.<br>" +
      "• Se puede retirar dejando las patas pegadas, si hace falta.<br>" +
      "• Compatible con accesorios RAM Mount.<br>" +
      "• Montaje GoPro integrado y riel para GPS.<br>" +
      "• Dos insertos de bronce M5 embutidos en la pieza.<br><br>" +
      "<strong>Incluye</strong><br>" +
      "• Base con patas adhesivas 3M.<br>" +
      "• Dos bochas (17 mm y 1″).<br>" +
      "• Llave allen para las bochas.<br><br>" +
      "<strong>Instalación</strong><br>" +
      "Se pega con la cinta adhesiva. Para removerla, seguí las instrucciones de 3M. No incluye soportes de GPS, celular ni cámara.",
    images: [
      "assets/img/products/base-universal/cover.jpg",
      "assets/img/products/base-universal/tres-a-la-vez.jpg",
      "assets/img/products/base-universal/uso-1.jpg",
      "assets/img/products/base-universal/gopro.jpg",
      "assets/img/products/base-universal/detalle.jpg",
      "assets/img/products/base-universal/detalle-2.jpg",
      "assets/img/products/base-universal/tablero.jpg",
    ],
    variantGroups: [],
    addons: [
      { id: "bocha-17", label: "Bocha adicional 17 mm", price: 4500 },
      { id: "bocha-1", label: "Bocha adicional 1″", price: 4500 },
      { id: "bocha-custom", label: "Bocha personalizada", price: 6500 },
    ],
    note:
      "La bocha personalizada se define con nosotros por WhatsApp. ¿Dudas si entra en el tablero de tu vehículo? Mandanos una foto y te confirmamos.",
    price: 45600,
  },
  {
    id: "gancho-skid",
    name: "Gancho Skid — Patín de Cola",
    tagline: "Protección y anclaje para receptor de 2″",
    description:
      "El gancho skid-patín proporciona una superficie plana de apoyo y/o deslizamiento del sector trasero del vehículo cuando el ángulo de salida no es suficiente. Cuenta con un ojal para grilletes de ¾″ y sirve como excelente punto de anclaje. No incluye grillete.",
    images: [
      "assets/img/products/gancho-skid/cover.jpg",
      "assets/img/products/gancho-skid/uso-1.jpg",
      "assets/img/products/gancho-skid/uso-2.jpg",
      "assets/img/products/gancho-skid/detalle.jpg",
      "assets/img/products/gancho-skid/plano.jpg",
    ],
    variantGroups: [
      {
        key: "modelo",
        label: "Modelo",
        options: [
          { id: "estandar", label: "Estándar (A=19mm)" },
          { id: "slim", label: "Slim (A=35mm)" },
          { id: "wide", label: "Wide (A=52mm)" },
          { id: "ford", label: "Especial Ranger Raptor" },
        ],
      },
    ],
    note:
      "¿No sabés qué modelo elegir? Mandanos una foto del receptor de tu vehículo y te ayudamos a definirlo.",
    price: 240000,
  },
  {
    id: "adaptador-grillete-soft",
    name: "Adaptador para Grillete Soft",
    tagline: "Elimina eslabones metálicos en tus rescates",
    description:
      "El adaptador protege el grillete soft del borde metálico del receptor. Facilita la colocación y elimina elementos metálicos como grilletes y pernos en el punto de recuperación. Fabricado en nylon. Apto para grilletes de plasma de ½″ y receptores estándar de 2″. Incluye perno de 16 mm (opcional, a elección).",
    images: [
      "assets/img/products/adaptador-grillete-soft/cover.jpg",
      "assets/img/products/adaptador-grillete-soft/uso-1.jpg",
      "assets/img/products/adaptador-grillete-soft/uso-2.jpg",
      "assets/img/products/adaptador-grillete-soft/calibre.jpg",
      "assets/img/products/adaptador-grillete-soft/medir.png",
    ],
    variantGroups: [
      {
        key: "medida",
        label: "Medida del receptor (mm)",
        options: [
          { id: "35", label: "20 mm" },
          { id: "40", label: "25 mm" },
          { id: "45", label: "30 mm" },
          { id: "50", label: "35 mm" },
          { id: "55", label: "40 mm" },
          { id: "60", label: "45 mm" },
          { id: "65", label: "50 mm" },
        ],
      },
      {
        key: "perno",
        label: "Perno de 16mm",
        options: [
          { id: "con-perno", label: "Incluido" },
          { id: "sin-perno", label: "No incluido" },
        ],
      },
    ],
    note:
      "La medida se toma en el receptor según el esquema. Fabricamos a la medida exacta que nos envíes.",
    price: 18000,
  },
];
