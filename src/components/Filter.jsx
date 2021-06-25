import React from 'react';

const Filter = () => {
  return (
		<ul className="filter">
			<li className="filter__item">
				<h3 className="filter__title">Фильтр</h3>
			</li>
			<li className="filter__item">
				<h4 className="filter__type-title">Цена, ₽</h4>
				<div className="filter__price">
					<input className="filter__price-input filter__price-input--min" min="0" placeholder="1 000" type="number" required />
					<input className="filter__price-input filter__price-input--max" max="100000" placeholder="30 000" type="number" required />
				</div>
			</li>
			<li className="filter__item">
				<h4 className="filter__type-title">Тип гитар</h4>

				<ul className="filter__guitar-types">

					<li>
						<label>
							<input className="visually-hidden" type="checkbox" name="guitar-type" id="acoustic" />
							<p className="filter__checkbox">Акустические гитары</p>
						</label>
					</li>

					<li>
						<label>
							<input className="visually-hidden" type="checkbox" name="guitar-type" id="electric-guitars" />
							<p className="filter__checkbox filter__checkbox--active">Электрогитары</p>
						</label>
					</li>

					<li>
						<label>
							<input className="visually-hidden" type="checkbox" name="guitar-type" id="ukulele" />
							<p className="filter__checkbox">Укулеле</p>
						</label>
					</li>

				</ul>
			</li>
			<li className="filter__item">
				<ul className="filter__strings">
					<h4 className="filter__type-title">Количество струн</h4>

					<li>
						<label>
							<input className="visually-hidden" type="checkbox" name="string" id="4" />
							<p className="filter__checkbox">4</p>
						</label>
					</li>

					<li>
						<label>
							<input className="visually-hidden" type="checkbox" name="string" id="6" />
							<p className="filter__checkbox filter__checkbox--active">6</p>
						</label>
					</li>

					<li>
						<label>
							<input className="visually-hidden" type="checkbox" name="string" id="7" />
							<p className="filter__checkbox">7</p>
						</label>
					</li>

					<li>
						<label>
							<input className="visually-hidden" type="checkbox" name="string" id="12" />
							<p className="filter__checkbox">12</p>
						</label>
					</li>

				</ul>
			</li>
		</ul>
  )
}

export default Filter;

