import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/sideBar";

function App() {
  return (
    <>
      <div className="flex">
        <BrowserRouter>
          <SideBar>
            <Routes>
              <Route path="/" element={<h1>Home</h1>} />
            </Routes>
          </SideBar>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
