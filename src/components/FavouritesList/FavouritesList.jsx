import React, { useContext, useEffect } from "react";
import { cartContext } from "../../contexts/cartContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Card, CardMedia, Container, IconButton, Typography } from "@mui/material";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function FavouritesList(item) {
  const { getCart, cart, deleteFromCart } =
    useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);

  
  return (
    <Container style={{maxWidth:"1400px", display:'flex', flexDirection:"column", justifyContent:"center", alignItems:"center", marginTop:"40px", marginBottom:"50px"}}>
      <TableContainer component={Paper} sx={{maxWidth:"850px "}}>
        <Table sx={{ minWidth: 450, width:"850px"}} aria-label="simple table">
          <TableHead sx={{backgroundColor:"#555555"}}>
            <TableRow>
              <TableCell sx={{fontWeight:"bold",color:"white"}}>Продукт</TableCell>
              <TableCell sx={{fontWeight:"bold",color:"white"}} align="right">Название</TableCell>
              <TableCell sx={{fontWeight:"bold",color:"white"}} align="right">GB</TableCell>
              <TableCell sx={{fontWeight:"bold",color:"white"}} align="right">Цена</TableCell>
              <TableCell sx={{fontWeight:"bold",color:"white"}} align="right">Удалить</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{backgroundColor:"#f2f3f4"}}>
            {cart &&
              cart?.products.map(row => (
                <TableRow
                  key={row.item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                  <CardMedia sx={{width:"70px"}}
                    component="img"
                    alt="green iguana"
                    height="70"
                    image={row.item.image}
                  />
                  </TableCell>
                  <TableCell align="right">{row.item.title}</TableCell>
                  <TableCell align="right">{row.item.description}</TableCell>
                  <TableCell align="right">{row.item.price}</TableCell>

                  <TableCell sx={{display:"flex", height:"110px"}} align="right">
                    <IconButton
                      onClick={() => deleteFromCart(row.item.id)}
                      aria-label="delete">
                      <DeleteOutlinedIcon />
                    </IconButton>

                    <IconButton>
                      <AddShoppingCartIcon/>
                    </IconButton>

                  </TableCell>

                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{display:'flex', flexDirection:"column", marginTop:"90px"}}>
        <Typography sx={{textAlign:"center", fontWeight:"bold", fontSize:"30px"}}>Вам может пригодиться</Typography>

        <Box sx={{display:"flex", justifyContent:"center", width:"800px", marginTop:"40px"}}>
          <Card sx={{width:"280px", height:"350px"}}>
            <Typography sx={{marginTop:"35px", fontSize:"17px", fontWeight:"bold", textAlign:'center'}}>Galaxy Buds Live</Typography>
            <img style={{width:"200px", marginTop:"20px", display:'flex', justifyContent:"center"}} src="https://images.samsung.com/is/image/samsung/kz_ru/galaxy-note20/gallery/kz-ru-galaxy-buds-live-r180-sm-r180nzkaser-frontmysticblack-278336058?$PD_SHOP_MAIN$" alt="" />
            <Typography sx={{fontSize:"20px", fontWeight:"bold", textAlign:"center", marginTop:"7px"}}>32 599 c.</Typography>
            <button 
              style={{width:"150px", 
              height:"40px", 
              fontWeight:"bold", 
              fontSize:"12px", 
              borderRadius:"20px", 
              display:"flex", 
              justifyContent:"center", 
              alignItems:"center",
              marginTop:"23px", marginLeft:'33px'}} 
              type="button" 
              class="btn btn-outline-dark">
              Добавить в корзину
            </button>
          </Card>
          <Card sx={{width:"280px", height:"350px", marginLeft:"70px"}}>
            <Typography sx={{marginTop:"35px",fontSize:"17px", fontWeight:"bold", textAlign:'center'}}>Galaxy Buds Live</Typography>
            <img style={{width:"200px", marginTop:"20px", display:'flex', justifyContent:"center"}} src="https://images.samsung.com/is/image/samsung/kz_ru/galaxy-note20/gallery/kz-ru-galaxy-buds-live-r180-sm-r180nznaser-frontmysticbronze-278336080?$PD_SHOP_MAIN$" alt="" />
            <Typography sx={{fontSize:"20px", fontWeight:"bold", textAlign:"center", marginTop:"7px"}}>32 599 c.</Typography>
            <button 
              style={{width:"150px", 
              height:"40px", 
              fontWeight:"bold", 
              fontSize:"12px", 
              borderRadius:"20px", 
              display:"flex", 
              justifyContent:"center", 
              alignItems:"center",
              marginTop:"23px", marginLeft:'33px'}} 
              type="button" 
              class="btn btn-outline-dark">
              Добавить в корзину
            </button>
          </Card>
          <Card sx={{width:"280px", height:"350px", marginLeft:"70px"}}>
            <Typography sx={{marginTop:"35px",fontSize:"17px", fontWeight:"bold", textAlign:'center'}}>Galaxy Buds Live</Typography>
            <img style={{width:"200px", marginTop:"20px", display:'flex', justifyContent:"center"}} src="https://images.samsung.com/is/image/samsung/kz_ru/galaxy-note20/gallery/kz-ru-galaxy-buds-live-r180-sm-r180nzwaser-frontmysticwhite-278336085?$PD_SHOP_MAIN$" alt="" />
            <Typography sx={{fontSize:"20px", fontWeight:"bold", textAlign:"center", marginTop:"7px"}}>32 599 c.</Typography>
            <button 
              style={{width:"150px", 
              height:"40px", 
              fontWeight:"bold", 
              fontSize:"12px", 
              borderRadius:"20px", 
              display:"flex", 
              justifyContent:"center", 
              alignItems:"center",
              marginTop:"23px", marginLeft:'33px'}} 
              type="button" 
              class="btn btn-outline-dark">
              Добавить в корзину
            </button>
          </Card>
        </Box>
      </Box>
    

    </Container>


  );
}
