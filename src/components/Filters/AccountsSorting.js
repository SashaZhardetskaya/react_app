import React, { Component } from 'react';

import './Filters.css';

export default class AccountsSorting extends Component {
    constructor() {
        super();

        this.state = {
            sortingCriterion: '',
            sortIncrement: false,
            isOpen: false
        };

        this.toggleSorting = this.toggleSorting.bind(this);
    }

    toggleSorting = (e) => {
        this.setState({
                sortingCriterion: e.target.value === this.state.sortingCriterion ? '' : e.target.value
            },
        );
    };


    handleSortingOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    handleSortingChange = (e) => {
        let selectedSorting = {
            sortingName: e.target.name,
            sortingStatus: e.target.value
        };
        this.props.onSortingChange(selectedSorting.sortingName, selectedSorting.sortingStatus);
    };

    render() {
        return (
            <div className="filter__wrapper">
                <div className="sorting__sign" onClick={this.handleSortingOpen}>Sort by</div>
                {this.state.isOpen &&
                <ul className="sorting__checkbox-list">
                    <li>
                        <label>
                            <input type="checkbox"
                                   name="sortAccounts"
                                   value="date"
                                   onChange={this.toggleSorting}
                                   checked={this.state.sortingCriterion === "date" ? true : false}
                            />
                            <span>date</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"
                                   name="sortAccounts"
                                   value="amount"
                                   onChange={this.toggleSorting}
                                   checked={this.state.sortingCriterion === "amount" ? true : false}
                            />
                            <span>summ</span>
                        </label>
                    </li>
                </ul>
                }
                {this.getDateSortings()}
                {this.getAmountSortings()}
            </div>
        );
    }

    getDateSortings() {
        if (this.state.sortingCriterion !== 'date') return null;
        return (
            <div>
                {this.state.isOpen &&
                <ul className="filters__radio-list">
                    <li>
                        <label>
                            <input type="radio"
                                   name="date"
                                   value="ascending"
                                   onChange={this.handleSortingChange}
                            />
                            <span>Ascending date</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio"
                                   name="date"
                                   value="descending"
                                   onChange={this.handleSortingChange}
                            />
                            <span>Descending date</span>
                        </label>
                    </li>
                </ul>
                }
            </div>
        )
    }

    getAmountSortings() {
        if (this.state.sortingCriterion !== 'amount') return null;
        return (
            <div>
                {this.state.isOpen &&
                <ul className="filters__radio-list">
                    <li>
                        <label>
                            <input type="radio"
                                   name="amount"
                                   value="ascending"
                                   onChange={this.handleSortingChange}
                            />
                            <span>Ascending amount</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio"
                                   name="amount"
                                   value="descending"
                                   onChange={this.handleSortingChange}
                            />
                            <span>Descending amount</span>
                        </label>
                    </li>
                </ul>
                }
            </div>
        )
    }
}
