import React from 'react';

import s from './ProductItem.module.css';

const ProductItem = ({ name, description, params }) => {
  return (
    <div className={s.container}>
      <h2>{name}</h2>
      <p>{description}</p>
      <h3>Дополнительная информация:</h3>
      <span>
        Цена: <b>{params.price ? params.price : 'Неизвестна'}</b>
      </span>
      <span>
        Количество: <b>{params.amount ? params.amount : 'Неизвестно'}</b>
      </span>
      <span>
        Цвет: <b>{params.color ? params.color : 'Неопределённый'}</b>
      </span>
      <span>
        Производитель: <b>{params.origin ? params.origin : 'Неизвестен'}</b>
      </span>
    </div>
  );
};
export default ProductItem;
