import React from 'react';

const Breadcrumbs = () => {
  return (
    <ol className="breadcrumbs">
      <li className="breadcrumbs__item">
        <a className="breadcrumbs__link" href="#top">Главная</a>
      </li>
      <li className="breadcrumbs__item">
        <a className="breadcrumbs__link" href="#top">Каталог</a>
      </li>
    </ol>
  )
}

export default Breadcrumbs;
