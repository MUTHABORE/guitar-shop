import React from 'react';
import {Link} from 'react-router-dom';

import guitarImage from '../images/chesterBass.png';

import Breadcrumbs from './Breadcrumbs';
import Card from './Card';
import Filter from './Filter';
import Sort from './Sort';

const Catalog = () => {
  return (
		<div className="catalog">
			<h2 className="main__title">Каталог гитар</h2>
			<Breadcrumbs />
			{/* <ol className="breadcrumbs">
				<li className="breadcrumbs__item">
					<a className="breadcrumbs__link" href="#top">Главная</a>
				</li>
				<li className="breadcrumbs__item">
					<a className="breadcrumbs__link" href="#top">Каталог</a>
				</li>
			</ol> */}

			<Filter />

			<section className="goods">
				<Sort />

				<ul className="goods__list">
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</ul>

				<ol className="pagination">
					<li className="pagination__page pagination__page--active">1</li>
					<li className="pagination__page">2</li>
					<li className="pagination__page" disabled>…</li>
					<li className="pagination__page">7</li>
					<li className="pagination__page pagination__page--next">Далее</li>
				</ol>

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
			</section>

		</div>
  )
}

export default Catalog;
