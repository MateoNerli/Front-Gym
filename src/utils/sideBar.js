import {
  faGlobe,
  faUser,
  faBoxesStacked,
  faDumbbell,
  faScroll,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";

export const SideBarMenu = [
  { title: "Informacion", icon: faGlobe, link: "/home" },
  {
    title: "Usuarios",
    icon: faUser,
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
    submenu: [
      { title: "Ver productos", link: "/products/list" },
      { title: "Crear productos", link: "/products/create" },
    ],
  },
  {
    title: "Planes",
    icon: faScroll,
    submenu: [
      { title: "Ver planes", link: "/planes/list" },
      { title: "Crear planes", link: "/planes/create" },
    ],
  },
  {
    title: "Rutinas",
    icon: faDumbbell,
    submenu: [
      { title: "Ver rutinas", link: "/rutinas/list" },
      { title: "Crear rutinas", link: "/rutinas/create" },
    ],
  },
  {
    title: "Pagos",
    icon: faMoneyBill,
    submenu: [
      { title: "Ver pagos", link: "/pagos/list" },
      { title: "Agregar pagos", link: "/pagos/create" },
    ],
  },
];
