const data = [
    {
      id: 2,
      title: "Blue Woman",
      detail:
        "Una enigmática ilustración que captura la belleza y el misterio de una figura femenina en tonos azules. Perfecta para añadir un toque de elegancia a cualquier espacio.",
      price: 20,
      stock: 8,
      img: "https://i.pinimg.com/736x/c4/c4/58/c4c458ae5443ccdc0d5b2244b05d0b85.jpg",
      category: "Ilustraciones",
    },
    {
      id: 3,
      title: "Barco",
      detail:
        "Una impresionante ilustración de un barco navegando en un océano sereno, capturando la esencia de la aventura y la tranquilidad del mar.",
      price: 25,
      stock: 10,
      img: "https://i.pinimg.com/control/564x/4f/d0/44/4fd044abc1eff76483df782a8eda82d4.jpg",
      category: "Ilustraciones",
    },
    {
      id: 4,
      title: "Paisaje Tren",
      detail:
        "Un evocador paisaje que muestra un tren recorriendo un pintoresco entorno natural, ideal para los amantes de los viajes y la nostalgia.",
      price: 18,
      stock: 7,
      img: "https://i.pinimg.com/564x/8c/7e/29/8c7e2982685a04aedaf94635e4eb50f4.jpg",
      category: "Landscape",
    },
    {
      id: 5,
      title: "Bosque",
      detail:
        "Una serena ilustración que representa un denso bosque, evocando un sentido de calma y conexión con la naturaleza.",
      price: 22,
      stock: 12,
      img: "https://i.pinimg.com/736x/98/1e/33/981e3335aa9e45731dab6d7da713a9cc.jpg",
      category: "Landscape",
    },
    {
        id: 6,
        title: "Space",
        detail:
          "Una impresionante ilustración del espacio que captura la vastedad y el misterio del universo. Perfecta para inspirar a los amantes del cosmos.",
        price: 30,
        stock: 10,
        img: "https://i.pinimg.com/736x/17/1d/47/171d4748dc10a703657e0b03650bebb0.jpg",
        category: "Landscape",
      },
      {
        id: 7,
        title: "Bus",
        detail:
          "Una detallada ilustración de un autobús en movimiento, evocando la dinámica de la vida urbana y el viaje diario.",
        price: 25,
        stock: 8,
        img: "https://i.pinimg.com/736x/74/53/5c/74535c50b2b3e0cf3119bbe31790e75d.jpg",
        category: "Ilustraciones",
      },
      {
        id: 8,
        title: "Tokyo",
        detail:
          "Ilustración vibrante de la ciudad de Tokyo, capturando la energía y el colorido de una de las metrópolis más emblemáticas del mundo.",
        price: 35,
        stock: 5,
        img: "https://i.pinimg.com/control/736x/c3/c9/27/c3c927c83e9a8bc5076ca9ca1c408014.jpg",
        category: "Landscape",
      },
      {
        id: 9,
        title: "Aeropuerto",
        detail:
          "Una ilustración que representa la emoción y la actividad de un aeropuerto internacional, con aviones despegando y aterrizando.",
        price: 28,
        stock: 7,
        img: "https://i.pinimg.com/736x/eb/7f/f8/eb7ff876e62b99eddf02bd3d154fbfdb.jpg",
        category: "Ilustraciones",
      },
      {
        id: 10,
        title: "Flor",
        detail:
          "Ilustración detallada de una flor en plena floración, simbolizando la belleza y la fragilidad de la naturaleza.",
        price: 20,
        stock: 12,
        img: "https://i.pinimg.com/736x/09/c6/92/09c692e7da42eb6b3a7619e79dc1478a.jpg",
        category: "Ilustraciones",
      }
    
  ];

const categories = [
  {
    name: "Nosotros",
    href: "#",
    icon: "bx bx-info-circle", 
    id: "",
  },
  {
    name: "Home",
    href: "../index.html",
    icon: "bx bx-home", 
    id: "",
  },
  {
    name: "Productos",
    href: "#",
    icon: "bx bx-cart",
    id: "",
  },
  {
    name: "Login",
    href: "../html/login.html",
    icon: "bx bx-log-in", 
    id: "",
  },
  {
    name: `${localStorage.getItem("email")}`,
    href: "#",
    icon: "bx bxs-user",
    id: "",
  },
  {
    name: `${localStorage.getItem("quantity")}`,
    href: "../html/carrito.html",
    icon: "bx bx-cart",
    id: "cart",
  },
];

const LOGIN_USER = {
  email: "kebako01@gmail.com",
  password: "kebako01",
}