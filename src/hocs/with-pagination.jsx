import React, {PureComponent} from 'react';

import {MAX_PAGE_GUITARS} from '../const';

export const withPagination = (Component) => {
	class WithPagination extends PureComponent {
		constructor(props) {
			super(props);

			this.state = {
				pagesLength: Math.ceil(this.props.guitars.length / MAX_PAGE_GUITARS),
			};
		}


	
		render() {
			console.log(this.props)
			console.log(this.props.guitars.length, Math.ceil(this.props.guitars.length / MAX_PAGE_GUITARS))
			return(
				<Component
					page={this.props.page}
					onPageChange={this.props.onPageChange}
					pagesLength={this.state.pagesLength}
				/>
		)}
	}

	return WithPagination;
}
