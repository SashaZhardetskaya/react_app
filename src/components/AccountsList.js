import React, { Component } from 'react';

import Account from './Account';

import './AccountGrid.css';


export default class AccountsList extends Component {
    render() {
        const {
            accounts,
            onAccountDelete
        } = this.props;

        return (
            <div
                className='grid'
            >
                {
                    accounts.map(account =>
                        <Account
                            key={account.date}
                            id={account.date}
                            onDelete={onAccountDelete}
                            amount={account.amount}
                            category={account.category}
                            date={account.date}
                        >
                        </Account>
                    )
                }
            </div>
        );
    }
}
