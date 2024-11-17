// ProductList.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { product } from './products';
import ProductCard from './ProductCard';

const ProductList = () => {


  const { categoryId } = useParams();  // Obtenemos el parámetro de categoría desde la URL
  const [filteredProducts, setFilteredProducts] = useState(product);

  useEffect(() => {
    if (categoryId) {
      // Filtramos los productos por categoría
      const filtered = product.filter(prod => prod.categoria === categoryId);
      setFilteredProducts(filtered);
    } else {
      // Si no hay filtro de categoría, mostramos todos los productos
      setFilteredProducts(product);
    }
  }, [categoryId]);  // Dependemos de `categoryId` para actualizar el filtro

  return (
    <div className="product-list">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))
      ) : (
        <p>No hay productos disponibles en esta categoría.</p>
      )}
    </div>
  );
};

export default ProductList;

