import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { productContext } from "../../contexts/productContext";
import { useNavigate } from "react-router-dom";

// title, description, price, image

const AddProductForm = () => {
  const { createProduct } = useContext(productContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  function handleValues() {
    let newProduct = {
      title,
      description,
      price,
      //   price: +price,
      image,
    };
    if (!title.trim() || !description.trim() || !price || !image.trim()) {
      alert("заполните поля!");
      return;
    }
    createProduct(newProduct);
    navigate("/products");
  }
  //   console.log(typeof price);
  return (
    <Container sx={{display:"flex", justifyContent:'center'}} maxWidth="sm">
      <img style={{width:"450px", marginTop:"60px"}} src="https://images.samsung.com/is/image/samsung/assets/uz_ru/smartphones/galaxy-z-flip3-5g/images/galaxy-z-flip3-5g_highlights_accessories.jpg?$ORIGIN_JPG$" alt="" />
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        marginTop={"50px"}
        marginLeft={"100px"}>
        <Typography sx={{fontSize:"25px", fontWeight:"bold"}} component="h2">
          Добавить новый продукт
        </Typography>
        <TextField
          value={title}
          onChange={e => setTitle(e.target.value)}
          label="Название"
          variant="standard"
          style={{ marginTop: "5px", width:"400px" }}
        />
        <TextField
          value={description}
          onChange={e => setDescription(e.target.value)}
          label="GB"
          variant="standard"
          style={{ marginTop: "5px", width:"400px" }}
        />
        <TextField
          // type="number"
          value={price}
          onChange={e => setPrice(+e.target.value)}
          label="Цена"
          variant="standard"
          style={{ marginTop: "5px", width:"400px" }}
        />
        <TextField
          value={image}
          onChange={e => setImage(e.target.value)}
          id="standard-basic"
          label="Картинка"
          variant="standard"
          style={{ marginTop: "5px", width:"400px", marginBottom:"20px"}}
        />
        <Button sx={{ borderRadius:"30px", backgroundColor:"black", width:"400px"}}
          onClick={handleValues}
          style={{ margin: "10px" }}
          variant="contained"
          >
          Добавить продукт
        </Button>
      </Box>
    </Container>
  );
};

export default AddProductForm;
