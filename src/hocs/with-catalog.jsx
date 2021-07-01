import React, {PureComponent} from 'react';

import {guitars, typeOfStrings} from '../mocks';
import {findMinMaxPrice} from '../utils';
import {MAX_PAGE_GUITARS} from '../const';

export const withCatalog = (Component) => {
	class WithCatalog extends PureComponent {
		constructor(props) {
			super(props);

			this.state = {
				page: 1,
				guitars: guitars,

				sortType: ``,
				sortDirection: ``,
				
				filter: {
					minPrice: ``,
					maxPrice: ``,
					type: new Set(),
					strings: new Set(),
					availableStrings: new Set([...typeOfStrings.acoustic, ...typeOfStrings.electro, ...typeOfStrings.ukulele]),
				}
			};

			this.guitarsSort = this.guitarsSort.bind(this);
			this.onGuitarsSortChange = this.onGuitarsSortChange.bind(this);
			this.onGuitarsSortDirectionChange = this.onGuitarsSortDirectionChange.bind(this);
			this.onGuitarsFilterMinPriceChange = this.onGuitarsFilterMinPriceChange.bind(this);
			this.onGuitarsFilterMaxPriceChange = this.onGuitarsFilterMaxPriceChange.bind(this);
			this.onFilterMinPriceBlur = this.onFilterMinPriceBlur.bind(this);
			this.onFilterMaxPriceBlur = this.onFilterMaxPriceBlur.bind(this);
			this.guitarsFilter = this.guitarsFilter.bind(this);
			this.onFilterTypeSelect = this.onFilterTypeSelect.bind(this);
			this.onFilterStringsSelect = this.onFilterStringsSelect.bind(this);
			this.getAvailableStrings = this.getAvailableStrings.bind(this);
			this.onPageChange = this.onPageChange.bind(this);
		}

		guitarsSort(type) {
			let sortedGuitars = this.state.guitars.sort((a, b) => {
				if (a[type] < b[type]) {
					return -1;
				}
				if (a[type] > b[type]) {
					return 1;
				}
				return 0;
			}).slice();

			this.state.sortDirection === `down` ? sortedGuitars = sortedGuitars.reverse() : sortedGuitars = sortedGuitars;

			this.setState({guitars: sortedGuitars});

		}

		onGuitarsSortChange(evt) {
			const target = evt.target;

			if (this.state.sortDirection === ``) {
				this.setState({
					sortDirection: `up`,
					sortType: target.value,
				}, () => this.guitarsSort(target.value))
				return;
			}

			this.setState({
				sortType: target.value,
			}, () => this.guitarsSort(target.value))
		}
		
		onGuitarsSortDirectionChange(evt) {
			const target = evt.target;


			if (this.state.sortType === ``) {
				this.setState({
					sortType: `price`,
					sortDirection: target.value,
				}, () => this.guitarsSort(this.state.sortType))
				return;
			}

			this.setState({
				sortDirection: target.value,
			}, () => this.guitarsSort(this.state.sortType))
		}


		guitarsFilter() {
			let filteredGuitars = guitars.filter((guitar) => {
				if (guitar.price < +this.state.filter.minPrice && this.state.filter.minPrice !== ``) {
					return false;
				}
				if (guitar.price > +this.state.filter.maxPrice && this.state.filter.maxPrice !== ``) {
					return false;
				}
				if (this.state.filter.type.size !== 0) {
					return this.state.filter.type.has(guitar.type);
				}
				if (this.state.filter.strings.size !== 0) {
					return this.state.filter.strings.has(guitar.strings.toString());
				}
				return true;
			});

			this.setState({guitars: filteredGuitars});
		}

		onGuitarsFilterMinPriceChange(evt) {
			evt.preventDefault();
				this.setState({filter: Object.assign(
					{}, this.state.filter, {
						minPrice: evt.target.value,
					}
				)})
			return;
		}

		onGuitarsFilterMaxPriceChange(evt) {
			evt.preventDefault();
				this.setState({filter: Object.assign(
					{}, this.state.filter, {
						maxPrice: evt.target.value,
					}
				)})
			return;
		}

		onFilterMinPriceBlur(evt) {
			evt.preventDefault();
			const target = evt.currentTarget;
			
			if(target.value > +this.state.filter.maxPrice) {
				this.setState({filter: Object.assign(
					{}, this.state.filter, {
						minPrice: this.state.filter.maxPrice === `` ? +target.value : +this.state.filter.maxPrice,
					}
				)}, () => this.guitarsFilter());
				return;
			}

			this.setState({filter: Object.assign(
				{}, this.state.filter, {
					minPrice: target.value,
				}
			)}, () => this.guitarsFilter());
		}

		onFilterMaxPriceBlur(evt) {
			evt.preventDefault();
			const target = evt.currentTarget;
			
			if(target.value < +this.state.filter.minPrice) {
				this.setState({filter: Object.assign(
					{}, this.state.filter, {
						maxPrice: this.state.filter.minPrice === `` ? +target.value : +this.state.filter.minPrice,
					}
					)}, () => this.guitarsFilter());
				return;
			}
			
			this.setState({filter: Object.assign(
				{}, this.state.filter, {
					maxPrice: target.value,
				}
			)}, () => this.guitarsFilter());
		}

		onFilterTypeSelect(evt) {
			const target = evt.target;
			let selectedTypes = new Set(this.state.filter.type);

			if (selectedTypes.has(target.value)) {
				selectedTypes.delete(target.value);
				this.setState({filter: Object.assign(
					{}, this.state.filter, {
						type: selectedTypes,
					}
				)}, () => {this.guitarsFilter(); this.getAvailableStrings();});
				return;
			}

			this.setState({filter: Object.assign(
				{}, this.state.filter, {
					type: selectedTypes.add(target.value),
				}
			)}, () => {this.guitarsFilter(); this.getAvailableStrings();});
		}

		onFilterStringsSelect(evt) {
			const target = evt.target;
			let selectedStrings = new Set(this.state.filter.strings);

			if (selectedStrings.has(target.value)) {
				selectedStrings.delete(target.value);
				this.setState({filter: Object.assign(
					{}, this.state.filter, {
						strings: selectedStrings,
					}
				)}, () => this.guitarsFilter());
				return;
			}

			this.setState({filter: Object.assign(
				{}, this.state.filter, {
					strings: selectedStrings.add(target.value),
				}
			)}, () => this.guitarsFilter());
		}

		getAvailableStrings() {
			let strings = [];

			if (this.state.filter.type.size === 0) {
				strings = [...typeOfStrings.acoustic, ...typeOfStrings.electro, ...typeOfStrings.ukulele];
			} else {
				Array.from(this.state.filter.type).map((type) => {
					strings = strings.concat(typeOfStrings[type]);
				})
			}

			if (strings.length === 0) {
				return;
			}

			this.setState({filter: Object.assign(
				{}, this.state.filter, {
					availableStrings: new Set(strings),
				}
			)});
		}

		onPageChange(evt) {
			const value = evt.target.value;
			console.log(value)
		}
	
		render() {

			return(
				<Component
					onGuitarsSortChange={this.onGuitarsSortChange}
					onGuitarsSortDirectionChange={this.onGuitarsSortDirectionChange}
					guitarsToView={this.state.guitars.slice((this.state.page - 1) * MAX_PAGE_GUITARS, this.state.page * MAX_PAGE_GUITARS)}
					filteredGuitars={this.state.guitars}
					sortType={this.state.sortType}
					sortDirection={this.state.sortDirection}
					onGuitarsFilterMinPriceChange={this.onGuitarsFilterMinPriceChange}
					onGuitarsFilterMaxPriceChange={this.onGuitarsFilterMaxPriceChange}
					filterMinPrice={this.state.filter.minPrice}
					filterMaxPrice={this.state.filter.maxPrice}
					onFilterMinPriceBlur={this.onFilterMinPriceBlur}
					onFilterMaxPriceBlur={this.onFilterMaxPriceBlur}
					onFilterTypeSelect={this.onFilterTypeSelect}
					onFilterStringsSelect={this.onFilterStringsSelect}
					filterType={this.state.filter.type}
					filterStrings={this.state.filter.strings}
					availableStrings={this.state.filter.availableStrings}
					page={this.state.page}
					onPageChange={this.onPageChange}
				/>
		)}
	}

	return WithCatalog;
}
