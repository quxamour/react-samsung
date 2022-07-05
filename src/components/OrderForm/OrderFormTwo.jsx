import { Typography, Container, TextField, Button, Box, Stepper, StepLabel, Step } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

const OrderFormTwo = () => {
    const steps = ['Ваши данные', 'Оплата', 'Заказ сфомирован'];
    const { cartTotal } = useCart();
    const navigate = useNavigate();
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


      <Typography style={{ marginTop: "40px", fontWeight: "800px", fontSize:"35px", fontWeight:"bold", textAlign:"center"}}>Реквизиты платежа</Typography>
        <Box sx={{display:"flex", justifyContent: "center", marginTop:"40px", marginBottom:"50px"}}>
      <img style={{width:"350px", height:"300px"}} src="https://cliply.co/wp-content/uploads/2019/08/371908930_CREDIT_CARD_400px.gif"/>

      <Box sx={{display:"flex", flexDirection:"column", marginLeft:"60px"}}>
        <TextField
            style={{ width: "350px", margin: "10px" }}
            id="filled-search"
            label="Введите номер карты"
            type="search"
            variant="filled"
        />
        <TextField
            style={{ width: "350px", margin: "10px" }}
            id="filled-search"
            label="Срок окончания действия карты"
            type="search"
            variant="filled"
        />
        <TextField
            style={{ width: "350px", margin: "10px" }}
            id="filled-search"
            label="CVV"
            type="search"
            variant="filled"
        />
     
<Typography sx={{textAlign:"center", marginTop:"15px", marginBottom:"15px"}}> Итого: {cartTotal} </Typography>
<Button sx={{borderRadius:"30px", width:"350px", backgroundColor:"black"}}
  variant="contained"
  onClick={() => {
    alert("Поздравляем! Оплата прошла успешно!");
    navigate(`/order3`);
  }}
>
  Оплатить сейчас
</Button>
</Box>

</Box>
    </Container>
  );
};

export default OrderFormTwo;

// import React, { useState } from "react";
// import "react-credit-cards/es/styles-compiled.css";
// import Cards from "react-credit-cards";
// import { Box, Button, TextField, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "react-use-cart";

// const OrderFormTwo = () => {
//   const [number, setNumber] = useState("");
//   const [name, setName] = useState("");
//   const [expiry, setExpiry] = useState("");
//   const [cvc, setCvc] = useState("");
//   const [focus, setFocus] = useState("");
//   const navigate = useNavigate();
//   const { cartTotal } = useCart();
//   return (
//     <div>
//       <Box style={{ marginTop: "90px" }}>
//         <Cards
//           number={number}
//           name={name}
//           expiry={expiry}
//           cvc={cvc}
//           focused={focus}
//         />
//       </Box>

//       <form
//         style={{
//           margin: "20px",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <TextField
//           // style={{ width: "350px", margin: "10px" }}
//           value={number}
//           name="number"
//           onChange={(e) => setNumber(e.target.value)}
//           // label="Введите номер карты"
//           // color="secondary"
//           placeholder="Card Number"
//           type="tel"
//           onFocus={(e) => setFocus(e.target.name)}
//         />
//         <TextField
//           // style={{ width: "350px", margin: "10px" }}
//           value={name}
//           name="name"
//           onChange={(e) => setName(e.target.value)}
//           // label="Введите номер карты"
//           // color="secondary"
//           placeholder="Name"
//           type="text"
//           onFocus={(e) => setFocus(e.target.name)}
//         />
//         <TextField
//           // style={{ width: "350px", margin: "10px" }}
//           value={expiry}
//           name="expiry"
//           onChange={(e) => setExpiry(e.target.value)}
//           // label="Введите номер карты"
//           // color="secondary"
//           placeholder="MM/YY Expiry"
//           type="text"
//           onFocus={(e) => setFocus(e.target.name)}
//         />
//         <TextField
//           // style={{ width: "350px", margin: "10px" }}
//           value={cvc}
//           name="cvc"
//           onChange={(e) => setCvc(e.target.value)}
//           // label="Введите номер карты"
//           // color="secondary"
//           placeholder="cvc"
//           type="tel"
//           onFocus={(e) => setFocus(e.target.name)}
//         />
//         <Typography> Итого: {cartTotal} </Typography>
//         <Button
//           color="secondary"
//           variant="contained"
//           onClick={() => {
//             if (!number || !name.trim() || !expiry || !cvc) {
//               alert("Заполните все поля!");
//             } else {
//               alert("Поздравляем! Оплата прошла успешно!");
//               navigate("/events");
//             }
//           }}
//         >
//           Оплатить сейчас
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default OrderFormTwo;
