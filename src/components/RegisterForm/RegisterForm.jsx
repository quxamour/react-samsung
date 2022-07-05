import { Alert, Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { authContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const { signUp, error } = useContext(authContext);
  const navigate = useNavigate();
  console.log(signUp);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleValues() {
    if (!email || !password) {
      alert("Пожалуйста, заполните все поля!");
      return;
    }
    signUp(email, password, navigate);
  }

  return (
    <Container sx={{display:'flex'}}>
      <img style={{width:"450px", height:"350px", marginTop:"50px", marginLeft:"60px"}} src="https://x1team.ru/wp-content/uploads/2021/03/marketplace-site.jpg" alt="" />    

    <Box
    margin={"50px"}
    display={"flex"}
    flexDirection={"column"}
    alignItems={"center"}
    justifyContent={"center"}
    height={"60vh"}
    marginLeft={"20px"}>

      <Typography
        style={{marginTop: "20px", fontSize:"30px", fontWeight:"bold" }}>
        Регистрация в Samsung account
      </Typography>
      {error ? <Alert severity="error">{error}</Alert> : null}

      <TextField 
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ width: "350px", margin: "10px" }}
        id="standard-basic" 
        label="Электронная почта" 
        variant="standard" />

      <TextField
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ width: "350px", margin: "10px" }}
        id="standard-password-input"
        label="Пароль"
        type="password"
        autoComplete="current-password"
        variant="standard"/>

      <Button
        onClick={handleValues}
        style={{ width: "350px", margin: "10px", borderRadius:"30px", backgroundColor:"black" }}
        variant="contained">
        Зарегистрироваться
      </Button>

      <Typography 
        sx={{fontSize:"20px", fontWeight:"bold"}} 
        variant="p" >
        Уже есть аккаунт?{" "}
      </Typography>

      <Typography
        onClick={() => navigate("/login")}
        variant="p"
        color={"primary"}
        style={{ cursor: "pointer", fontSize:"20px", fontWeight:"bold" }}>
        Войти{" "}
      </Typography>
    </Box>
    </Container>
  );
};

export default RegisterForm;
