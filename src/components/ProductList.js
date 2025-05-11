import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Список товаров</h2>
      {products.map((product, index) => (
        <div key={index}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Цена: {product.price} ₽</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
// src/data/products.js
export const mockProducts = [
  {
    title: 'iPhone 13 Pro',
    description: 'Новый iPhone 13 Pro в отличном состоянии.',
    price: 75000,
  },
  {
    title: 'Ноутбук Lenovo',
    description: 'Производительный ноутбук для работы и учёбы.',
    price: 35000,
  },
  {
    title: 'Велосипед детский',
    description: 'Удобный велосипед для детей от 6 до 12 лет.',
    price: 8000,
  },
];