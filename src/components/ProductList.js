// src/components/ProductList.js
import React from 'react';
import { mockProducts } from '../data/products';

const ProductList = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Список товаров</h2>
      <div className="grid grid-cols-1 gap-4">
        {mockProducts.map((product, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-4">
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-600 mt-1">{product.description}</p>
            <p className="text-blue-600 font-bold mt-2">{product.price} ₽</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;