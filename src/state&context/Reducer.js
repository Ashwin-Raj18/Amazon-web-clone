export const initialState = {
	cart : [],
	user : null
};

export const getCartTotal = (cart) =>
	cart.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
	//action goes into dispach inside component always
	console.log(state);
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user : action.user
			};

		case 'ADD_TO_CART':
			return {
				...state,
				cart : [ ...state.cart, action.item ]
			};
			break;
		case 'REMOVE_FROM_CART':
			let newCart = [ ...state.cart ];
			const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);
			if (index >= 0) {
				newCart.splice(index, 1);
			} else {
			}
			return {
				...state,
				cart : newCart
			};
			break;
		default:
			return state;
	}
};

export default reducer;
