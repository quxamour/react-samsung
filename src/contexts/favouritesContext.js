import React, { useReducer } from "react";

export const favouritesContext = React.createContext();

const INIT_STATE = {
  cart: null,
  count: 0,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_CART":
      return {
        ...state,
        cart: action.payload,
        count: action.payload.products.length,
      };
    default:
      return state;
  }
}

const FavouritesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function addProductToFavourites(product) {
    let favourites = JSON.parse(localStorage.getItem("favourites"));
    if (!favourites) {
        favourites = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: product.price,
    };
    let isProductInFavourites = favourites.products.some(
      item => item.item.id === product.id
    );
    // console.log(isProductInCart);
    if (isProductInFavourites) {
        favourites.products = favourites.products.filter(item => item.item.id !== product.id);
    } else {
        favourites.products.push(newProduct);
    }
    localStorage.setItem("cart", JSON.stringify(favourites));
    // console.log(cart);
    // console.log(product);
    getFavourites();
  }

  function checkProductInFavourites(product) {
    let favourites = JSON.parse(localStorage.getItem("favourites"));
    if (!favourites) {
        favourites = {
        products: [],
        totalPrice: 0,
      };
    }
    let isProductInFavourites = favourites.products.some(
      item => item.item.id === product.id
    );
    return isProductInFavourites;
  }
  function getFavourites() {
    let favourites = JSON.parse(localStorage.getItem("favourites"));
    if (!favourites) {
        favourites = {
        products: [],
        totalPrice: 0,
      };
    }
    favourites.totalPrice = favourites.products.reduce((prev, curr) => {
      return prev + curr.subPrice;
    }, 0);

    // 0 + 1000 = 1000
    // 1000 + 2000 = 3000

    dispatch({
      type: "GET_CART",
      payload: favourites,
    });
  }
  function changeProductCount(count, id) {
    if (count <= 0) {
      count = 1;
    }
    let favourites = JSON.parse(localStorage.getItem("favourites"));
    favourites.products = favourites.products.map(item => {
      if (item.item.id === id) {
        item.count = count;
        item.subPrice = item.count * item.item.price;
      }
      return item;
    });
    localStorage.setItem("favourites", JSON.stringify(favourites));
    getFavourites();
  }
  function deleteFromFavourites(id) {
    let favourites = JSON.parse(localStorage.getItem("favourites"));
    favourites.products = favourites.products.filter(item => item.item.id !== id);
    localStorage.setItem("favourites", JSON.stringify(favourites));
    getFavourites();
  }
  return (
    <favouritesContext.Provider
      value={{
        favourites: state.favourites,
        count: state.count,
        addProductToFavourites,
        checkProductInFavourites,
        getFavourites,
        changeProductCount,
        deleteFromFavourites,
      }}>
      {children}
    </favouritesContext.Provider>
  );
};
export default FavouritesContextProvider;
