// import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AddProductForm from './components/AddProductForm/AddProductForm';
import Cart from './components/Cart/Cart';
// import AddComment from './components/Comments/AddComment';
import EditProductForm from './components/EditProductForm/EditProductForm';
import FavouritesList from './components/FavouritesList/FavouritesList';
import HomePage from './components/HomePage/HomePage';
import LoginForm from './components/LoginForm/LoginForm';
import OrderFormOne from './components/OrderForm/OrderFormOne';
import OrderFormThree from './components/OrderForm/OrderFormThree';
import OrderFormTwo from './components/OrderForm/OrderFormTwo';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ProductsList from './components/ProductList/ProductList';
import RegisterForm from './components/RegisterForm/RegisterForm';
// import { authContext } from './contexts/authContext';

const Routing = () => {
  // const { isAdmin } = useContext(authContext);
    return (
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/add" element={<AddProductForm />}/>
        <Route path="/favourites" element={<FavouritesList />}/>
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/edit/:id" element={<EditProductForm />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/order1" element={<OrderFormOne />} />
        <Route path="/order2" element={<OrderFormTwo />} />
        <Route path="/order3" element={<OrderFormThree />} />
        {/* <Route path="/addcomment" element={<AddComment/>} /> */}

      </Routes>
    );
};

export default Routing;