import { Alert, Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useContext(authContext);
  const navi = useNavigate();
  //   console.log(login);

  function handleValues() {
    if (!email || !password) {
      alert("Пожалуйста, заполните все поля!");
      return;
    }
    login(email, password, navi);
    navi(`/`);
  }

  return (
    <Container sx={{display:'flex'}}>
      <img style={{width:"400px", height:"350px", marginTop:"30px", marginLeft:"80px"}} src="https://btcstech.com/wp-content/uploads/2020/11/3094352.jpg" alt="" />
    

    <Box
      margin={"50px"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"60vh"}
      marginLeft={"100px"}>

      <Typography
        style={{marginTop: "20px", fontSize:"30px", fontWeight:"bold" }}>
        Вход в Samsung account
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
        style={{ width: "350px", margin: "10px", borderRadius:"30px", backgroundColor:"black"}}
        variant="contained">
        Войти
      </Button>

      <Typography
        sx={{fontSize:"20px", fontWeight:"bold"}} 
        variant="p">
        Еще нет аккаунта?
      </Typography>

      <Typography
        onClick={() => navi("/register")}
        variant="p"
        color={"primary"}
        component="h3"
        style={{ cursor: "pointer", fontSize:'20px', fontWeight:"bold" }}>
        Зарегистрироваться
      </Typography>
    </Box>
    </Container>
  );
};

export default LoginForm;




