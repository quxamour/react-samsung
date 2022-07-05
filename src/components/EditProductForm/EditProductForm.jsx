import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { productContext } from "../../contexts/productContext";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

// title, description, price, image

const EditProductForm = () => {
  const { getOneProduct, oneProduct, updateProduct } =
    useContext(productContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  function handleValues() {
    let editedProduct = {
      title,
      description,
      price,
      image,
    };
    if (!title.trim() || !description.trim() || !price || !image.trim()) {
      alert("заполните поля!");
      return;
    }
    updateProduct(id, editedProduct);
    navigate("/products");
  }
  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setPrice(oneProduct.price);
      setImage(oneProduct.image);
      setDescription(oneProduct.description);
    }
  }, [oneProduct]);
  return oneProduct ? (
    <Container sx={{display:"flex", justifyContent:'center'}} maxWidth="sm">
      <img style={{width:"450px", marginTop:"60px"}} src="https://images.samsung.com/is/image/samsung/p6pim/kz_ru/2202/feature/kz_ru-feature-keep-your-device-in-tip-top-condition-with-us-531269129?$FB_TYPE_A_JPG$" alt="" />
        <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        marginTop={"100px"}
        marginLeft={"100px"}>
        <Typography sx={{fontSize:"29px", fontWeight:"bold"}} component="h2">
          Редактировать продукт
        </Typography>
        <TextField
          value={title}
          onChange={e => setTitle(e.target.value)}
          id="standard-basic"
          label="Название"
          variant="standard"
          style={{ marginTop: "14px", width:"400px" }}        
        />
        <TextField
          value={description}
          onChange={e => setDescription(e.target.value)}
          id="standard-basic"
          label="GB"
          variant="standard"
          style={{ marginTop: "5px", width:"400px" }}        
          />
        <TextField
          type="number"
          value={price}
          onChange={e => setPrice(+e.target.value)}
          id="standard-basic"
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
          style={{ marginTop: "5px", width:"400px", marginBottom:"20px" }}        
          />
        <Button
          sx={{ borderRadius:"30px", backgroundColor:"black", width:"400px"}}
          onClick={handleValues}
          style={{ margin: "10px" }}
          variant="contained"
          color="success">
          Сохранить изменение
        </Button>
      </Box>
    </Container>
  ) : (
    <Loader />
  );
};

export default EditProductForm;
