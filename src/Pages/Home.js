import React from 'react'
import HeroVid from '../Components/HeroVid/HeroVid'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import Ronald from '../Images_or_Vids/Images/ronaldo.png'
import mbappe from '../Images_or_Vids/Images/mbappe.jpeg'
import DeBruyn from '../Images_or_Vids/Images/deBruyn.jpeg'



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
const BackText2 = styled.span`
position: relative; 
top:-8rem;
left:70rem;
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
top: -20rem;
left: 12rem;
color:#FF4655;
font-size: 12rem;
font-family: 'Tungsten';
text-transform: uppercase;
margin: 0;
padding:0;
`
const NewsTitle2 = styled.div`
z-index: 5;
position: relative;
width:120rem;
top:-15rem;
left: 15rem;
color:#0F1A24;
font-size: 12rem;
font-family: 'Tungsten';
text-transform: uppercase;
margin: 0;
padding:0;
border-top: solid #C0BFBB 1px;
padding-top: 4rem;
`

const NewsCards = styled.div`
display: flex;
position: absolute; 
top: 134%;
left: 50.7%;
transform: translate(-50%, -50%);
`

const Card = styled.div`
position: relative;
top: 5rem;
width: 38rem;
height: 30rem;
margin: 2rem;
z-index: -1;
cursor: pointer;
`
const NewsButton = styled.button`
cursor: pointer;
background: transparent;
font-family: 'Lato';
font-weight: 700;
position: absolute;
top: 102%;
padding: 10rem;
left: 70%;
color: #FF4655;
text-transform: uppercase;
border: 0px solid transparent;
transition: .5s ease-in-out;

&:active{
    outline: none;
  border: none;
}

&:focus{
    outline: none;
}


`


const PicImg = styled.img`
object-fit: cover;
z-index: -5;
width: 38rem;
height: 20rem;



`
const Dates = styled.span`
color: #383E39;
position: relative;
top: 2rem;
font-size: 1rem;
letter-spacing: .1rem;
font-weight: 700;
`
const Team = styled.span`
position: relative;
top: 2rem;
left: 3rem;
color: red;
font-size: 1rem;
font-weight: 700;
letter-spacing: .1rem;



`
const Headline = styled.div`
color: #383E39;
position: relative;
top: 4rem;
font-size: 2rem;
font-weight: 700;

`

const RightArrowIcon = styled(BsArrowRight)`
position: absolute;
margin: 10rem;
top: -.6rem;
z-index: 15;
left: 40%;
transition: 1s ease-in;
font-size: 3rem;

`



let Today = new Date();
let dd = String(Today.getDate()).padStart(2, '0');
let mm = String(Today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = Today.getFullYear();
Today = mm + '/' + dd + '/' + yyyy;
let yesterday = mm + '/' + (dd - 1) + '/' + yyyy
let twoDaysAgo = mm + '/' + (dd - 2) + '/' + yyyy

const Home = () => {

    return (




        <HomeContainer>
            <HeroVid />
            <HomePageNewsContainer>
                <BackText>Allez!!</BackText>
                <NewsTitle>Latest News</NewsTitle>
                <Link to='news'>
                    <NewsButton>go to news page <RightArrowIcon /></NewsButton>
                </Link>
                <BackText2>Siuuu!</BackText2>
                <NewsCards>
                    <Card>
                        <PicImg src={Ronald} />
                        <Dates>{Today}</Dates>
                        <Team>Portugal</Team>
                        <Headline>Ronaldo, Lewandowski, Kane: Who will win the Euro 2021 Golden Boot?</Headline>
                    </Card>
                    <Card>
                        <PicImg src={mbappe} />
                        <Dates>{yesterday}</Dates>
                        <Team>France</Team>
                        <Headline>Mbappe to decide on his future after Euros</Headline>
                    </Card>
                    <Card>
                        <PicImg src={DeBruyn} />
                        <Dates>{twoDaysAgo}</Dates>
                        <Team>Belgium</Team>
                        <Headline>Kevin De Bruyne, Belgium Crush Scotland in Euro 2020 Qualifying</Headline>
                    </Card>
                </NewsCards>
                <NewsTitle2>DREAM, WIN, REMEMBER</NewsTitle2>


            </HomePageNewsContainer>
        </HomeContainer>





    )
}

export default Home
