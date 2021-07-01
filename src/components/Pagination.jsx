import React from 'react';
import {withPagination} from '../hocs/with-pagination';

const Pagination = (props) => {
	const {onPageChange, page, pagesLength} = props;
	console.log(page)
  return (
		<ol className="pagination">

			{page !== 1 && (
				<li className="pagination__page pagination__page--next" value={page - 1}>Назад</li>
			)}

			<li className={`pagination__page ${page === 1 ? `pagination__page--active` : ``}`} value="1" onClick={onPageChange}>1</li>

			{page === 1 && (
				<li className="pagination__page" value="2">2</li>
			)}

			<li className="pagination__page" disabled={`disabled`} >…</li>

			<li className="pagination__page" value={page}>{page}</li>

			<li className="pagination__page" disabled>…</li>


			{page === pagesLength && (
				<li className="pagination__page" value={pagesLength - 1}>{pagesLength - 1}</li>
			)}

			<li className="pagination__page" value={pagesLength}>{pagesLength}</li>

			{page !== pagesLength && (
				<li className="pagination__page pagination__page--next" value={page + 1}>Далее</li>
			)}

		</ol>
  )
}

export default withPagination(Pagination);
