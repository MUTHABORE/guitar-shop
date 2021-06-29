import React, {PureComponent} from 'react';

import {guitars} from '../mocks';

export const withCatalog = (Component) => {
	class WithCatalog extends PureComponent {
		constructor(props) {
			super(props);

			this.state = {
				page: 1,
			};
		}

		render() {
			return(
				<Component
					guitarsToView={guitars.slice((this.state.page - 1) * 9, this.state.page * 9)}
				/>
		)}
	}

	return WithCatalog;
}
