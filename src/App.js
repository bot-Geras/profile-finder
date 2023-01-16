import Home from "./components/routes/home/home.component";
import {Routes,Route} from "react-router-dom"
import Navbar from "./components/navbar/navbar.component";
import About from "./components/routes/about.component";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
        <Route index element={<Home />}  />
        <Route path="about" element={<About />} />

        </Route>
        
      </Routes>
      
    </div>
  );
}

export default App;
