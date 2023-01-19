import Home from "./components/routes/home/home.component";
import {Routes,Route} from "react-router-dom"
import Navbar from "./components/navbar/navbar.component";
import About from "./components/routes/about.component";
import User from "./components/routes/user.component";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
        <Route index element={<Home />}  />
        <Route path="about" element={<About />} />
        <Route path="user" element={<User />} />
        

        </Route>
      
      </Routes>
      
    </div>
  );
}

export default App;
