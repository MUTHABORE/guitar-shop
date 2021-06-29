import React from 'react';
import {Link} from 'react-router-dom';
import {withCatalog} from '../hocs/with-catalog';

import guitarImage from '../images/electro.png';

import Breadcrumbs from './Breadcrumbs';
import Popup from './Popup';
import Card from './Card';
import Filter from './Filter';
import Sort from './Sort';


const Catalog = (props) => {
	const {guitarsToView} = props;
	console.log(props, guitarsToView)
  return (
		<div className="catalog">
			<h2 className="main__title">Каталог гитар</h2>
			<Breadcrumbs path={[
				{
					name: `Главная`,
				},
				{
					name: `Каталог`,
				}
				]}
			/>

			<Filter />

			<section className="goods">
				<Sort />

				<ul className="goods__list">
					{
						guitarsToView.map((guitar) => {
							return <Card guitar={guitar} />
						})
					}
				</ul>

				<ol className="pagination">
					<li className="pagination__page pagination__page--active">1</li>
					<li className="pagination__page">2</li>
					<li className="pagination__page" disabled>…</li>
					<li className="pagination__page">7</li>
					<li className="pagination__page pagination__page--next">Далее</li>
				</ol>


				{/* <Popup /> */}

			</section>

		</div>
  )
}

export default withCatalog(Catalog);
