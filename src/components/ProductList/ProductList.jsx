import { Box, Button, Container, Pagination } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import { productContext } from "../../contexts/productContext";
import Filters from "../Filters/Filters";
import ProductCard from "../ProductCard/ProductCard";

const ProductsList = () => {
  const { getProducts, products, pages } = useContext(productContext);
  const { isAdmin } = useContext(authContext);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [price, setPrice] = useState([1, 10000]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    setSearchParams({
      q: search,
      price_gte: price[0],
      price_lte: price[1],
      _page: page,
      _limit: 4,
    });
  }, [search, price, page]);
  useEffect(() => {
    getProducts();
  }, [searchParams]);
  // console.log(pages);
  //   console.log(price);

  //   console.log(searchParams.get("q"));
  //   console.log(window.location.search);
  return (
    <Container sx={{marginTop:"50px"}}>

      <Filters
        search={search}
        setSearch={setSearch}
        price={price}
        setPrice={setPrice}
        />
        {isAdmin ? (
          <Button
            variant="outlined"
            style={{ margin: "30px", border:'none', backgroundColor:"#808080", color:"white", borderRadius:'30px' }}
            onClick={() => navigate("/add")}>
            Добавить продукт
          </Button>
        ) : null}
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        paddingTop={"30px"}>
        {products.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <Pagination
          style={{ marginBottom: "20px", marginTop:"50px" }}
          page={page}
          count={isNaN(pages) ? 0 : pages}
          variant="outlined"
          color="secondary"
          onChange={(e, value) => setPage(value)}
        />
      </Box>
    </Container>
  );
};

export default ProductsList;
