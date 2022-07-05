import React, { useContext, useEffect } from "react";
import { cartContext } from "../../contexts/cartContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Container, IconButton, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import EventNoteIcon from '@mui/icons-material/EventNote';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useNavigate } from "react-router-dom";

export default function Cart(item) {
  const navigate = useNavigate()
  const { getCart, cart, changeProductCount, deleteFromCart } =
    useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);
  
  return (
    <Container style={{maxWidth:"1400px", display:'flex', marginLeft:"60px", marginTop:"40px", marginBottom:"50px"}}>
      <TableContainer component={Paper} sx={{maxWidth:"550px "}}>
        <Table sx={{ minWidth: 450, width:"550px"}} aria-label="simple table">
          <TableHead sx={{backgroundColor:"#555555"}}>
            <TableRow>
              <TableCell sx={{fontWeight:"bold", color:"white"}}>Продукт</TableCell>
              <TableCell sx={{fontWeight:"bold", color:"white"}} align="right">Цена</TableCell>
              <TableCell sx={{fontWeight:"bold", color:"white"}} align="right">Количество</TableCell>
              <TableCell sx={{fontWeight:"bold", color:"white"}} align="right">Общая цена</TableCell>
              <TableCell sx={{fontWeight:"bold", color:"white"}} align="right">Удалить</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{backgroundColor:"#f2f3f4"}}>
            {cart &&
              cart?.products.map(row => (
                <TableRow
                  key={row.item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.item.title}
                  </TableCell>
                  <TableCell align="right">{row.item.price}</TableCell>
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

                  <TableCell align="right">{row.subPrice}</TableCell>

                  <TableCell align="right">
                    <IconButton
                      onClick={() => deleteFromCart(row.item.id)}
                      aria-label="delete">
                      <DeleteOutlinedIcon />
                    </IconButton>
                  </TableCell>

                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    

        <Container style={{backgroundColor:"#E0E0E0", borderRadius:'25px', maxWidth:"420px", height:'450px'}}>
          <Box sx={{margin:"10px"}}>
            <Typography sx={{fontWeight:"bold", fontSize:"23px", marginTop:"30px", textAlign:"center"}}>Доступные способы оплаты:</Typography>
            <ul style={{fontSize:"14px", marginTop:"15px"}}>
              <li>Рассрочка - ограничения по сумме смотрите <a href="https://www.samsung.com/kz_ru/shop-faq/payment-methods/what-payment-methods-are-offered-on-your-site/">здесь</a></li>
              <li>Оплата картой при получении - доступно только <a href="https://www.samsung.com/kz_ru/shop-faq/payment-methods/can-i-pay-for-my-order-with-cash/">в этих городах</a></li>
              <li><strike>checkout.kz-cashOnDeliveryPaymentMode.name</strike></li>
              <li>Оплата картой на сайте</li>
            </ul>
            <Typography sx={{fontWeight:"bold", fontSize:"25px"}} variant="h4">
              Общая стоимость: {cart && cart?.totalPrice}с.
            </Typography>

            <hr style={{
              margin:"20px 0",
              padding: "0",
              height: "0",
              border: "none",
              borderTop: "1px solid #333",
            }}></hr>

            <Typography sx={{fontSize:"13px", marginTop:"15px"}}><LocalShippingIcon/> Бесплатная доставка до двери </Typography>
            <Typography sx={{fontSize:"13px", marginTop:"8px"}}><EventNoteIcon/> Есть вопросы? Звоните 8 800 080 0101 c 8:00-20:00</Typography>

            <button 
              onClick={()=> navigate(`/order1`)}
              style={{width:"350px", 
              height:"40px", 
              fontWeight:"bold", 
              fontSize:"12px", 
              borderRadius:"20px", 
              display:"flex", 
              justifyContent:"center", 
              alignItems:"center",
              backgroundColor:"black",
              color:"#F0FFF0",
              marginTop:"20px"}} 
              type="button" 
              class="btn btn-outline-dark">
              Оформить заказ
            </button>
          </Box>

        </Container>

    </Container>


  );
}
