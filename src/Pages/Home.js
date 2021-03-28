import React from 'react'
import HeroVid from '../Components/HeroVid/HeroVid'
import styled from 'styled-components'


const HomeContainer = styled.div`
 background-color: #EBE8E1;
 width: 100%;
 height: 600rem;
 `




const Home = () => {
    return (
        <HomeContainer>
            <HeroVid />

        </HomeContainer>



    )
}

export default Home
