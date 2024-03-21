import {
  faGlobe,
  faUser,
  faBoxesStacked,
  faDumbbell,
  faScroll,
  faMoneyBill,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

export const SideBarMenu = [
  { title: "Informacion", icon: faGlobe, link: "/home" },
  {
    title: "Clientes",
    icon: faUser,
    link: "/users",
  },
  {
    title: "Empleados",
    icon: faUserTie,
    link: "/employees",
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
