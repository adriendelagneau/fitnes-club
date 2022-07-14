import React from 'react';
import styled from 'styled-components';
import { mobile } from "../responsive";
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../slices/authSlice'

const Container = styled.div`
  height: 80px;
  position sticky;
  top: 0;
  z-index: 999;
  ${mobile({ height: "50px",
             marginBottom: "40px", 
    })}
`;

const Nav = styled.nav`
    display: flex;
    height: 80px;
    justify-content: space-between;
    align-items: center;
    background: teal;
    

    a{
      color: white;
    }

    #sidebar{
        display:none;
        flex-direction: row;
        align-items: center;
        background: teal ;
        display: inline;
        position: absolute;
        top:76px;
        left: -110px;
        transition: 0.5s ease-in-out;
        width: 110px;
        height: 130px;
        padding-top: 20px;
    }

    #sidebar.open{
        left: 0px;
    }
`
const Center = styled.div`
    flex:1;
    text-align: center;
`
const Logo = styled.h1`
    font-size: 35px;
    font-weight: bold;

    ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
    flex:1;
    display: flex;
    justify-content: right;
    align-items: center;
    padding-right: 20px;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
  `;
  const Navdiv = styled.div`
    display:flex;
    color: white;

    ${mobile({
    display:"none",
    })}
`
const CartIcon = styled.div`
    padding-left:30px;
`

const UserLinkSmall = styled.div`
    padding: 15px 15px;
    color: white;
`

const Left = styled.div`
    flex:1;
    padding-left: 30px;

    .open .barre{
        background: teal;
        
        &:after{
            top: 0;
            transform: rotate(45deg);
        }
        &:before{
            top: 0;
            transform: rotate(-45deg);
        }
    }
`

const Burger = styled.div`
    cursor: pointer;
    width:30px;
    height: 50px;
    display: none;

    .barre{
        width:30px;
        height: 3px;
        background: white;
        position: absolute;
        transition: .5s;
        top: 40px;

        &:after,
        &:before{
            content:"";
            position: absolute;
            width: 30px;
            height: 3px;
            background: rgb(255, 255, 255);
            transition: .5s;
            borderRadius: 5px;
            color:white;
        }
        &:after{
            top:10px;
        }
        &:before{
            top:-10px;
        }
    }

    ${mobile({
        display:"flex",
      })}
`

const Navbar = () => {

  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const {user} = useSelector((state) => state.user)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onLogout = () => {
    dispatch(logout())
    
    navigate('/')
  }

// ADD CLASS TO CHANGE BURGER FORM AND OPEN SIDEBAR
const changeForm = () => {
  const menuIcon = document.getElementById("myID");
  const menuLinks = document.getElementById("sidebar")
  
      if(menuIcon.classList.contains("open"))
      menuIcon.classList.remove("open")
      else{
          menuIcon.classList.add("open")
      }
      
      if(menuLinks.className === "open")
      menuLinks.classList.remove("open")
      else{
          menuLinks.classList.add("open")
      }
  }

// REBOOT MENU BURGER AND SIDEBAR SYSTEM
  window.addEventListener('resize', ()=> {
      const menuLinks = document.getElementById("sidebar")
      const menuIcon = document.getElementById("myID");

      if(window.innerWidth > 980 ) {
          menuLinks.classList.remove("open")
          menuIcon.classList.remove("open")
      }
  }, true);

  return (
    <Container>
    <Nav>

    <div id="sidebar" >
    {user ? 
        <React.Fragment>
           <Link to="/profil" aria-label="Profil">
               <UserLinkSmall>PROFILE</UserLinkSmall>
           </Link>
           <Link to="/" aria-label="Deconnexion">
                <UserLinkSmall>LOGOUT</UserLinkSmall>
           </Link>
       </React.Fragment>
       :
       <React.Fragment>
           <Link to="/register" aria-label="S'enregistrer">
               <UserLinkSmall>S'ENREGISTER</UserLinkSmall>
           </Link>
           <Link to="/login" aria-label="S connecter">
               <UserLinkSmall>SE CONNECTER</UserLinkSmall>
           </Link> 
       </React.Fragment>
    }
    </div>

    <Left>
        <Burger onClick={changeForm} id="myID">
            <div className='barre'></div>
        </Burger>

    </Left>


    <Center>
    <Link to="/" aria-label="Accueil">
        <Logo>LE SHOP.</Logo>
    </Link>
</Center>

<Right>
      
{ user ? 
    <Navdiv>
        <Link to="/profil" aria-label="Profil">
            <MenuItem>PROFILE</MenuItem>
        </Link>
        <MenuItem onClick={onLogout}>DECONNEXION</MenuItem>
    </Navdiv>
    :
    <Navdiv>
        <Link to="/register" aria-label="S'enregistrer">
            <MenuItem>S'ENREGISTER</MenuItem>
        </Link>
        <Link to="/login" aria-label="Se connecter">
            <MenuItem>SE CONNECTER</MenuItem>
        </Link>
    </Navdiv>
}

<CartIcon>
<Link to="/cart" aria-label="Pannier">
<Badge badgeContent={cartTotalQuantity ? cartTotalQuantity : 0} color="primary">
      <ShoppingCartOutlinedIcon/>
  </Badge>
</Link>
</CartIcon>
</Right>

</Nav>
    </Container>
  );
};

export default Navbar;
