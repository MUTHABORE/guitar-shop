import React from 'react';

const Filter = (props) => {
	const {onGuitarsFilterMinPriceChange, onGuitarsFilterMaxPriceChange, onFilterMinPriceBlur, onFilterMaxPriceBlur, filterMinPrice, filterMaxPrice, onFilterTypeSelect, onFilterStringsSelect, filterType, filterStrings, availableStrings} = props;
  return (
		<ul className="filter">
			<li className="filter__item">
				<h3 className="filter__title">Фильтр</h3>
			</li>
			<li className="filter__item">
				<h4 className="filter__type-title">Цена, ₽</h4>
				<div className="filter__price">
					<input className="filter__price-input filter__price-input--min" value={filterMinPrice} name="min" type="number" required onChange={onGuitarsFilterMinPriceChange} onBlur={onFilterMinPriceBlur} />
					<input className="filter__price-input filter__price-input--max" value={filterMaxPrice} name="max" type="number" required onChange={onGuitarsFilterMaxPriceChange} onBlur={onFilterMaxPriceBlur} />
				</div>
			</li>
			<li className="filter__item">
				<h4 className="filter__type-title">Тип гитар</h4>

				<ul className="filter__guitar-types">

					<li>
						<label>
							<input className="visually-hidden" value="acoustic" type="checkbox" name="guitar-type" onChange={onFilterTypeSelect} />
							<p className={`filter__checkbox${filterType.has(`acoustic`) ? ` filter__checkbox--active` : ``}`}>Акустические гитары</p>
						</label>
					</li>

					<li>
						<label>
							<input className="visually-hidden" value="electro" type="checkbox" name="guitar-type" onChange={onFilterTypeSelect} />
							<p className={`filter__checkbox${filterType.has(`electro`) ? ` filter__checkbox--active` : ``}`}>Электрогитары</p>
						</label>
					</li>

					<li>
						<label>
							<input className="visually-hidden" value="ukulele" type="checkbox" name="guitar-type" onChange={onFilterTypeSelect} />
							<p className={`filter__checkbox${filterType.has(`ukulele`) ? ` filter__checkbox--active` : ``}`}>Укулеле</p>
						</label>
					</li>

				</ul>
			</li>
			<li className="filter__item">
				<ul className="filter__strings">
					<h4 className="filter__type-title">Количество струн</h4>

					<li>
						<label>
							<input
								disabled={availableStrings.has(`4`) ? `` : `disabled`}
								className="visually-hidden"
								type="checkbox"
								name="guitar-strings"
								value="4"
								onChange={onFilterStringsSelect}
							/>
							<p className={`filter__checkbox${filterStrings.has(`4`) ? ` filter__checkbox--active` : ``}${availableStrings.has(`4`) ? `` : ` filter__checkbox--disabled`}`}>4</p>
						</label>
					</li>

					<li>
						<label>
							<input
								disabled={availableStrings.has(`6`) ? `` : `disabled`}
								className="visually-hidden"
								type="checkbox"
								name="guitar-strings"
								value="6"
								onChange={onFilterStringsSelect}
							/>
							<p className={`filter__checkbox${filterStrings.has(`6`) ? ` filter__checkbox--active` : ``}${availableStrings.has(`6`) ? `` : ` filter__checkbox--disabled`}`}>6</p>
						</label>
					</li>

					<li>
						<label>
							<input
								disabled={availableStrings.has(`7`) ? `` : `disabled`}
								className="visually-hidden"
								type="checkbox"
								name="guitar-strings"
								value="7"
								onChange={onFilterStringsSelect}
							/>
							<p className={`filter__checkbox${filterStrings.has(`7`) ? ` filter__checkbox--active` : ``}${availableStrings.has(`7`) ? `` : ` filter__checkbox--disabled`}`}>7</p>
						</label>
					</li>

					<li>
						<label>
							<input
								disabled={availableStrings.has(`12`) ? `` : `disabled`}
								className="visually-hidden"
								type="checkbox"
								name="guitar-strings"
								value="12"
								onChange={onFilterStringsSelect}
							/>
							<p className={`filter__checkbox${filterStrings.has(`12`) ? ` filter__checkbox--active` : ``}${availableStrings.has(`12`) ? `` : ` filter__checkbox--disabled`}`}>12</p>
						</label>
					</li>

				</ul>
			</li>
		</ul>
  )
}

export default Filter;

