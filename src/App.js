import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ContactMe } from "./pages/ContactMe/ConatctMe";
import Home from "./pages/Home/Home";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-me" element={<ContactMe/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
