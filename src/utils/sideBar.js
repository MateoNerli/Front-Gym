import {
  faGlobe,
  faUser,
  faBoxesStacked,
} from "@fortawesome/free-solid-svg-icons";

export const SideBarMenu = [
  { title: "Informacion", icon: faGlobe, link: "/" },
  {
    title: "Usuarios",
    icon: faUser,
    link: "/users",
    submenu: [
      { title: "Ver Usuarios", link: "/users/list" },
      { title: "Crear Usuario", link: "/users/create" },
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
];
