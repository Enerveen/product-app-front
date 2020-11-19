import React from 'react';
import { Link } from 'react-router-dom';

import s from './Header.module.css';

const Header = () => (
  <div className={s.container}>
    <Link to={'/'}>Добавить товар</Link>
    <Link to={'/list'}>Список товаров</Link>
  </div>
);

export default Header;
