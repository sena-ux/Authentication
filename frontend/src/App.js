import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login"
import User from "./pages/User";
import Product from "./pages/Product";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/users" element={<User />}/>
          <Route path="/users/add" element={<AddUser />}/>
          <Route path="/users/edit/:id" element={<EditUser />}/>
          <Route path="/Product" element={<Product />}/>
          <Route path="/Product/add" element={<AddProduct />}/>
          <Route path="/Product/edit/:id" element={<EditProduct />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
