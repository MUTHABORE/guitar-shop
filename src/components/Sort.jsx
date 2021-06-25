import React from 'react';

const Sort = () => {
  return (
		<div className="sort">
			<div className="sort__type">
				<p className="sort__type-title">Сортировать:</p>
				<label>
					<p className="sort__type-option sort__type-option--active">по цене</p>
					<input className="visually-hidden" type="radio" name="sort-type" />
				</label>
				<label>
					<p className="sort__type-option">по популярности</p>
					<input className="visually-hidden" type="radio" name="sort-type" />
				</label>
			</div>
			<div className="sort__direction">
				<label className="sort__direction-arrow sort__direction-arrow--up sort__direction-arrow--active">
					<input className="visually-hidden" type="radio" name="sort-type" />
				</label>
				<label className="sort__direction-arrow">
					<input className="visually-hidden" type="radio" name="sort-type" />
				</label>
			</div>
		</div>
  )
}

export default Sort;
