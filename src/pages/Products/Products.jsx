import React, { useEffect, useState } from 'react';

import ProductItem from '../../components/ProductItem/ProductItem';

import s from './Products.module.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [param, setParam] = useState({ name: '', value: '' });
  const paramURL = param.name && param.value ? `/${param.name}/${param.value}` : '';
  useEffect(() => {
    fetch(`http://localhost:5000/products/${name}${paramURL}`)
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, [name, paramURL]);
  console.log(products);
  return (
    <div className={s.container}>
      <h1>Список товаров</h1>
      <div className={s.searchPanel}>
        <div>
          <input
            type='text'
            placeholder='Название товара'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className={s.params}>
          <select
            onChange={(e) => {
              setParam({ ...param, name: e.target.value });
            }}
            value={param.name}
          >
            <option value=''>Выберите параметр</option>
            <option value='price'>Цена</option>
            <option value='amount'>Количество</option>
            <option value='color'>Цвет</option>
            <option value='origin'>Производитель</option>
          </select>
          <input
            type='text'
            placeholder='Значение параметра'
            value={param.value}
            onChange={(e) => {
              setParam({ ...param, value: e.target.value });
            }}
          />
        </div>
      </div>
      <div className={s.listContainer}>
        {products.map((elem, index) => (
          <ProductItem key={index} {...elem} />
        ))}
      </div>
    </div>
  );
};

export default Products;
