import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {MAX_PAGE_GUITARS} from '../const';

export const withPagination = (Component) => {
	class WithPagination extends PureComponent {
		constructor(props) {
			super(props);

			this.guitarsLength = Math.ceil(this.props.guitars.length / MAX_PAGE_GUITARS);

			this.state = {
			};

			this.getPaginationValues = this.getPaginationValues.bind(this);
		}

		getPaginationValues() {
			// console.log(this.guitarsLength);
			let values = [];
			
			values[0] = `1`;
			
			if (this.props.page > 2 & this.props.page - 1 !== 2) {
				values.push(`…`);
			}
			
			for(let i = this.props.page - 1; i < this.props.page + 2; i++) {
				if (i > 1 && i < this.guitarsLength) {
					values.push(i.toString());
				}
			}
			
			if (this.props.page < this.guitarsLength - 1) {
				values.push(`…`);
			}
			
			values.push(this.guitarsLength.toString());
			
			// console.log(values)

			return values;
		}

		render() {
			return(
				<Component
					page={this.props.page}
					onPageChange={this.props.onPageChange}
					pagesLength={this.guitarsLength}
					getPaginationValues={this.getPaginationValues}
				/>
		)}
	}

	WithPagination.propTypes = {
		guitars: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string.isRequired,
				type: PropTypes.string.isRequired,
				strings: PropTypes.number.isRequired,
				article: PropTypes.string.isRequired,
				price: PropTypes.number.isRequired,
				rating: PropTypes.number.isRequired,
				reviews: PropTypes.number.isRequired,
			})
		).isRequired,
		onPageChange: PropTypes.func.isRequired,
		page: PropTypes.number.isRequired,
	};

	return WithPagination;
}
