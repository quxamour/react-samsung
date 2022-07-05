import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";
import { productContext } from "../../contexts/productContext";
import { cartContext } from "../../contexts/cartContext";
import { authContext } from "../../contexts/authContext";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useCart } from "react-use-cart";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const { deleteProduct } = useContext(productContext);
  const { isAdmin } = useContext(authContext);
  const { addProductToCart, checkProductInCart } = useContext(cartContext);
  const [checkProduct, setCheckProduct] = useState(checkProductInCart(item));
  const [value, setValue] = React.useState(2);
  const { addItem } = useCart();
  const { oneProduct } = useContext(productContext);

  const [count, setCount] = React.useState(1);
  // const [invisible, setInvisible] = React.useState(false);

  // const handleBadgeVisibility = () => {
  //   setInvisible(!invisible);
  // };


  return (
    <Card sx={{ width: "500px", margin: "15px", display:"flex" }}>
      <CardMedia sx={{width:"150px", marginTop:"20px"}}
        component="img"
        alt="картинка"
        height="150"
       
        image={item.image}
      />
      <CardContent sx={{display:"flex", flexDirection:"column"}}>
        <Typography sx={{fontSize:"20px", fontWeight:"bold"}} gutterBottom  component="div">
          {item.title}
        </Typography>

        <IconButton sx={{position:"absolute", marginLeft:"270px", color:"red"}}>
          <FavoriteIcon />
        </IconButton>

        <Typography sx={{fontSize:"10px", marginTop:"-5px"}} variant="body2" color="text.secondary">
          {item.description.length > 20
            ? `${item.description.slice(0, 20)}...`
            : item.description}
        </Typography>
        <Typography sx={{fontSize:"12px", fontWeight:"bold", marginTop:"5px"}} gutterBottom variant="h5" component="div">
          {item.price}c.
        </Typography>

      <Box sx={{'& > legend': { mt: 2 }, marginTop:"5px"}}>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>

      <CardActions sx={{marginLeft:"-29px"}}>
        {isAdmin ? (
          <>
            <Button size="small" onClick={() => deleteProduct(item.id)}>
              <DeleteIcon />
            </Button>
            <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
              <EditIcon />
            </Button>
          </>
        ) : null}

        <Button
          onClick={() => {
            addProductToCart(item);
            setCheckProduct(checkProductInCart(item));
            setCount(count + 1);
            addItem(oneProduct)
          }} size="small">
          <AddShoppingCartIcon
           color={checkProduct ? "secondary" : "primary"} />
        </Button>

        <Button
          onClick={() => {
            addProductToCart(item);
            setCheckProduct(checkProductInCart(item));
          }}
          size="small">
          <BookmarkBorderIcon color={checkProduct ? "secondary" : "primary"} />
        </Button>
        
        <Button size="small" onClick={() => navigate(`/products/${item.id}`)}>
          <MoreHorizIcon />
        </Button>
      </CardActions>
            </CardContent>
    </Card>
  );
};

export default ProductCard;
