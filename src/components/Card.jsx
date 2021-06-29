import React from 'react';

import guitarImage from '../images/electro.png';

const Card = (props) => {
	const {guitar} = props;
  return (
		<li className="card">
			<img className="card__img" src={`../src/images/${guitar.type}.png`} alt={`Фотография ${guitar.name}`} />
			{/* <img className="card__img" src={guitarImage} alt={`Фотография ${guitar.name}`} /> */}
			<div className="card__rating">
				<ol className="card__stars-rating">
					<li className="card__star"></li>
					<li className="card__star"></li>
					<li className="card__star"></li>
					<li className="card__star"></li>
					<li className="card__star"></li>
				</ol>
				<p className="card__reviews">{guitar.reviews}</p>
			</div>
			<div className="card__info">
				<p className="card__info-text">{guitar.name}</p>
				<p className="card__info-text">{`${guitar.price} ₽`}</p>
			</div>
			<div className="card__options">
				<button className="card__button" type="button">Подробнее</button>
				<button className="card__button card__button--cart" type="button"> Купить</button>
			</div>
		</li>
  )
}

export default Card;
