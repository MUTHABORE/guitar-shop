import React from 'react';
import {Link} from 'react-router-dom';

import guitarImage from '../images/electro.png';

const Popup = () => {
	return (
		<section className="popup__overlay">
			{/* <div className="popup popup--card">
				<button className="popup__button-cross"></button>
				<p className="popup__title">Добавить товар в корзину</p>

				<img className="popup__guitar-img" src={guitarImage} alt="Фотография гитары" />
				
				<div className="popup__guitar-info">
					<p className="popup__guitar-title">Гитара Честер bass</p>
					<p className="popup__guitar-article">Артикул: SO757575</p>
					<p className="popup__guitar-strings">Электрогитара, 6 струнная</p>
					<p className="popup__guitar-price">Цена: 17 500 ₽</p>
				</div>

				<button className="popup__button-add" type="button">Добавить в корзину</button>
			</div> */}

			<div className="popup popup--success">
				<button className="popup__button-cross"></button>
				<p className="popup__title">Товар успешно добавлен в корзину</p>
				<div className="popup__buttons-container">
					<Link className="popup__basket-link" to="/basket">Перейти в корзину</Link>
					<button className="popup__resume-shopping" type="button">Продолжить покупки</button>
				</div>
			</div>
		</section>
	)
}

export default Popup;
