
import './App.css';
import NavBar from './components/navbar/Navbar';
import {Route,Routes} from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Blueprints } from "./pages/Blueprints"
import { Contacts } from "./pages/Contacts"
import  GardenPhotos  from "./pages/GardenPhotos"







function App() {
  return (
    
    <Routes>
      <Route path="/" element ={< Home/>}/>
      <Route path="/About" element ={< About/>}/>
      <Route path="/Blueprints" element ={< Blueprints/>}/>
      <Route path="/Contacts" element ={< Contacts/>}/>
      <Route path="/GardenPhotos" element ={< GardenPhotos/>}/>
      
    
    
    </Routes>
    
  );
}

export default App;
