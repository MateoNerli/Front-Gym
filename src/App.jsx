import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SideBar } from "./components/sideBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex">
          <SideBar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<h1>Home</h1>} />
              <Route path="/about" element={<h1>About</h1>} />
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
