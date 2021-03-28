import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Nav = styled.nav`
width:100%;
height: 7rem;
background-color: red;
display: flex;
justify-content: space-between;
align-items: center;
text-transform: uppercase;
font-weight: 700;



& a:link, a:visited{
    color: white;
    text-decoration: none;
}


`
const Icon = styled.div`
margin-left: 6rem;

&:hover{
    opacity: .3;
}



`
const ItemUl = styled.ul`
    
    display: inherit;
    list-style: none;

    
`
const ItemLi = styled.li`
    margin: 1rem;
    padding: 1.5rem;


    &:hover{
        opacity: .3;
    }
`



const NavBar = () => {
    return (
        <Nav>
            <Icon>
                <Link to='/'>
                    Euor
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
