// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {NavBar} from "./componenst/layoust/NavBar"
import ProductList from "./componenst/common/ProductList";
import Cart from "./componenst/pages/ItenListContainer/cart/Cart";
import ItemDetail from "./componenst/pages/ItenListContainer/itemDetail/ItemDetail";



function App() {

  return (
    
    <BrowserRouter>
      <NavBar/>

     < Routes>
       
      <Route  path="/" element={<ProductList/>} />
      <Route path="/category/:categoryId" element={<ProductList />} />
      
      <Route  path="/cart" element={<Cart/>} />
      <Route  path="/product/:id" element={<ItemDetail/>} />
      




     </Routes>
    </BrowserRouter>

  );
};

export default App;
