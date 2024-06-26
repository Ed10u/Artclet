import React from 'react'
import styled from 'styled-components'
import {useScrollValue} from '@/components/customHook/scrollValue'


const Footer = () => {
    const ValueOfScroll = useScrollValue();
    
  return (
    <>
    <Container $ValueOfScroll = {ValueOfScroll}>
        <WebsiteName>Artclet</WebsiteName>
        <NavigationButtonContainer>
            <Navigator href="/">Home</Navigator>
            <Navigator href = "/about">About</Navigator>
        </NavigationButtonContainer>
    </Container>
    </>
  )
}

const Icon = styled.img`
    width:40px;
    align-self:center;
`
const Container = styled.div`
    display: flex;
    position:absolute;
    justify-content: space-between;
    flex-direction: column;
    align-items:center;
    width: 90vw;
    height:15vw;
    background-color: white;
    z-index:10;
    padding-top: 2vw;
    padding-bottom: 2vw;
    padding-right: 5vw;
    padding-left: 3.8vw;


`

const WebsiteName = styled.div`
    font-size: 2.2vw;
    font-weight: bold;
    background: linear-gradient(45deg, #ff6e7f, #bfe9ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    align-self:center;
    padding-top:35px;
`

const NavigationButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 20%;
    background-color: white;
    padding-top:0.75vw;`

const Navigator = styled.a`
    font-size:1.3vw;
    font-weight: bold;
    padding-top:50px;
    padding-bottom:40px;
    color: #ff6e7f;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    text-decoration:none;

    &:hover{
        transform: scale(1.2);
    }`

export default Footer