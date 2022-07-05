import { Box, Container, Paper, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productContext } from '../../contexts/productContext';
import Loader from '../Loader/Loader';

const ProductDetails = () => {
    const { getOneProduct, oneProduct } = useContext(productContext)
    const { id } = useParams()
    useEffect(()=> {
        getOneProduct(id)
    },[])
    return (
        <Container>
            {oneProduct ? 
            <Box sx={{marginTop:"40px"}} display={"flex"} flexDirection={"column"} alignItems={"center"} paddingTop={"50px"} textAlign={"center"}>
                <Paper style={{width: "40%"}} elevation={3}>
                    <img src={oneProduct.image} width="40%" alt='product'/>
                </Paper>
                <Typography sx={{fontSize:"30px", fontWeight:'bold', marginTop:"20px"}}>{oneProduct.title}</Typography>
                <Typography sx={{maxWidth: "400px", marginTop:"10px"}}>{oneProduct.description}</Typography>
                <Typography sx={{fontSize:"30px", marginTop:"10px", marginBottom:"60px"}}>{oneProduct.price}c.</Typography>
            </Box> : <Loader />}
        </Container>
    );
};

export default ProductDetails;