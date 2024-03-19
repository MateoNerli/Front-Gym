import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/pages/home/homePage";
import { SideBar } from "./components/sidebar/sideBar";
import { UsersPage } from "./components/pages/users/usersPage";
import { NavBar } from "./components/sidebar/navBar";
import { UserCreate } from "./components/pages/users/userCreate";
import { UserEdit } from "./components/pages/users/editUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="felx">
          <SideBar />
          <div className="flex-grow">
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/users/create" element={<UserCreate />} />
              <Route path="/user/edit/:dni" element={<UserEdit />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
