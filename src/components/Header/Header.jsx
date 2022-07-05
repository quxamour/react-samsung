import { Badge, Box, Button, Container, IconButton, Link, Menu, MenuItem, Tooltip} from '@mui/material';
import React, { useContext } from 'react';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import './Header.css'
import { authContext } from '../../contexts/authContext';
import { cartContext } from "../../contexts/cartContext";


const settings = ["Logout"];
const Header = () => {
  const navigate = useNavigate()
  const { totalItems } = useCart();
  const { count } = React.useContext(cartContext);



  const { currentUser, logOut } = useContext(authContext);
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (product) => {
    setAnchorElUser(product.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  
    return (
        <Container sx={{backgroundColor: "white", height:'70px'}} maxWidth="100%">
            <Box sx={{display: "flex", justifyContent:"space-between", maxWidth:"100%"}}>
                <img className='logo' style={{maxWidth:"110px", marginTop:"15px", position:"absolute", left:"35px"}} onClick={() => navigate(`/`)} src="https://1000logos.net/wp-content/uploads/2017/06/Font-Samsung-Logo.jpg" alt="" />
                <Box sx={{display:"flex", justifyContent:'center', position:"absolute", right:"300px" }}>
                <button className='text' onClick={() => navigate(`/products`)} style={{width:"170px", height:"35px", fontWeight:"bold", fontSize:"12px", border:'none', borderRadius:"20px", marginTop:"20px"}} type="button" class="btn btn-outline-dark">Мобильные устройства</button>
                <button className='text' style={{marginLeft:"20px", width:"90px",height:"35px",fontWeight:"bold", fontSize:"12px", border:'none', borderRadius:"20px", marginTop:"20px"}} type="button" class="btn btn-outline-dark">Поддержка</button>
                <button className='text' style={{marginLeft:"20px", width:"100px",height:"35px",fontWeight:"bold", fontSize:"12px", border:'none', borderRadius:"20px", marginTop:"20px"}} type="button" class="btn btn-outline-dark">Для бизнеса</button>
                </Box>

            <Box sx={{display:'flex', justifyContent:"end", position:"absolute", right:"20px", marginTop:'4px' }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={() => navigate(`/favourites`)}>
              <Badge badgeContent={count} color="error">                
              < BookmarkBorderIcon className="icon" />
              </Badge>
            </IconButton>

            <IconButton sx={{marginLeft:"10px"}} onClick={() => navigate(`/cart`) }
             size="large"
             aria-label="show 17 new notifications"
             color="inherit">
            <Badge badgeContent={count} color="error">              
            <ShoppingCartOutlinedIcon className="icon"/>
            </Badge>
            </IconButton>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{marginLeft:"10px"}}
              size="large"
              aria-label="show 17 new notifications" color="inherit">
              <PersonOutlineOutlinedIcon className="icon" />

              </IconButton>
            </Tooltip>

            <Link to="/login">
              <Button onClick={() => navigate(`/login`)}
                className="btn_log-in"
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  borderRadius:"30px", textDecoration:"none"
                }}
              >
                {!currentUser ? "Войти" : "Выйти"}
              </Button>
            </Link>
          </Box>  
          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Button sx={{borderRadius:"30px", textDecoration:"none", color:'black'}}
                    onClick={() => {
                      logOut();
                      navigate("/");
                    }}
                  >
                    Выйти
                  </Button>
                </MenuItem>
              ))}
            </Menu>
            </Box>
            </Box>
        </Container>
    );
};

export default Header;