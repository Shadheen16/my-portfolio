import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";


function App() {
  return (
    <div className="App">
      <Home/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
