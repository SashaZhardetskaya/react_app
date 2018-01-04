import { combineReducers } from 'redux';

function account(state, action) {
    switch (action.type) {
        case 'ADD_ACCOUNT': {
            return {
                amount: action.amount,
                date: action.date,
                category: action.category,
                id: action.id,
                color: action.color,
            };
        }
        default: {
            return state;
        }
    }
};

function accounts (state = [], action) {
    switch (action.type) {
        case 'ADD_ACCOUNT': {
            return [
                ...state,
                account(undefined, action)
            ];
        }
        default: {
            return state;
        }
    }
};

export default combineReducers({
    accounts
});