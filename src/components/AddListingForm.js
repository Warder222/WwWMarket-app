import React, { useState } from 'react';

const AddListingForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Объявление добавлено:\n${title}\nЦена: ${price} ₽`);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-4 mb-6">
      <h2 className="text-xl font-semibold mb-3">Добавить товар</h2>
      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700">Название товара</label>
        <input
          type="text"
          placeholder="Например: iPhone 13 Pro"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700">Описание товара</label>
        <textarea
          placeholder="Введите описание..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Цена</label>
        <input
          type="number"
          placeholder="Цена в рублях"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
      >
        Добавить объявление
      </button>
    </form>
  );
};

export default AddListingForm;