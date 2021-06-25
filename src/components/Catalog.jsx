import React from 'react';

import Card from './Card';
import Filter from './Filter';
import Sort from './Sort';

const Catalog = () => {
  return (
		<div className="catalog">
			<h2 className="main__title">Каталог гитар</h2>
			<ol className="breadcrumbs">
				<li className="breadcrumbs__item">
					<a className="breadcrumbs__link" href="#top">Главная</a>
				</li>
				<li className="breadcrumbs__item">
					<a className="breadcrumbs__link" href="#top">Каталог</a>
				</li>
			</ol>

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
			</section>

		</div>
  )
}

export default Catalog;
