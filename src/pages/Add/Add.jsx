import React, { useState } from 'react';

import s from './Add.module.css';

const Add = () => {
  const [data, setData] = useState({
    name: '',
    description: '',
    params: { price: '', amount: '', color: '', origin: '' },
  });

  const addProduct = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    setData({
      name: '',
      description: '',
      params: { price: '', amount: '', color: '', origin: '' },
    });
  };

  return (
    <div className={s.container}>
      <h1>Добавить товар</h1>
      <form className={s.form} name='add' onSubmit={addProduct}>
        <div className={s.fieldsCont}>
          <h2>Основные параметры</h2>
          <label htmlFor='name'>Название товара*</label>
          <input
            type='text'
            value={data.name}
            onChange={(e) => {
              e.preventDefault();
              setData({ ...data, name: e.target.value });
            }}
            required
          />
          <label htmlFor='description'>Описание товара*</label>
          <textarea
            id='description'
            name='description'
            value={data.description}
            onChange={(e) => {
              e.preventDefault();
              setData({ ...data, description: e.target.value });
            }}
            required
          />
        </div>
        <div className={s.fieldsCont}>
          <h2>Прочие параметры</h2>

          <label htmlFor='price'>Цена</label>
          <input
            type='text'
            value={data.params.price}
            onChange={(e) => {
              e.preventDefault();
              setData({ ...data, params: { ...data.params, price: e.target.value } });
            }}
          />

          <label htmlFor='amount'>Количество на складе</label>
          <input
            type='text'
            value={data.params.amount}
            onChange={(e) => {
              e.preventDefault();
              setData({ ...data, params: { ...data.params, amount: e.target.value } });
            }}
          />

          <label htmlFor='color'>Цвет</label>
          <input
            type='text'
            value={data.params.color}
            onChange={(e) => {
              e.preventDefault();
              setData({ ...data, params: { ...data.params, color: e.target.value } });
            }}
          />

          <label htmlFor='origin'>Производитель</label>
          <input
            type='text'
            value={data.params.origin}
            onChange={(e) => {
              e.preventDefault();
              setData({ ...data, params: { ...data.params, origin: e.target.value } });
            }}
          />
          <input type='submit' value='Добавить товар' />
        </div>
      </form>
    </div>
  );
};

export default Add;
