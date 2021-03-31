import React from 'react'
import styled from 'styled-components'
import Video from '../../Images_or_Vids/Vids/HeroEuroPromo.mp4'
import { Link } from 'react-router-dom'

const HeroContainer = styled.div`
width: 100%;
height: 66rem;
z-index: -1;
clip-path: polygon(0 0, 100% 0, 100% 100%, 3% 100%, 0 92%);

`
const SubTitle = styled.span`
font-family:'Lato';
position: absolute;
top: 30%;
left: 50%;
transform: translate(-50%, -50%);
color: #EBE8E1;
font-size: 1.5rem;
`

const Title = styled.span`
font-family: 'valorant';
position: absolute;
font-size: 10rem;
z-index:15;
top: 40%;
left: 50%;
transform: translate(-50%, -50%);
color: #EBE8E1;
`
const Button = styled.button`
font-family:'Lato';
cursor: pointer;
position: absolute;
top: 55%;
left: 50%;
transform: translate(-50%, -50%);
background-color: #FF4655;
border: none;
color: #EBE8E1;
font-size: 1.5rem;
width: 20rem;
height: 5rem;

background-position: right bottom;
transition: background-position .5s ease;
background-image: linear-gradient(45deg, #0F1A24 50%, #FF4655 50%);
background-size: 250% 100%;

&:hover{
   
    background-position: left top;
}



`

const VideoCont = styled.video`
z-index: -1;
position: absolute;
width: 100%;
top: -4rem;
object-fit: contain;
`

const HeroVid = () => {
    return (
        <HeroContainer>
            <VideoCont autoPlay loop muted>
                <source src={Video} type='video/mp4' />


            </VideoCont>
            <SubTitle>Who will be crowned kings of Europe</SubTitle>
            <Title>Euro 2021</Title>
            <Link to='groupsandteams'>
                <Button>See Teams</Button>
            </Link>
        </HeroContainer>
    )
}

export default HeroVid
