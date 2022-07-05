import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <footer style={{position: "static", width:"100%"}}>
        {/* <Box sx={{backgroundColor:"#F5F5F5"}} maxWidth="100%" height="300px">
            <Container maxWidth="lg" height="300px">
                <Typography sx={{fontSize:"12px", fontWeight:"bold", marginTop:"7px", paddingTop:"50px"}}>Продукты & сервисы</Typography>
                <Typography sx={{fontSize:"12px", fontWeight:"bold", marginTop:"7px"}}>Интернет-магазин</Typography>
                <Typography sx={{fontSize:"12px", fontWeight:"bold", marginTop:"7px"}}>Поддержка</Typography>
                <Typography sx={{fontSize:"12px", fontWeight:"bold", marginTop:"7px"}}>Личный продукт</Typography>
                <Typography sx={{fontSize:"12px", fontWeight:"bold", marginTop:"7px"}}>Принципы</Typography>
                <Typography sx={{fontSize:"12px", fontWeight:"bold", marginTop:"7px"}}>О компании</Typography>
            </Container>
            <Container sx={{display:"flex", paddingTop:"20px"}}>
                <Typography sx={{fontSize:"14px", fontWeight:"bold"}}>Присоединяйтесь к нам</Typography>
                <FacebookSharpIcon sx={{marginLeft:"10px"}}/>
                <TwitterIcon sx={{marginLeft:"5px"}}/>
                <InstagramIcon sx={{marginLeft:"5px"}}/>
                <YouTubeIcon sx={{marginLeft:"5px"}}/>
            </Container>
        </Box> */}

        <Container sx={{display:"flex", flexDirection:"column", outlineTop:"1px solid #c0c0c0", marginTop:"100px"}}>
            <Container sx={{display:"flex"}}>
            <Box sx={{outline:"1px solid #c0c0c0"}}>
                <Box sx={{marginLeft:"25px", marginRight:"25px", marginTop:"20px"}}>
                <Typography sx={{fontSize:"13px", fontWeight:"bold"}}>Продукты & сервисы</Typography>
                <Typography sx={{fontSize:"11px", marginTop:"14px"}}>Смартфоны</Typography>
                <Typography sx={{fontSize:"11px", marginTop:"10px"}}>Планшеты</Typography>
                <Typography sx={{fontSize:"11px", marginTop:"10px"}}>Аудио</Typography>
                <Typography sx={{fontSize:"11px", marginTop:"10px"}}>Смарт-часы</Typography>
                <Typography sx={{fontSize:"11px", marginTop:"10px"}}>Телевизоры</Typography>
                <Typography sx={{fontSize:"11px", marginTop:"10px"}}>Интерьерные ТВ</Typography>
                <Typography sx={{fontSize:"11px", marginTop:"10px"}}>Холодильники</Typography>
                <Typography sx={{fontSize:"11px", marginTop:"10px"}}>Стиральные машины</Typography>
                <Typography sx={{fontSize:"11px", marginTop:"10px"}}>Мониторы</Typography>
                <Typography sx={{fontSize:"11px", marginTop:"10px"}}    >Samsung Pay</Typography>
                </Box>
            </Box>

            <Box sx={{outline:"1px solid #c0c0c0"}}>
                <Box sx={{marginLeft:"35px", marginRight:"35px", marginTop:"20px"}}>
                <Typography sx={{fontSize:"13px", fontWeight:"bold"}}>Интернет-магазин</Typography>
                <Typography sx={{fontSize:"11px", marginTop:"14px"}}>Все акции</Typography>
                <Typography sx={{fontSize:"11px", marginTop:"10px"}}>Покупки в рассрочку</Typography>
                <Typography sx={{fontSize:"11px", marginTop:"10px"}}>доставка и установка</Typography>
                <Typography sx={{fontSize:"11px", marginTop:"10px"}}>Бесплатная установка</Typography>
                <Typography sx={{fontSize:"11px", marginTop:"10px"}}>Оследить заказ</Typography>
                <Typography sx={{fontSize:"11px", marginTop:"10px"}}>Способы оплаты</Typography>
                <Typography sx={{fontSize:"11px", marginTop:"10px"}}>Вопросы и ответы</Typography>
                <Typography sx={{fontSize:"11px", marginTop:"10px"}}>Связаться с нами</Typography>
                <Typography sx={{fontSize:"11px", marginTop:"10px"}}>Условия продажи</Typography>
                <Typography sx={{fontSize:"11px", marginTop:"10px"}}>Предложения для студентов</Typography>
                </Box>
            </Box>  

            <Box sx={{outline:"1px solid #c0c0c0"}}>
                <Box sx={{marginLeft:"35px", marginRight:"35px", marginTop:"20px"}}>
                <Typography sx={{fontSize:"13px", fontWeight:"bold"}}>Поддержка</Typography>
                <Typography sx={{fontSize:"11px", marginTop:"14px"}}>Свяжитесь с нами</Typography>
                <Typography sx={{fontSize:"11px", marginTop:"10px"}}>Общая поддержка</Typography>
                <Typography sx={{fontSize:"11px", marginTop:"10px"}}>Найти сервисный центр</Typography>
                <Typography sx={{fontSize:"11px", marginTop:"10px"}}>Сервесная поддержка на жестовом языке</Typography>
                </Box>
            </Box>

            <Box sx={{outline:"1px solid #c0c0c0", width:"200px"}}>
                <Box sx={{marginLeft:"35px", marginRight:"35px", marginTop:"20px"}}>
                <Typography sx={{fontSize:"13px", fontWeight:"bold"}}>Личный продукт</Typography>
                <Typography sx={{fontSize:"11px", marginTop:"14px"}}>Мой кабинет</Typography>
                <Typography sx={{fontSize:"11px", marginTop:"10px"}}>Мои заказы</Typography>
                <Typography sx={{fontSize:"11px", marginTop:"10px"}}>Избранное</Typography>
                </Box>
            </Box>

            <Box sx={{outline:"1px solid #c0c0c0"}}>
                <Box sx={{marginLeft:"35px", marginRight:"35px", marginTop:"20px"}}>
                    <Typography sx={{fontSize:"13px", fontWeight:"bold"}}>Принципы</Typography>
                    <Typography sx={{fontSize:"11px", marginTop:"14px"}}>Обзор</Typography>
                    <Typography sx={{fontSize:"11px", marginTop:"10px"}}>Окружающая среда</Typography>
                    <Typography sx={{fontSize:"11px", marginTop:"10px"}}>Сщциальная ответственность</Typography>
                    <Typography sx={{fontSize:"11px", marginTop:"10px"}}>Цифровая ответственность</Typography>
                    <Typography sx={{fontSize:"11px", marginTop:"10px"}}>Устойчивость цепочек поставок</Typography>
                </Box>

                <Box sx={{marginTop:"35px", marginLeft:"35px", marginRight:"35px", marginBottom:"30px"}}>
                    <Typography sx={{fontSize:"13px", fontWeight:"bold"}}>О компании</Typography>
                    <Typography sx={{fontSize:"11px", marginTop:"14px"}}>Информация о компании</Typography>
                    <Typography sx={{fontSize:"11px", marginTop:"10px"}}>Направления бизнеса</Typography>
                    <Typography sx={{fontSize:"11px", marginTop:"10px"}}>Фирменный стиль</Typography>
                    <Typography sx={{fontSize:"11px", marginTop:"10px"}}>Карьера</Typography>
                    <Typography sx={{fontSize:"11px", marginTop:"10px"}}>Отношения с инвесторами</Typography>
                    <Typography sx={{fontSize:"11px", marginTop:"10px"}}>Новости компании</Typography>
                    <Typography sx={{fontSize:"11px", marginTop:"10px"}}>Этика</Typography>
                    <Typography sx={{fontSize:"11px", marginTop:"10px"}}>Дизайн Samsung</Typography>
                </Box>
            </Box>
            </Container>

            <Typography sx={{fontSize:"11px", color:"#353839", marginTop:"25px"}}>Copyright © 1995-2022 SAMSUNG. Все права защищены.</Typography>

            <Box sx={{outline:"1px solid #c0c0c0", marginTop:"20px", maxWidth:"100%"}}>
                <Box sx={{display:"flex", marginTop:"20px", marginBottom:"20px", marginLeft:"20px"}}>
                <Typography sx={{fontSize:"14px"}}><b>Кыргызстан/Русский(RU)</b> | Специальные возможности | Конфиденциальность | Условия продажи</Typography>

                <Box sx={{display:"flex", justifyContent:"end", marginLeft:"160px"}}>
                    <Typography sx={{fontSize:"14px"}}>Присоединяйтесь к нам</Typography>
                    <FacebookSharpIcon sx={{marginLeft:"10px"}}/>
                    <TwitterIcon sx={{marginLeft:"5px"}}/>
                    <InstagramIcon sx={{marginLeft:"5px"}}/>
                    <YouTubeIcon sx={{marginLeft:"5px"}}/>
                </Box>
                </Box>
            </Box>
        </Container>


        </footer>
    );
};

export default Footer;