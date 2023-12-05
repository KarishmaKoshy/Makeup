
import { Blush, Bronzer, Eyeliner, Eyeshadaw, LipLiner, Lipstick, Mascara, Nailpolish } from './urls'
import './App.css'
import { Routes,Route} from "react-router-dom";
import Products from "./Components/RowCake/Products";





function App() {
  return (
    <div >
      
      {/* <NavBar/> */}

  
      <Routes>
      <Route element={  <Products title='Blush' url={Blush }/>} exact path="/"></Route>

        <Route element={  <Products title='Lipstick' url={Lipstick}/>} path="/Lipsticks"></Route>
        <Route element={  <Products title='Bronzer' url={Bronzer}/>} path="/Bronzer"></Route>
        <Route element={  <Products title='Eyeshadow' url={Eyeshadaw}/>} path="/Eyeshadow"></Route>
        <Route element={  <Products title='Eyeliner' url={Eyeliner}/>} path="/Eyeliner"></Route>
        <Route element={  <Products title='Lipstick' url={Lipstick}/>} path="/Lipstick"></Route>
        <Route element={  <Products title='Lip Liner' url={LipLiner}/>} path="/LipLiner"></Route>
        <Route element={  <Products title='Mascara' url={Mascara}/>} path="/Mascara"></Route>
        <Route element={  <Products title='Nail Polish' url={Nailpolish}/>} path="/NailPolish"></Route>
     
   
      </Routes>
      
   
      

    </div>
  );
}

export default App;
