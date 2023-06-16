import Allproducts from "./Products/Allproducts";
import Camera from "./Products/Camera";
import Laptop from "./Products/Laptop";
import Mobile from "./Products/Mobile";
import Tablet from "./Products/Tablet";
import Navbar from "./navbar/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./userModule/Login";
import Signup from "./userModule/Signup";
import Dashboard from "./Dashboard/Dashboard";
import Addproduct from "./AdminModule/Addproduct";
import Cart from "./CartModule/Cart";

function App() {
  return (
    <div>
       <BrowserRouter>
       <Navbar />
       <Routes>
       <Route path="/" element={<Dashboard />}></Route>
        <Route path="/allproduct" element={<Allproducts />}></Route>
        <Route path="/mobile" element={ <Mobile />}></Route>
        <Route path="/tablet" element={ <Tablet />}></Route>
        <Route path="/camera" element={<Camera />}></Route>
        <Route path="/laptop" element={<Laptop />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={ <Signup />}></Route>
        <Route path="/addproduct" element={ <Addproduct />}></Route>
        <Route path="/cartDetails" element={<Cart />} ></Route>


       </Routes>
       
       </BrowserRouter>
       
      
      
       
    </div>
  );
}

export default App;
