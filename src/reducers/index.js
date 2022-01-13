const initialState = {
  list: [
    {
      id: 1,
      title: "t-shirt Marvel",
      img: "1.jpg",
      price: 200,
    },
    {
      id: 2,
      title: "t-shirt Champ",
      img: "2.jpg",
      price: 150,
    },
    {
      id: 3,
      title: "t-shirt black",
      img: "3.jpg",
      price: 300,
    },
    {
      id: 4,
      title: "t-shirt Groot",
      img: "4.jpg",
      price: 180,
    },
    {
      id: 5,
      title: "t-shirt Mike",
      img: "5.jpg",
      price: 250,
    },
    {
      id: 6,
      title: "t-shirt blue",
      img: "6.jpg",
      price: 100,
    },
    {
      id: 7,
      title: "t-shirt HB",
      img: "7.jpg",
      price: 160,
    },
    {
      id: 8,
      title: "t-shirt 1978",
      img: "8.jpg",
      price: 178,
    },
    {
      id: 9,
      title: "t-shirt toyota",
      img: "9.jpg",
      price: 150,
    },
  ],
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_LOADED":
      return {
        ...state,
        list: action.payload,
      };
    case "ADJUST_QTY":
      const index = state.cart.findIndex((el) => el.id === action.id);
      const item = state.list.find((el) => el.id === action.id);
      if (index === -1) {
        return {
          ...state,
          cart: [...state.cart, { ...item, qty: 1 }],
        };
      }

      const before = state.cart.slice(0, index);
      const after = state.cart.slice(index + 1);
      const itemCart = state.cart[index];

      //change qty on existed item in cart
      const newItem = {
        ...item,
        qty: itemCart.qty + action.qty,
      };


      if (!newItem.qty) {
        return {
          ...state,
          cart: [...before, ...after],
        };
      }

      return {
        ...state,
        cart: [...before, newItem, ...after],
      };

      break;
    default:
      return state;
  }
};

export default reducer;
