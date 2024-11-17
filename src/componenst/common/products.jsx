import React from "react";
import imagen1 from "./img/gorro.jpg";
import imagen2 from "./img/saco tejidos.jpg";
import imagen3 from "./img/saco mujer.jpg";
import imagen4 from "./img/gorro 2.jpg";
import imagen5 from "./img/sueter mujer v.jpeg";
import imagen6 from "./img/saco mujer gris.jpg";
import imagen7 from "./img/pulover.jpg";
// productos.js 
export const product = [
  {
    id: 1,
    nombre: "Gorro de lana unisex",
    categoria: "gorro",
    genero: "masculino/femenino",
    precio: 15.99,
    imagen: imagen1,
    stock: 100
  },
  {
    id: 2,
    nombre: "Saco tejidos",
    categoria: "saco",
    genero: "masculino",
    precio: 49.99,
    imagen: imagen2,
    stock: 50
  },
  {
    id: 3,
    nombre: "Saco de punto femenino",
    categoria: "saco",
    genero: "femenino",
    precio: 39.99,
    imagen: imagen3,
    stock: 75
  },
  {
    id: 4,
    nombre: "Gorro de alpaca",
    categoria: "gorro",
    genero: "masculino/femenino",
    precio: 20.00,
    imagen: imagen4,
    stock: 30
  },
  {
    id: 5,
    nombre: "Sueter femenino",
    categoria: "sueter",
    genero: "femenino",
    precio: 55.00,
    imagen: imagen5,
    stock: 20
  },
  {
    id: 6,
    nombre: "Saco femenino",
    categoria: "saco",
    genero: "femenino",
    precio: 45.50,
    imagen: imagen6,
    stock: 60
  },
  {
    id: 7,
    nombre: "Suéter de lana masculino",
    categoria: "sueter",
    genero: "masculino",
    precio: 40.00,
    imagen: imagen7,
    stock: 80
  }
];
