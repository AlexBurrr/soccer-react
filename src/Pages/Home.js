import React from 'react'
import HeroVid from '../Components/HeroVid/HeroVid'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const HomeContainer = styled.div`
 background-color: #EBE8E1;
 width: 100%;
 height: 400rem;
 `
const HomePageNewsContainer = styled.div`


 `
const BackText = styled.span`
position: relative; 
top:-5rem;
font-family: 'Tungsten';
 font-size: 30rem;
 text-transform: uppercase;
 letter-spacing: 2rem;
 -webkit-text-stroke:2px #DFDCD5;
  -webkit-text-fill-color:transparent;

`

const NewsTitle = styled.div`
z-index: 5;
position: relative;
width:50rem;
top: -19rem;
left: 12rem;
color:#FF4655;
font-size: 12rem;
font-family: 'Tungsten';
text-transform: uppercase;
margin: 0;
padding:0;
`
const NewsCards = styled.div`
display: flex;
position: absolute; 
top: 135%;
left: 50%;
transform: translate(-50%, -50%);
`

const Card = styled.div`
width: 38rem;
height: 20rem;
background-color: black;
margin: 2rem;
z-index: -1;
`
const NewsButton = styled.button`
cursor: pointer;
font-family: 'Lato';
font-weight: 700;
position: absolute;
top: 115%;
left: 75%;
color: #FF4655;
text-transform: uppercase;
border: 0px solid transparent;
transition: 2s ease-in-out;

&:active{
    outline: none;
  border: none;
}

&:focus{
    outline: none;
}

&:hover{
    transform: scaleX(5rem);
}
`
const PicImg = styled.img``
const Date = styled.span`
color: red;
position: relative;
top: 22rem;
`
const Team = styled.div`
color: red;
position: relative;
top: 22rem;
`
const Headline = styled.div`
color: red;
position: relative;
top: 22rem;

`




const Home = () => {
    return (

        <HomeContainer>
            <HeroVid />
            <HomePageNewsContainer>
                <BackText>Siuuuuu!</BackText>
                <NewsTitle>Latest News</NewsTitle>
                <Link to='news'>
                    <NewsButton>go to news page</NewsButton>
                </Link>
                <NewsCards>
                    <Card>
                        <PicImg />
                        <Date>3</Date>
                        <Team>4</Team>
                        <Headline>5</Headline>
                    </Card>
                    <Card>
                        <PicImg />
                        <Date>3</Date>
                        <Team>4</Team>
                        <Headline>5</Headline>
                    </Card>
                    <Card>
                        <PicImg />
                        <Date>3</Date>
                        <Team>4</Team>
                        <Headline>5</Headline>
                    </Card>


                </NewsCards>

            </HomePageNewsContainer>
        </HomeContainer>





    )
}

export default Home
