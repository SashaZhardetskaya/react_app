import React, { Component } from 'react';

import './Filters.css';

export default class AccountFilter extends Component {
    constructor() {
        super();

        this.state = {
            selectedFilter: '',
            isOpen: false
        };

        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    handleFilterChange(e) {
        let selectedFilter = {
            filterName: e.target.value
        };

        this.props.onFilterChange(selectedFilter.filterName);
    }
    handleFilterOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        return (
            <div className="filter__wrapper">
                <div className="filter__sign" onClick={this.handleFilterOpen}>Filter</div>
                {this.state.isOpen &&
                <ul className="filters__radio-list">
                    <li>
                        <label>
                            <input type="radio"
                                   name="filterAccounts"
                                   value="all"
                                   onChange={this.handleFilterChange}
                            />
                            <span>Show all</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio"
                                   name="filterAccounts"
                                   value="incomes"
                                   onChange={this.handleFilterChange}
                            />
                            <span>Incomes only</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio"
                                   name="filterAccounts"
                                   value="expenses"
                                   onChange={this.handleFilterChange}
                            />
                            <span>Expenses only</span>
                        </label>
                    </li>
                </ul>
                }
            </div>
        );
    }
}
