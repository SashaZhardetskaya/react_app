import React, { Component } from 'react';

import './Account.css';

export default class Account extends Component {
    constructor() {
        super();

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        const { id, onDelete } = this.props;

        if (onDelete) {
            onDelete(id);
        }
    }

    render() {
        const {
            amount,
            category,
            date,
        } = this.props;
        const formatedDate = {
            year: new Date(date).getFullYear(),
            month: new Date(date).getMonth() + 1,
            day: new Date(date).getDate(),
            hour: new Date(date).getHours(),
            minute: new Date(date).getMinutes(),
        };

        return (
            <div className="account">
                <button className="account__delete-icon" onClick={this.handleDelete}> × </button>
                <div className="category__icon">
                    <span className={category}></span>
                </div>
                <div className="account-description">
                    <div className="account-description__col">
                        <div className="account-description__category">{category}</div>
                        <div className="account-description__date">
                            {`${formatedDate.day}.${formatedDate.month}.${formatedDate.year} at ${formatedDate.hour}:${formatedDate.minute}`}
                        </div>
                    </div>
                    <div className={amount > 0 ? "positive-amount" : "negative-amount"}>{amount}
                    </div>
                </div>
            </div>
        );
    }
}
