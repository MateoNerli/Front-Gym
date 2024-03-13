import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/pages/home/homePage";
import { SideBar } from "./components/sidebar/sideBar";
import { UsersPage } from "./components/pages/users/usersPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex">
          <SideBar />
          <div className="flex-grow">
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/services" element={<h1>Services</h1>} />
              <Route path="/contact" element={<h1>Contact</h1>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
