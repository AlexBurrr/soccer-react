import React from 'react'
import HeroVid from '../Components/HeroVid/HeroVid'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import Ronald from '../Images_or_Vids/Images/ronaldo.png'
import mbappe from '../Images_or_Vids/Images/mbappe.jpeg'
import DeBruyn from '../Images_or_Vids/Images/deBruyn.jpeg'
import Groups from '../Images_or_Vids/Images/groups.jpeg'
import MbappeSlide from '../Images_or_Vids/Images/mbappeCover.png'
import Lewy from '../Images_or_Vids/Images/lewy.png'
import Kimmich from '../Images_or_Vids/Images/kimmich.png'
import Stadium from '../Images_or_Vids/Images/stadium.png'


const HomeContainer = styled.div`
 background-color: #EBE8E1;
 width: 100%;
 min-height: 60%;
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
top: -22.5rem;
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

const GroupContainer = styled.div`

`
const GroupImage = styled.img`
position: relative;
top: -38.5rem;
height: 40rem;
left: 52%;
width: 66rem;

`
const GroupButton = styled.button`
font-family:'Lato';
cursor: pointer;
position: absolute;
top: 70%;
left: 29%;
transform: translate(-50%, -50%);
border: none;
color: #FFFFFF;
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


const GroupText = styled.div`
    position: relative;
`
const GroupDetails = styled.div`
    position: relative;
    left: 22%;
    top: -4rem;
    width: 27rem;
    height: 30rem;
    font-size:1.3rem;
    line-height: 2.5rem;
    color: #768078;
    font-weight: 700;

`
const GroupTitle = styled.div`
    position: relative;
    width: 20rem;
    left: 22%;
    top: -6.5rem;
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 700;
    color: #383E39;
`

const KeyPlayersContainer = styled.div`
position: relative;
width: 100%;
top: -30rem;
height: 80rem;
clip-path: polygon(8% 5%, 93% 5%, 93% 4%, 100% 4%, 100% 100%, 30% 100%, 0 100%, 0 0);
background-color: #FF4655;
color: #EBE8E1;
`
const KeyPlayerWrapper = styled.div`
display: flex;
position: absolute;
left: 50%;
top: 57%;
transform: translate(-50%,-50%);
`

const PlayerImages = styled.div`
 position: relative;
 display: flex;
 left: -10rem;
 top: 4rem;
`
const Player1 = styled.img`
position: absolute;
top: -25rem;
left:-17rem;
height: 60rem;
`
const Player2 = styled.img`
position: absolute;
top: -25rem;
left: -40rem;
height: 60rem;
`
const Player3 = styled.img`
position: absolute;
top: -25rem;
left: 7rem;
height: 60rem;
`


const PlayerDetailsContainer = styled.div`
 position: relative;
`
const PlayerTitle = styled.h1`
 position: relative;
 font-family: 'Tungsten';
 text-transform: uppercase;
 font-size: 10rem;
 width: 40rem;
 left: 35rem;
 top: -20rem;
`
const PlayerSubTitle = styled.h3`
 position: relative;
 text-transform: uppercase;
 font-size: 2rem;
 width: 40rem;
 left: 35rem;
 top: -18rem;
`
const PlayersDesc = styled.section`
 position: relative;
 font-size: 1.5rem;
 line-height: 2rem;
 width: 40rem;
 left: 35rem;
 top: -15rem;
`

const Button = styled.button`
font-family:'Lato';
cursor: pointer;
position: absolute;
top: 70%;
left: 112%;
transform: translate(-50%, -50%);
border: none;
color: #FF4655;
font-size: 1.5rem;
width: 20rem;
height: 5rem;

background-position: right bottom;
transition: background-position .5s ease;
background-image: linear-gradient(45deg, #0F1A24 50%, #EAE8E1 50%);
background-size: 250% 100%;

&:hover{
   
    background-position: left top;
}
`
const CitiesContainer = styled.div`
position: relative;
top: -30rem;
height:50rem;
`
const CitiesWrapper = styled.div`
`
const CityImg = styled.img`
position: relative;
left: 70rem;
top: 0rem;
width: 70rem;
height: 50rem;

`
const CityDetails = styled.div`
position: relative;
top: -20rem;
left: -15rem;
`

const CityTitle = styled.div`
position: relative;
 font-family: 'Tungsten';
 text-transform: uppercase;
 font-size: 10rem;
 width: 40rem;
 left: 35rem;
 top: -12rem;
 border-top: solid #C0BFBA 1px;
 `


const CitySubTitle = styled.div`
position: relative;
 text-transform: uppercase;
 font-size: 2rem;
 width: 40rem;
 left: 35rem;
 top: -7rem;`


const CityText = styled.div`
position: relative;
 font-size: 1.5rem;
 line-height: 2rem;
 width: 40rem;
 left: 35rem;
 top: -5rem;`

const CityButton = styled.button`
font-family:'Lato';
cursor: pointer;
position: absolute;
top: 105%;
left: 32%;
transform: translate(-50%, -50%);
border: none;
color: #FFFFFF;
font-size: 1.5rem;
width: 20rem;
height: 5rem;

background-position: right bottom;
transition: background-position .5s ease;
background-image: linear-gradient(45deg, #0F1A24 50%, #F84755 50%);
background-size: 250% 100%;

&:hover{
   
    background-position: left top;
}
`

const FooterContainer = styled.div`
position: relative;
background-color: black;
width: 100%;
height: 30rem;
color: white;
`
const FooterWrapper = styled.div``
const FooterTop = styled.div`
position: relative;
left: 5rem;
top: 5rem;
width: 90%;
margin: 2rem;
border-bottom: solid 1px white;

`
const FooterMiddle = styled.div`
`
const MiddleLi = styled.div`
list-style: none;
display: flex;
position: relative;
left: 7rem;
top: 10rem;
width: 90%;
`
const MiddleItemTopic = styled.span`
padding-right: 6rem;
border-right: solid 1px white;
`

const MiddleItem = styled.li`
margin-right: 5rem;
margin-left: 1.5rem;

`
const FooterBottom = styled.div``



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
                <GroupContainer>
                    <NewsTitle2>DREAM, WIN, REMEMBER</NewsTitle2>
                    <GroupText>
                        <GroupTitle>
                            Head to head
                        </GroupTitle>
                        <GroupDetails>
                            There are a couple of eye-catching groups and a few sensational-looking opening fixtures; if France taking on Germany and England facing Croatia again after losing to them in the 2018 FIFA World Cup semi-finals first up doesn't whet your appetite, nothing will.
                        </GroupDetails>
                        <GroupButton>See Groups</GroupButton>
                    </GroupText>
                    <GroupImage src={Groups} />
                </GroupContainer>

                <KeyPlayersContainer>
                    <KeyPlayerWrapper>
                        <PlayerImages>
                            <Player1 src={MbappeSlide} alt='/' />
                            <Player2 src={Lewy} alt='/' />
                            <Player3 src={Kimmich} alt='/' />
                        </PlayerImages>
                        <PlayerDetailsContainer>
                            <PlayerTitle>Key Players</PlayerTitle>
                            <PlayerSubTitle>Will they carry their team?</PlayerSubTitle>
                            <PlayersDesc>Anyone can come through in a pivotal situation, but some players consistently perform better than others when the stakes are high. Succeed and you’re the hero and if you fail you’re the villain. These players are often the engine and heart of their club teams, can they clutch it at the national stage?</PlayersDesc>
                            <Link to='/players'>
                                <Button>View Key Players</Button>
                            </Link>

                        </PlayerDetailsContainer>
                    </KeyPlayerWrapper>
                </KeyPlayersContainer>

                <CitiesContainer>
                    <CitiesWrapper>
                        <CityImg src={Stadium} />
                        <CityDetails>
                            <CityTitle>Cities</CityTitle>
                            <CitySubTitle>Competition across europe</CitySubTitle>
                            <CityText>In 2021 the European Championship will be held in 12 different venues across 12 different cities in 12 different nations.

Of the 12 venues, all will stage at least three group stage games and a knock-out round tie each. Follow your team across the continent in search for glory!</CityText>
                            <Link to='/locations'>
                                <CityButton>See  Cities</CityButton>
                            </Link>
                        </CityDetails>
                    </CitiesWrapper>
                </CitiesContainer>



                <FooterContainer>
                    <FooterWrapper>
                        <FooterTop>
                            Euro 2021

                        </FooterTop>
                        <FooterMiddle>
                            <MiddleLi>
                                <MiddleItemTopic>About</MiddleItemTopic>
                                <MiddleItem>Teams</MiddleItem>
                                <MiddleItem>Players</MiddleItem>
                                <MiddleItem>Cities</MiddleItem>
                            </MiddleLi>

                        </FooterMiddle>
                        <FooterBottom>

                        </FooterBottom>

                    </FooterWrapper>

                </FooterContainer>



            </HomePageNewsContainer>
        </HomeContainer>





    )
}

export default Home
