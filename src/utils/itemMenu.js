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
    link: "/users",
  },
  {
    title: "Productos",
    icon: faBoxesStacked,
    link: "/products",
  },
  {
    title: "Planes",
    icon: faScroll,
    link: "/plans",
  },
  {
    title: "Rutinas",
    icon: faDumbbell,
    link: "/routines",
  },
  {
    title: "Pagos",
    icon: faMoneyBill,
  },
];
