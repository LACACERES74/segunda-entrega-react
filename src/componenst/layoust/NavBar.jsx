import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import CartWidget from "../common/CartWidget";

export const NavBar = () => {
  return (
    <div className="nav">
      <h1>"Amelia Tejidos"</h1>

      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/category/gorro">Gorros</Link>  
        </li>
        <li>
          <Link to="/category/saco">Sacos</Link>  
        </li>
        <li>
          <Link to="/category/sueter">Sueter</Link> 
        </li>
      </ul>

      <CartWidget />
    </div>
  );
};
