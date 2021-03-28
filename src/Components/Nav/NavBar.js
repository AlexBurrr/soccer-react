import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Euro from '../../Images_or_Vids/Images/euro.png'


const Nav = styled.nav`
width:100%;
height: 7rem;
background-color: black;
display: flex;
justify-content: space-between;
align-items: center;
text-transform: uppercase;
font-weight: 700;
color: black;


& a:link, a:visited{
    color: #FF4655;
    text-decoration: none;
}


`
const Icon = styled.div`
margin-left: 6rem;


`
const Logo = styled.img`
height: 5rem;
width: 5rem;
align-items: center;


`


const ItemUl = styled.ul`
    
    display: inherit;
    list-style: none;
    

    
`
const ItemLi = styled.li`
    margin: 1rem;
    padding: 1.5rem;
    color: ghostwhite;


    &:hover{
       color:#FF4655
    }
`



const NavBar = () => {
    return (
        <Nav>
            <Icon>
                <Link to='/'>
                    <Logo src={Euro} alt='/' />
                </Link>
            </Icon>
            <ItemUl>
                <Link to='/groupsandteams'>
                    <ItemLi>Groups and Teams</ItemLi>

                </Link>
                <Link to='news'>
                    <ItemLi>News</ItemLi>
                </Link>
                <Link to='players'>
                    <ItemLi>Players</ItemLi>
                </Link>
                <Link to='about'>
                    <ItemLi>About</ItemLi>
                </Link>
            </ItemUl>


        </Nav>
    )
}

export default NavBar
