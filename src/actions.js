
// export const addAccount = (amount, category, color) => {
export const addAccount = (accountsState) => {
    return {
        type: 'ADD_ACCOUNT',
        id: Date.now(),
        date: Date.now(),
        amount: accountsState.amount,
        category: accountsState.category,
        color: accountsState.color
    };
};
