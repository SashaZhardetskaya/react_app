import React, { Component } from 'react';
import { connect } from 'react-redux';

import Account from './Account';

import './AccountGrid.css';


class AccountsList extends Component {


    render() {
        // const {
        //     // accounts,
        //     onAccountDelete
        // } = this.props;

        return (
            <div
                className='grid'
            >
                {

                    this.props.accounts.map(account =>
                        <Account
                            key={account.date}
                            id={account.date}
                            // onDelete={onAccountDelete}
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


// export default connect(
//     store => ({
//         accounts: store.accounts
//     }),
// )(AccountsList);


export default connect(
    store => {
        console.log(store);
        return {accounts: store.accounts};
    }
)(AccountsList);