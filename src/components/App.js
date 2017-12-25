import React, { Component } from 'react';

import AccountEditor from './AccountEditor';
import AccountsList from './AccountsList';
import AccountFilter from './Filters/AccountFilter';
import AccountsSorting from './Filters/AccountsSorting';
import Piechart from './Charts/Piechart';
import PiechartSumm from './Charts/PiechartSumm';


import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
             accounts: [],
             chartsIsOpen: false
        };

        this.handleAccountDelete = this.handleAccountDelete.bind(this);
        this.handleAccountAdd = this.handleAccountAdd.bind(this);
        this.applyFilters = this.applyFilters.bind(this);
    }


    componentDidMount() {
        const savedAccounts = JSON.parse(localStorage.getItem('accounts'));

        if (savedAccounts) {
            this.setState({ accounts: savedAccounts });
        }
    }

    componentDidUpdate() {
        const accounts = JSON.stringify(this.state.accounts);
        localStorage.setItem('accounts', accounts);
    }

    handleAccountDelete(accountId) {
        this.setState({
            accounts: this.state.accounts.filter(accounts => accounts.id !== accountId),
        });
        if (this.state.accountsToShow) {
            this.setState({
                accountsToShow: this.state.accountsToShow.filter(accounts => accounts.id !== accountId),
            });
        }
        console.log(this.state.accounts)
    }

    handleAccountAdd(newAccount) {
        this.setState({
            accounts: [newAccount, ...this.state.accounts],
        });
        if (this.state.accountsToShow) {
            this.setState({
                accountsToShow: [newAccount, ...this.state.accountsToShow],
            });
        }
    }


    applyFilters(accounts, sorting, filterByAmount) {
        let accountsToShow = Array.from(accounts);
        if (filterByAmount === 'incomes') {
            accountsToShow = accountsToShow.filter(x => x.amount > 0);
        }
        if (filterByAmount === 'expenses') {
            accountsToShow = accountsToShow.filter(x => x.amount < 0);
        }
        if (sorting) {
            accountsToShow.sort((a,b) => (a[sorting.name] - b[sorting.name]) * (sorting.status === 'ascending' ? 1 : -1));
        }
        return accountsToShow;
    };

    filterAccountsHandler = (selectedFilter) => {
        this.setState({
            accountsToShow: this.applyFilters(this.state.accounts, null, selectedFilter)
        });
    };

    sortAccountsHandler = (selectedSortName, selectedSortStatus) => {
        if (this.state.accountsToShow) {
        this.setState({
            accountsToShow: this.applyFilters(this.state.accountsToShow, {name: selectedSortName, status: selectedSortStatus}, null)
        });
        } else {
            this.setState({
                accountsToShow: this.applyFilters(this.state.accounts, {name: selectedSortName, status: selectedSortStatus}, null)
            });
        }
    };

    handleChartsOpen = (e) => {
        this.setState({
            chartsIsOpen: !this.state.chartsIsOpen
        });
    };



    render() {
        return (
            <div className="app">
                <h2 className="app__header">Money Manager</h2>

                <div className="editor__container">

                    <AccountEditor onAccountAdd={this.handleAccountAdd} />

                    <div className="filters__container">

                        <AccountFilter onFilterChange={this.filterAccountsHandler}/>

                        <AccountsSorting onSortingChange={this.sortAccountsHandler}/>

                    </div>

                    <div className="charts__wrapper">

                        <button className="charts__show-button" onClick={this.handleChartsOpen}>
                            {this.state.chartsIsOpen ? 'Hide' : 'Show'} statistic
                        </button>

                        {this.state.chartsIsOpen && this.state.accounts.length > 0 && this.state.accounts.filter(x => x.amount > 0).length > 0 &&
                        <div className="charts__container" >
                            <Piechart data={this.state.accounts.filter(x => x.amount > 0)} />
                            {this.state.accounts.filter(x => x.amount < 0).length > 0 &&
                            <PiechartSumm data={this.state.accounts}/>
                            }
                        </div>
                        }
                    </div>
                </div>

                <AccountsList
                    accounts={this.state.accountsToShow ? this.state.accountsToShow : this.state.accounts}
                    onAccountDelete={this.handleAccountDelete}
                />
            </div>
        );
    }
}
