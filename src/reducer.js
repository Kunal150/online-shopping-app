// reducer pushes the information into the data layer we created i.e stateProvider

export const initialState = {
    basket: [],
    user:null 
};

export const getBasketTotal = (basket) =>
basket?.reduce((amount,item) => item.price + amount, 0);

// action is whether u are trying to add or remove in basket
const reducer  = (state, action) => {
    console.log(action);
    switch(action.type)
    {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        
            default:
                return state;
                case "REMOVE_FROM_BASKET":
                    const index = state.basket.findIndex(
                       (basketItem) =>basketItem.id===action.id
                    );
                    let newBasket = [...state.basket];
                    
                    if (index >= 0) {
                        newBasket.splice(index, 1);

                    } else{
                        console.warn(
                           `Cant remove product (id: ${action.id}) as its not in basket!`

                        )

                    }
                    return {
                        ...state,
                        basket: newBasket
                    }
                    case "SET_USER":
                       return {
                           ...state,
                           user: action.user
                       }
    }
};

export default reducer;
