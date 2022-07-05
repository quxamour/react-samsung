import { Box, Button, Checkbox, Container, FormControlLabel, Step, StepLabel, Stepper, TextField, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderFormOne = () => {
    const steps = ['Ваши данные', 'Оплата', 'Заказ сфомирован'];
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

        <Box sx={{display:"flex", justifyContent:"center"}}>
            <Box>
                <Typography sx={{fontSize:"35px", fontWeight:"bold", textAlign:"center"}}>Оформление заказа</Typography>
                <Box sx={{display:"flex", flexDirection:"column"}}>
                    <Typography sx={{fontSize:"20px", fontWeight:"bold", marginTop:"50px"}}>Контактная информация</Typography>
                    <div style={{marginTop:"20px"}}>
                    <TextField sx={{width:"300px"}}
                        required
                        id="standard-required"
                        label="Электронный адрес"
                        variant="standard"/>
                    
                    <TextField sx={{marginLeft:"60px", width:"300px"}}
                        required
                        id="standard-required"
                        label="Имя"
                        variant="standard"/>
                    </div>

                    <div style={{marginTop:"20px"}}>
                    <TextField sx={{width:"300px"}}
                        required
                        id="standard-required"
                        label="Мобильный телефон"
                        variant="standard"/>
                    
                    <TextField sx={{marginLeft:"60px", width:"300px"}}
                        required
                        id="standard-required"
                        label="Фамилия"
                        variant="standard"/>
                    </div>
                </Box>

                <Box sx={{display:"flex", flexDirection:"column"}}>
                    <Typography sx={{fontSize:"20px", fontWeight:"bold", marginTop:"45px"}}>Адрес доставки</Typography>
                    <div style={{marginTop:"20px"}}>
                    <TextField sx={{width:"300px"}}
                        required
                        id="standard-required"
                        label="Область"
                        variant="standard"/>
                    
                    <TextField sx={{marginLeft:"60px", width:"300px"}}
                        required
                        id="standard-required"
                        label="Город"
                        variant="standard"/>
                    </div>

                    <TextField sx={{marginTop:"20px"}}
                        required
                        id="standard-required"
                        label="Район / улица, номер дома"
                        variant="standard"/>

                    <TextField sx={{marginTop:"20px"}}
                        required
                        id="standard-required"
                        label="Квартира"
                        variant="standard"/>
                </Box>

                <Typography sx={{fontSize:"20px", fontWeight:"bold", marginTop:"45px"}}>Платежные реквизиты</Typography>
                <FormControlLabel sx={{marginTop:"20px"}} control={<Checkbox defaultChecked />} label="Я прочитал публичный договор и политику конфиденциальности" />

                <Typography>Поддерживаемые способы оплаты</Typography>
                <Box>
                    <img src="/medias/visa-logo.png?context=bWFzdGVyfGltYWdlc3wyMDQ1NnxpbWFnZS9wbmd8aDFhL2g2MS84OTA2NTI2MDk3NDM4L3Zpc2EtbG9nby5wbmd8ZjhiMmNhMDY5M2I2OWU0NjQzODdjMGMzNzE0NDBhNzdlMmVkOTI1NDRlMjRjYjhhNDIxYzNmYWNmYWZmOGM4MQ" alt="" />
                    <img src="/medias/990px-Mastercard-logo.svg.png?context=bWFzdGVyfGltYWdlc3wzODQ1MXxpbWFnZS9wbmd8aGViL2hiZi84ODk3ODY2NzI3NDU0Lzk5MHB4LU1hc3RlcmNhcmQtbG9nby5zdmcucG5nfDZhNzA0ZTBiZjkzZjkwZjA0NzZhOWFlMjJkYzVhZDU5YmYzNTA2MzU2NjlkOWQwYmVlYmY0MGE4OTdlZmIxOWM" alt="" />
                    <img src="/medias/Samsung-Pay-Logo.wine.png?context=bWFzdGVyfGltYWdlc3wyMzAwMHxpbWFnZS9wbmd8aDYwL2g1ZS84OTA2NTI2MTMwMjA2L1NhbXN1bmdfUGF5LUxvZ28ud2luZS5wbmd8MzFlNDYwMWVkNmNkZTQwNjY1MDc4OTFjYjcwMGYxOWE2YTVhODRlZDA2ZWUzMmQyNWNiMzM1ZjE3NjRhNWE0ZA" alt="" />
                    <img src="/medias/halyk-bank.png?context=bWFzdGVyfGltYWdlc3w5MDk0fGltYWdlL3BuZ3xoMTEvaDk0Lzk0NDA3MTAxMzE3NDIvaGFseWstYmFuay5wbmd8OWIyNTc4OTZkMTU0MGI2YzI2M2Q5YWY5YzdlYzU3ODU2NWQyM2E0OTc4YWU0ZDQ0ZjY0N2M2ZDJmN2QyNTA3NA" alt="" />
                    <img src="/medias/Freedom-finance-logo.png?context=bWFzdGVyfGltYWdlc3wxMjY4MXxpbWFnZS9wbmd8aGU0L2hjZS85NjYyMzQzNzc0MjM4L0ZyZWVkb20tZmluYW5jZS1sb2dvLnBuZ3w0NjI3Y2MzZTY1ZDljMDQ1ZWE0NzBhZTAxNzIwZDcxODk2ZTI4MjQyNWFmODUwOTFiNmViNjE2OTBhMmYwMWNk" alt="" />
                    <img src="/medias/card-kz.svg?context=bWFzdGVyfGltYWdlc3w3NDl8aW1hZ2Uvc3ZnK3htbHxoMGEvaGU0Lzg4OTc4NjczMTcyNzgvY2FyZF9rei5zdmd8Y2Q4YjlkNDFkZjBkMTUxNjQyOWVhNjQ1NzAzYjk1NzkxOTgwNWE3ZjVjMGMxMDVhMmUzN2FmZjA2MjZlNjhjOQ" alt="" />
                    <img src="/medias/cash-kz.svg?context=bWFzdGVyfGltYWdlc3wxNTYyfGltYWdlL3N2Zyt4bWx8aGEwL2hlMy84ODk3ODY3MzUwMDQ2L2Nhc2hfa3ouc3ZnfDNiZjFmY2IxMmI1OTI0ZGNjZDQyZTFmYzJhMWM1NjFhZWNlMTQyZDNlMjZkZjU2MmQ0OTljZDhhNmQ1NTRiNDk" alt="" />
                </Box>

            </Box>
        </Box>
        <Button onClick={() => navigate(`/order2`)} sx={{fontSize:"15px", color:"black", position:"absolute", right:"50px"}}>Продолжить</Button>
    </Container>
    
    );
};

export default OrderFormOne;