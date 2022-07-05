import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import AddComment from '../Comments/AddComment';
import "./HomePage.css"

const HomePage = () => {
    return (
        <Container>
          <div className='image'>
            <Typography className='h2' sx={{color:"white", fontSize:"45px", fontWeight:"bold"}}>Купите The Freestyle</Typography>
            <Typography className='h2' sx={{color:"white", fontSize:"40px", marginTop:"50px", fontWeight:"bold"}}>и получите подарок!</Typography>
            <Typography className='h2' sx={{marginTop:"120px", color:"white", fontSize:"15px"}}>+15% скидка на следующую покупку.</Typography>
            <img style={{maxWidth:"110%", marginLeft:"-59px"}} src="//images.samsung.com/is/image/samsung/assets/kz_ru/home/update/graffiti-1440-640.jpg?imwidth=1366" alt="" />
          </div>
        <Box>
            <p className='h3' style={{textAlign:"center", fontWeight:"bold", fontSize:"35px", marginTop:"80px"}}>Мобильные</p>
            <Box sx={{display:"flex", justifyContent:"center", margin:"10px", marginTop:"20px"}}>
                <p className='h4' style={{marginLeft:"17px", fontSize:"15px"}}>Galaxy S22 | S22+</p>
                <p className='h4' style={{marginLeft:"17px", fontSize:"15px"}}>Galaxy A73 5G</p>
                <p className='h4' style={{marginLeft:"17px", fontSize:"15px"}}>Galaxy Tab S8 | S8+ | S8 Ultra</p>
                <p className='h4' style={{marginLeft:"17px", fontSize:"15px"}}>Galaxy A53 5G</p>
                <p className='h4' style={{marginLeft:"17px", fontSize:"15px"}}>Galaxy Z Fold3 | Flip3</p>
            </Box>
            <Box sx={{marginTop:"50px", display:"flex", flexDirection:"column", alignItems:'center', justifyContent:"center"}}>

              <img className='img1' src="//images.samsung.com/is/image/samsung/assets/kz_ru/home/gbm-mx/Mobile1.png?$624_352_PNG$" alt="" />
              <p className='h3' style={{fontSize:"35px", fontWeight:"bold", marginTop:"25px"}}>Galaxy S22|S21+</p>

              <div style={{display:"flex", marginTop:'20px'}}>
                <p style={{fontSize:"14px", marginTop:'7px', marginRight:"15px", textDecoration:"underline"}}>Узнать больше</p>
                <button
                  style={{width:"100px", 
                  height:"35px", 
                  fontWeight:"bold", 
                  fontSize:"12px", 
                  borderRadius:"20px", 
                  display:"flex", 
                  justifyContent:"center", 
                  alignItems:"center",
                  backgroundColor:"black",
                  color:"white"}} 
                  type="button" 
                  class="btn btn-outline-dark">
                  Купить
                </button>
              </div>
            </Box>
        </Box>

        <Box sx={{marginTop:"100px", display:"flex", flexDirection:'column'}}>
          <p className='p1' style={{fontSize:"40px", fontWeight:"bold", textAlign:"center"}}>Explore #DoWhatYouCan't</p>
          <Box className='box' sx={{display:"flex", marginLeft:'-30px'}}>
          <img className='img2' style={{marginTop:"60px"}} src="//images.samsung.com/is/image/samsung/assets/kz_ru/explore/brand/galaxy-fan-edition/im0078_home_explore-banner_mo_624x624.jpg?$624_624_PNG$" alt="" />
          <Box sx={{marginLeft:'60px', marginTop:"150px"}}>
            <hr style={{
              margin:"20px 0",
              padding: "0",
              height: "3",
              border: "none",
              borderBottom: "2px solid #000",
            }}></hr>
            <p className='p2' style={{fontSize:"20px", fontWeight:'bold'}}>01 Мы спросили. Вы ответили. Мы сделали</p>
            <p className='p3' style={{fontSize:"12px",  marginTop:"14px", marginLeft:"30px"}}>Вы рассказали, каким должен быть смартфон мечты. А мы его создали.</p>
            <p className='p3' style={{fontSize:"14px", fontWeight:'bold', marginTop:'7px', marginLeft:"30px", textDecoration:"underline"}}>Узнать больше</p>
            <hr style={{
              margin:"20px 0",
              padding: "0",
              height: "0",
              border: "none",
              borderTop: "1px solid #333",
              marginLeft:"30px"
            }}></hr>

            <p className='p2' style={{fontSize:"18px", fontWeight:'bold', marginTop:"35px"}}>02 История создания Neo QLED 8K</p>
            <p className='p2' style={{fontSize:"18px", fontWeight:'bold', marginTop:"35px"}}>03 Bespoke — часть вашего образа жизни</p>
            <p className='p2' style={{fontSize:"18px", fontWeight:'bold', marginTop:"35px"}}>04 Samsung на CES 2022. Вместе — в лучшее завтра</p>
            <p className='p2' style={{fontSize:"18px", fontWeight:'bold', marginTop:"35px"}}>05 Подчеркните свою индивидуальность аксессуарами для Galaxy S22</p>
          </Box>
          </Box>
        </Box>

        <Box>
          <Box className='box1' sx={{width:"1266px", height:"450px", backgroundColor:"black", marginLeft:"-60px", marginTop:"120px"}}>
            <br />
            <br />
            <Typography sx={{fontSize:"80px", fontWeight:"bold", color:"white", marginLeft:"80px"}}>Революционный</Typography>
            <Typography sx={{fontSize:"80px", fontWeight:"bold", color:"white", marginTop:"-40px", marginLeft:"80px"}}>прорыв в</Typography>
            <Typography sx={{fontSize:"80px", fontWeight:"bold", color:"white", marginTop:"-40px", marginLeft:"80px"}}>технологиях</Typography>
            <Typography sx={{fontSize:"30px", fontWeight:"bold", color:"white", marginLeft:"80px"}}>Самый быстрый чип в линейке Galaxy</Typography>
          </Box>
          <img style={{width:"1266px", marginLeft:"-60px"}} src="https://images.samsung.com/is/image/samsung/assets/kz_ru/smartphones/galaxy-s22-ultra/images/galaxy-s22-ultra_highlights_processor.jpg?$ORIGIN_JPG$" alt="" />
        </Box>

        <Box>
          <img style={{width:"1266px", marginLeft:"-60px", marginTop:"200px"}}s src="https://images.samsung.com/is/image/samsung/assets/kz_ru/smartphones/galaxy-s22-ultra/images/galaxy-s22-ultra_highlights_pro-grade_m.jpg?$ORIGIN_JPG$" alt="" />
          <Box sx={{width:"1266px", height:"350px", backgroundColor:"black", marginLeft:"-60px"}}>
            <br />
            <br />
            <Typography sx={{fontSize:"20px", fontWeight:"bold", color:"white", marginLeft:"80px", textAlign:"center", marginRight:"80px"}}>Galaxy S22 Ultra обладает камерой действительно профессионального уровня благодаря высокочувствительным пиксельным сенсорам. Снимайте как настоящий фотограф! Даже ночью.</Typography>
          </Box>
        </Box>

        <Box className='box' sx={{marginTop:"100px", display:"flex"}}>
          <img className='img2' style={{width:"90%", height:'200px', marginTop:"100px"}} src="https://images.samsung.com/is/image/samsung/assets/kz_ru/smartphones/galaxy-s22-ultra/images/galaxy-s22-ultra_highlights_videocall.jpg?$ORIGIN_JPG$" alt="" />
          <Box sx={{margin:"80px"}}>
            <Typography sx={{fontSize:"50px", fontWeight:"bold"}}>Расстояния не важны</Typography>
            <Typography sx={{fontSize:"15px", marginTop:"30px"}}>Встретимся в Google Duo!18 Общайтесь с семьей и друзьями по видеосвязи и делитесь своим экраном, чтобы вместе смотреть видео, как в реальной жизни.19 Транслируйте изображение на ваш телевизор, чтобы увидеть всех сразу.20</Typography>
            <Typography sx={{fontSize:"15px", color:"#555555", marginTop:"15px"}}>*Изображение смоделировано в иллюстративных целях. Фактический пользовательский интерфейс может отличаться.</Typography>
            <img style={{width:"150px", marginTop:"15px"}} src="//images.samsung.com/is/image/samsung/assets/kz_ru/smartphones/galaxy-s22-ultra/images/galaxy-s22-ultra_highlights_google-duo-icon.jpg?$ORIGIN_JPG$" alt="" />
          </Box>
        </Box>

        <AddComment />

        </Container>
    );
};

export default HomePage;