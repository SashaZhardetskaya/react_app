import React, { Component } from 'react';

import './Categories.css';

export default class Categories extends Component {
    constructor() {
        super();

        this.state = {
            selectedCategory: ''
        };

        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleOptionChange (e) {
        this.setState({
                selectedCategory: e.target.value === this.state.selectedCategory ? '' : e.target.value
            },
            () => {
                let selected = {
                    option: this.state.selectedCategory
                };
                this.props.onAddCategories(selected.option);
            }
        );
    }

    render() {
        return (
            <div className="categories__container">
                <div>
                    <label className="category category--transport">
                        <div className="category__input">
                            <input type="radio" value="transport"
                                   checked={this.props.selectedCategory === 'transport'}
                                   onChange={this.handleOptionChange} />
                            <span></span>
                        </div>
                        <p>Transport</p>
                    </label>
                </div>
                <div>
                    <label className="category category--food">
                        <div className="category__input">
                            <input type="radio" value="food"
                                   checked={this.props.selectedCategory === 'food'}
                                   onChange={this.handleOptionChange} />
                            <span></span>
                        </div>
                        <p>Food</p>
                    </label>
                </div>
                <div>
                    <label className="category category--clothes">
                        <div className="category__input">
                            <input type="radio" value="clothes"
                                   checked={this.props.selectedCategory === 'clothes'}
                                   onChange={this.handleOptionChange} />
                            <span></span>
                        </div>
                        <p>Clothes</p>
                    </label>
                </div>
                <div>
                    <label className="category category--entertainment">
                        <div className="category__input">
                            <input type="radio" value="entertainment"
                                   checked={this.props.selectedCategory === 'entertainment'}
                                   onChange={this.handleOptionChange} />
                            <span></span>
                        </div>
                        <p>Entertainment</p>
                    </label>
                </div>
                <div>
                    <label className="category category--bills">
                        <div className="category__input">
                            <input type="radio" value="bills"
                                   checked={this.props.selectedCategory === 'bills'}
                                   onChange={this.handleOptionChange} />
                            <span></span>
                        </div>
                        <p>Bills</p>
                    </label>
                </div>
                <div>
                    <label className="category category--other">
                        <div className="category__input">
                            <input type="radio" value="other"
                                   checked={this.props.selectedCategory === 'other'}
                                   onChange={this.handleOptionChange} />
                            <span></span>
                        </div>
                        <p>Other</p>
                    </label>
                </div>
            </div>
        );
    }
}
