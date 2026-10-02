/* =========================================================
   CATÁLOGO DE PRODUCTOS
   Para agregar un producto nuevo, copiá uno de estos bloques
   y modificá los datos. Ver la guía PDF para el detalle de
   cada campo.
   ========================================================= */

const PRODUCTS = [
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
          { id: "wide", label: "Wide (A=52mm)" }
          { id: "ford", label: "Especial Ranger Raptor" },
        ],
      },
    ],
    note:
      "¿No sabés qué modelo elegir? Mandanos una foto del receptor de tu vehículo y te ayudamos a definirlo.",
    price: null,
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
          { id: "35", label: "35 mm" },
          { id: "40", label: "40 mm" },
          { id: "45", label: "45 mm" },
          { id: "50", label: "50 mm" },
          { id: "55", label: "55 mm" },
          { id: "60", label: "60 mm" },
          { id: "65", label: "65 mm" },
          { id: "70", label: "70 mm" },
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
    price: null,
  },
];
