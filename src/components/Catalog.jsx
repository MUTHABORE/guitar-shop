import React from 'react';
import {Link} from 'react-router-dom';
import {withCatalog} from '../hocs/with-catalog';

import guitarImage from '../images/electro.png';

import Breadcrumbs from './Breadcrumbs';
import Popup from './Popup';
import Card from './Card';
import Filter from './Filter';
import Sort from './Sort';
import Pagination from './Pagination';


const Catalog = (props) => {
	const {guitarsToView, filteredGuitars, page, onPageChange, minPrice, maxPrice, onGuitarsSortChange, onGuitarsSortDirectionChange, sortType, sortDirection, onGuitarsFilterMinPriceChange, onGuitarsFilterMaxPriceChange, filterMinPrice, filterMaxPrice, onFilterMinPriceBlur, onFilterMaxPriceBlur, onFilterTypeSelect, onFilterStringsSelect, filterType, filterStrings, availableStrings} = props;
	
	console.log(guitarsToView)
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

			<Filter minPrice={minPrice} maxPrice={maxPrice} onGuitarsFilterMinPriceChange={onGuitarsFilterMinPriceChange} onGuitarsFilterMaxPriceChange={onGuitarsFilterMaxPriceChange} filterMinPrice={filterMinPrice} filterMaxPrice={filterMaxPrice} onFilterMinPriceBlur={onFilterMinPriceBlur} onFilterMaxPriceBlur={onFilterMaxPriceBlur} onFilterTypeSelect={onFilterTypeSelect} onFilterStringsSelect={onFilterStringsSelect} filterType={filterType} filterStrings={filterStrings} availableStrings={availableStrings} />

			<section className="goods">
				<Sort onGuitarsSortChange={onGuitarsSortChange} onGuitarsSortDirectionChange={onGuitarsSortDirectionChange} sortType={sortType} sortDirection={sortDirection} />

				<ul className="goods__list">
					{
						guitarsToView.map((guitar, i) => {
							return <Card guitar={guitar} i={i}/>
						})
					}
				</ul>

				<Pagination guitars={filteredGuitars} page={page} onPageChange={onPageChange} />


				{/* <Popup /> */}

			</section>

		</div>
  )
}

export default withCatalog(Catalog);
