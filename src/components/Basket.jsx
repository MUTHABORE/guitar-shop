import React from 'react';

import guitarImage from '../images/chesterBass.png';

import Breadcrumbs from './Breadcrumbs';

const Basket = () => {
  return (
		<div className="basket">
      <h2 className="basket__title">Корзина</h2>
      <Breadcrumbs />
      <ul className="basket__goods">
        <li className="basket__item">
          <button className="basket__item-button-cross"></button>
          <img className="basket__item-image" src={guitarImage} alt="Фотография экземпляра гитары" />
          <div className="basket__item-info">
            <h3 className="basket__item-title">ЭлектроГитара Честер bass</h3>
            <p className="basket__item-text">Артикул: <span>SO757575</span></p>
            <p className="basket__item-text">Электрогитара, 6 струнная </p>
          </div>
          <div className="basket__item-price">
            <p className="basket__item-price-one">17 500 ₽</p>
            <div className="basket__item-amount-controls">
              <button className="basket__button-amount-change basket__button-amount-change--down">−</button>
              <p className="basket__item-amount">1</p>
              <button className="basket__button-amount-change basket__button-amount-change--up">+</button>
            </div>
            <p className="basket__item-price-total">17 500 ₽</p>
          </div>
        </li>
				<li className="basket__item">
          <button className="basket__item-button-cross"></button>
          <img className="basket__item-image" src={guitarImage} alt="Фотография экземпляра гитары" />
          <div className="basket__item-info">
            <h3 className="basket__item-title">ЭлектроГитара Честер bass</h3>
            <p className="basket__item-text">Артикул: <span>SO757575</span></p>
            <p className="basket__item-text">Электрогитара, 6 струнная </p>
          </div>
          <div className="basket__item-price">
            <p className="basket__item-price-one">17 500 ₽</p>
            <div className="basket__item-amount-controls">
              <button className="basket__button-amount-change basket__button-amount-change--down">−</button>
              <p className="basket__item-amount">1</p>
              <button className="basket__button-amount-change basket__button-amount-change--up">+</button>
            </div>
            <p className="basket__item-price-total">17 500 ₽</p>
          </div>
        </li>
      </ul>

			<div className="basket__total">
				<div className="basket__promocode">
					<p className="basket__promocode-title">Промокод на скидку</p>
					<p className="basket__promocode-info">Введите свой промокод, если он у вас есть.</p>
					<input className="basket__promocode-input" type="text" placeholder="GITARAHIT" />
					<button className="basket__promocode-button" type="button">Применить купон</button>
				</div>
				<div className="basket__total-price">
					<p className="basket__total-price-amount">Всего: 47 000 ₽ </p>
					<button className="basket__total-price-submit" type="button">Оформить заказ</button>
				</div>
			</div>
    </div>
  )
}

export default Basket;