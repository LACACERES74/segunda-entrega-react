import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { product } from '../../../common/products';


const ItemDetail = () => {
  const { id } = useParams(); 
  const [selectedProduct, setSelectedProduct] = useState(null); 

  useEffect(() => {
    
    const foundproduct = product.find((el) => el.id === +id); 
    setSelectedProduct(foundproduct || null); 
  }, [id]); // 

  if (!selectedProduct) {
    return <div>Producto no encontrado.</div>; 
  }

  return (
    <div>
      <h2>{selectedProduct.nombre}</h2> {/* Mostrar el nombre del producto */}
      <img src={selectedProduct.imagen} alt={selectedProduct.nombre} /> {/* Mostrar la imagen */}
      <p>{selectedProduct.descripcion}</p> {/* Descripción, si existe */}
      <p>Categoría: {selectedProduct.categoria}</p>
      <p>Precio: ${selectedProduct.precio}</p>
      <p>Stock: {selectedProduct.stock}</p>
    </div>
  );
};

export default ItemDetail;


