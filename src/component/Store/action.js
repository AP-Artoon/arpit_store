import { createStore } from 'redux'
import { v4 as uuidv4 } from 'uuid';


const reducerfn = (state = {
    value: localStorage.getItem('current-user-data') ? JSON.parse(localStorage.getItem('current-user-data')) : [],
    placedOrder: localStorage.getItem('PLACE-ORDER') ? JSON.parse(localStorage.getItem('PLACE-ORDER')) : []
}, action) => {

    switch (action.type) {

        case 'ADDTOCART': {
            const id = action.payload

            const local_store_data = JSON.parse(localStorage.getItem('store-data'))
            let users_data = JSON.parse(localStorage.getItem('userdata'));
            let current_user_data = JSON.parse(localStorage.getItem('current-user-data'));
            const uid = current_user_data.id;

            const local_cart_data = current_user_data.cart
            let nextCart;
            if (local_cart_data) {
                nextCart = current_user_data.cart
            } else {
                nextCart = []
            }


            let temp = [...local_store_data]
            let index = temp.findIndex(data => (data.id === id))

            let tempvalue = [...users_data]
            let index1 = tempvalue.findIndex(data => (data.id === uid))



            // console.log(index1);    
            nextCart.push(temp[index])

            current_user_data = { ...current_user_data, cart: nextCart }

            users_data[index1] = current_user_data
            // let cartquantity = cart.quantity



            localStorage.setItem('current-user-data', JSON.stringify(current_user_data))
            localStorage.setItem('userdata', JSON.stringify(users_data))
            return { ...state, value: current_user_data }
        }

        case 'DELETE-FROM-CART': {

            const id = action.payload

            const local_cart_data = localStorage.getItem('current-user-data')
            const deleteArray = JSON.parse(local_cart_data);
            // console.log(id, deleteArray);

            let temp1 = [...deleteArray.cart]
            let index = temp1.findIndex(data => (data.id === id))
            
            temp1.splice(index, 1)
            console.log(temp1);

            let newvalue = {
                ...deleteArray,
                cart: temp1
            }

            console.log(newvalue);

            // console.log(temp1);
            localStorage.setItem('current-user-data', JSON.stringify(newvalue));
            // console.log(state);
            // // console.log(id,'redux delete id');
            return { ...state, value: newvalue }
        }

        case 'PLUS-COUNT-BTN-CART': {
            const id = action.payload

            let current_user_data = JSON.parse(localStorage.getItem('current-user-data'))

            let local_cart_data = [...state.value.cart]


            let index = local_cart_data.findIndex(data => (data.id === id))

            let temp = (local_cart_data[index]);

            // console.log(temp);

            let updatecount = temp.quantity + 1;
            temp.quantity = updatecount

            let updateprice = updatecount * temp.price;

            temp = {
                ...temp,
                updateprice: updateprice
            }


            local_cart_data[index] = temp

            current_user_data = {
                ...current_user_data,
                cart: local_cart_data
            }

            localStorage.setItem('current-user-data', JSON.stringify(current_user_data));
            return { ...state, value: current_user_data, }
        }

        case 'MINUS-COUNT-BTN-CART': {
            const id = action.payload

            let current_user_data = JSON.parse(localStorage.getItem('current-user-data'))

            let local_cart_data = [...state.value.cart]

            let index = local_cart_data.findIndex(data => (data.id === id))

            let temp = (local_cart_data[index]);

            let updatecount = temp.quantity - 1;
            temp.quantity = updatecount
            let updateprice = temp.updateprice - temp.price;
            temp = {
                ...temp,
                updateprice: updateprice
            }

            local_cart_data[index] = temp

            current_user_data = {
                ...current_user_data,
                cart: local_cart_data
            }
            localStorage.setItem('cart', JSON.stringify(current_user_data));


            return { ...state, value: current_user_data }
        }

        case 'PLACE-ORDER': {
            let cart_value = state.value.cart

            let placedorder = state.placedOrder

            placedorder.push({
                id: uuidv4(),
                cart: cart_value
            })

            let current_user_data = JSON.parse(localStorage.getItem('current-user-data'));

            let current_user_cart = {
                ...current_user_data,
                cart: []
            }

            localStorage.setItem('current-user-data', JSON.stringify(current_user_cart))
            localStorage.setItem('PLACE-ORDER', JSON.stringify(placedorder))
            console.log("PLACE-ORDER", placedorder);
            return { ...state, placedOrder: placedorder, value: current_user_cart }
        }

        case 'ORDER-PREVIEW': {
            const id = action.payload



            console.log(id);
            return state
        }


        default:
            return state
    }
}
const store = createStore(reducerfn);
export default store;

