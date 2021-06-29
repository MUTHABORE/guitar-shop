import React from 'react';
// import {Link} from 'react-router-dom';

import guitarImage from '../images/electro.png';

const PopupBasket = () => {
	return (
		<section className="popup-basket__overlay">
			<div className="popup-basket">
				<button className="popup-basket__button-cross"></button>
				<p className="popup-basket__title">Удалить этот товар? </p>

				<img className="popup-basket__guitar-img" src={guitarImage} alt="Фотография гитары" />
				
				<div className="popup-basket__guitar-info">
					<p className="popup-basket__guitar-title">Гитара Честер bass</p>
					<p className="popup-basket__guitar-article">Артикул: SO757575</p>
					<p className="popup-basket__guitar-strings">Электрогитара, 6 струнная</p>
					<p className="popup-basket__guitar-price">Цена: 17 500 ₽</p>
				</div>

				<div className="popup-basket__controls">
					<button className="popup-basket__button-delete" type="button">Удалить товар</button>
					<button className="popup-basket__button-resume" type="button">Продолжить покупки</button>
				</div>

			</div>
		</section>
	)
}

export default PopupBasket;
