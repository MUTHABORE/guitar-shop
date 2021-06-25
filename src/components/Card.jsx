import React from 'react';

import guitarImage from '../images/chesterBass.png';

const Card = () => {
  return (
		<li className="card">
			<img className="card__img" src={guitarImage} alt="Фотография экземпляра гитары" />
			<div className="card__rating">
				<ol className="card__stars-rating">
					<li className="card__star"></li>
					<li className="card__star"></li>
					<li className="card__star"></li>
					<li className="card__star"></li>
					<li className="card__star"></li>
				</ol>
				<p className="card__reviews">15</p>
			</div>
			<div className="card__info">
				<p className="card__info-text">Честер Bass</p>
				<p className="card__info-text">17 500 ₽</p>
			</div>
			<div className="card__options">
				<button className="card__button" type="button">Подробнее</button>
				<button className="card__button card__button--cart" type="button"> Купить</button>
			</div>
		</li>
  )
}

export default Card;
