import { Box, Card, Container, IconButton, Paper, Step, StepLabel, Stepper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { cartContext } from '../../contexts/cartContext';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";


const OrderFormThree = () => {
    const steps = ['Ваши данные', 'Оплата', 'Заказ сфомирован'];
    
      const navigate = useNavigate()
    const { getCart, cart, changeProductCount, deleteFromCart } =
        useContext(cartContext);
        useEffect(() => {
        getCart();
        }, []);
    return (
        <Container>
            <Box sx={{marginTop:"70px", marginBottom:"70px"}}>
            <Stepper activeStep={1} alternativeLabel>
                {steps.map((label) => (
                <Step key={label}>
                <StepLabel>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>
            </Box>

            <Box sx={{display:"flex", justifyContent:"center"}}>
                <Card sx={{backgroundColor:"#dcdcdc", width:"700px"}}>
                        <div style={{marginTop:"70px", marginLeft:"60px"}}>
                            <Typography sx={{fontSize:"25px", fontWeight:"bold"}}>SAMSUNG</Typography>
                            <Typography sx={{fontSize:"15px", color:"#808080"}}>05/07/2022</Typography>
                        </div>

                    <TableContainer sx={{width: "680px", marginLeft:"10px", marginRight:"10px", marginTop:"50px", marginBottom:"50px", backgroundColor:"#e5e4e2"}} component={Paper}>
                    <Table sx={{ width: 680 }} aria-label="caption table">
                        <TableHead sx={{backgroundColor:"#dcdcdc"}}>
                        <TableRow>
                            <TableCell>Продукт</TableCell>
                            <TableCell align="right">Название</TableCell>
                            <TableCell align="right">Количество</TableCell>
                            <TableCell align="right">Цена</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody sx={{backgroundColor:"#dcdcdc"}}>
                            {cart &&
                            cart?.products.map(row => (
                                <TableRow
                                key={row.item.id}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                <TableCell component="th" scope="row">{row.item.image}</TableCell>
                                <TableCell component="th" scope="row">{row.item.brand}</TableCell>
                                <TableCell align="right">
                                    <IconButton
                                    onClick={() =>
                                        changeProductCount(row.count - 1, row.item.id)
                                    }
                                    aria-label="delete">
                                    <RemoveIcon />
                                    </IconButton>
                                    {row.count}
                                    <IconButton
                                    onClick={() =>
                                        changeProductCount(row.count + 1, row.item.id)
                                    }
                                    aria-label="delete">
                                    <AddIcon />
                                    </IconButton>
                                </TableCell>
                                <TableCell align="right">{row.item.price}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    </TableContainer>

                    <hr 
                        style={{margin: "20px 0",
                        padding: "0",
                        height: "0",
                        border: "none",
                        borderTop: "2px dashed #000",
                        marginLeft:"15px",
                        marginRight:"15px"
                        }}/>

                    <Typography sx={{fontWeight:"bold", fontSize:"25px", textAlign:"end", marginRight:"40px", marginTop:"30px", marginBottom:"60px"}} variant="h4">
                    {cart && cart?.totalPrice}с.
                    </Typography>
                </Card>
            </Box>
        </Container>
    );
};

export default OrderFormThree;