import {
  faGlobe,
  faUser,
  faBoxesStacked,
  faDumbbell,
  faScroll,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";

export const SideBarMenu = [
  { title: "Informacion", icon: faGlobe, link: "/" },
  {
    title: "Usuarios",
    icon: faUser,
    link: "/users",
    submenu: [
      { title: "Ver socios", link: "/socios/list" },
      { title: "Ver entrenadores", link: "/entrenadores/list" },
      { title: "Crear socio", link: "/socio/create" },
      { title: "Crear entrenador", link: "/entrenador/create" },
    ],
  },
  {
    title: "Productos",
    icon: faBoxesStacked,
    link: "/products",
    submenu: [
      { title: "Ver productos", link: "/products/list" },
      { title: "Crear productos", link: "/products/create" },
    ],
  },
  {
    title: "Planes",
    icon: faScroll,
    link: "/planes",
    submenu: [
      { title: "Ver planes", link: "/planes/list" },
      { title: "Crear planes", link: "/planes/create" },
    ],
  },
  {
    title: "Rutinas",
    icon: faDumbbell,
    link: "/rutinas",
    submenu: [
      { title: "Ver rutinas", link: "/rutinas/list" },
      { title: "Crear rutinas", link: "/rutinas/create" },
    ],
  },
  {
    title: "Pagos",
    icon: faMoneyBill,
    link: "/pagos",
    submenu: [
      { title: "Ver pagos", link: "/pagos/list" },
      { title: "Agregar pagos", link: "/pagos/create" },
    ],
  },
];
