import React from 'react'
import styled from 'styled-components';


const MainContainer = styled.div`
position: relative;
background-color:#0E1A25;
width: 100%;
height: 100rem;
top: 7rem;
color: #FFFFFF;
display: flex;
`

const PlayerNames = styled.ul`
position: absolute;
left: 50%;
top: 20%;
transform: translate(-50%, -50%);
text-align: center;
list-style: none;
font-family: 'Tungsten';
font-size: 10rem;
`

const Player = styled.li``


const Players = () => {
    return (
        <div>
            <MainContainer>
                <PlayerNames>
                    <Player>1</Player>
                    <Player>2</Player>
                    <Player>3</Player>
                    <Player>4</Player>
                    <Player>5</Player>
                    <Player>6</Player>
                    <Player>7</Player>
                </PlayerNames>
            </MainContainer>
        </div>
    )
}

export default Players
