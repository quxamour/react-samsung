import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AuthContextProvider from './contexts/authContext';
import CartContextProvider from './contexts/cartContext';
// import CommentsContextProvider from './contexts/commentsContext';
import FavouritesContextProvider from './contexts/favouritesContext';
import ProductContextProvider from './contexts/productContext';
import Routing from './Routing';

const App = () => {
  return (
    <AuthContextProvider>
      <ProductContextProvider>
        {/* <CommentsContextProvider> */}
          <CartContextProvider>
            <FavouritesContextProvider>
              <BrowserRouter>
                <Header />
                <Routing />
                <Footer />
              </BrowserRouter>
            </FavouritesContextProvider>
          </CartContextProvider>
        {/* </CommentsContextProvider> */}
      </ProductContextProvider>
    </AuthContextProvider>
    
  );
};

export default App;