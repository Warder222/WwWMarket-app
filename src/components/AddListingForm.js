import React, { useState } from 'react';

const AddListingForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Добавление объявления:', { title, description, price });
    // Здесь можно добавить логику для отправки данных на сервер
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Добавить новое объявление</h2>
      <input
        type="text"
        placeholder="Название товара"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Описание товара"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Цена"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">Добавить объявление</button>
    </form>
  );
};

export default AddListingForm;