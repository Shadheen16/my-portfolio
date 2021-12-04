import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ContactMe } from "./pages/ContactMe/ConatctMe";
import MyProjects from "./pages/Home/components/MyProjects/MyProjects";
import Home from "./pages/Home/Home";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";


function App() {
  return (
    <div className="App sm:mx-[5%] lg:mx-[10%] xl:mx-[15%] flex flex-col justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-me" element={<ContactMe/>} />
          <Route path="/project/:projectId" element={<ProjectDetail/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
