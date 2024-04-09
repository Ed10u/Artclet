import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/preloader";
import styled,{keyframes} from 'styled-components';
import React,{useEffect,useState} from 'react';
import {useRouter} from 'next/router';
import {useScrollValue} from '@/components/customHook/scrollValue'
import Display from '@/components/fullLoginDisplay';


export default function index() {
  const router = useRouter();
  const ValueOfScroll = useScrollValue();
  
  return (
    <>
       <Preloader/>
        <Navbar />
        <Display/>
        <HomePageContainer>
            <Name>
                Genodo
            </Name>
            <Img>
                img description
            </Img>
            <Container>
                <View>Views</View>
                <Favorates>Favorates</Favorates>
            </Container>
            <SaleDate>
                sale ends: April 2024
                <TimeLeft>
                    <Day>Day</Day><Hour>Hour</Hour> <Minute>Minute</Minute> <Second>Second</Second>
                </TimeLeft>
            </SaleDate>
            <CurrentPrice>
                Current Price:
                <Cp>10 ETH</Cp>
                <PurcheseButton>Buy Now</PurcheseButton>
            </CurrentPrice>
            <SubWrapper>
            <PriceHistory>
                price history
            </PriceHistory>
            <Offers>offers</Offers>
            </SubWrapper>
            <ItemActivities>Transfer activities</ItemActivities>

        </HomePageContainer>
        <Footer />

    </>
  )
  }

const Offers = styled.div`
    width: 48%;
    height: 50%;
    background-color: white;
    padding: 1vw;
    text-align: center;
`
const ItemActivities = styled.div`
    width: 90%;
    height: 50%;
    background-color: white;
    padding: 1vw;
    text-align: center;
    border-radius: 1rem;

`

const SubWrapper = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    height:100%;
    justify-content:center;
    align-items:center;
    gap:2vw;
    row-gap:2vw;
    border-radius: 1rem;
    
`
const PurcheseButton = styled.button`
    background-color: #ff6e7f;
    border-radius: 1rem;
    border: none;
    color: white;
    padding: 1vw 2vw;
    text-align: center;
    text-decoration: none;
    width: 50%;
    
`
const Cp = styled.div`
  font-size: 2em;
  font-weight:bold;
  font-family: 'poppins-bold', sans-serif !important;
`

const Day = styled.div`
`
const Hour = styled(Day)`
`
const Minute = styled(Day)`
`
const Second = styled(Day)`
`

const View = styled.div`
  padding-bottom: 1vw;
  font-size: 1em;
    font-weight:bold;
    font-family: 'poppins-bold', sans-serif !important;
`
const Favorates = styled(View)`
`
const TimeLeft = styled.div`
  align-items:center;
  text-align:center;
  justify-content:center;
  font-size: 2em;
  font-weight:bold;
  font-family: 'poppins-bold', sans-serif !important;
    display:flex;
    flex-direction:row;
    gap:2vw;
`
const SaleDate = styled.div`
  background-color: white;
  width: 40%;
  height: 20%;
  align-items:center;
  text-align:center;
  border-radius: 1rem;
`
const CurrentPrice = styled.div`
  background-color: white;
  width: 40%;
  height: 20%;
  align-items:center;
  text-align:center;
  border-radius: 1rem;
`
const PriceHistory = styled.div`
  width: 80%;
    height: 50%;
    background-color: white;
    padding: 1vw;
    text-align: center;`

const Container = styled.div`
    display: flex;
    position:relative;
    top:0;
    align-items:center;
    justify-content:center;
    flex-direction: row;
    width: 50%;
    gap: 2vw;
`

const Name = styled.div`
    font-size: 4em;
    font-weight:bold;
    color: #ff6e7f;
`
const Img = styled.div`
    width: 50%;
    height: 50%;
    background-color: white;
    text-align: center;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
`
const SlideImg = keyframes`
from{
    transform:translate3d(0,100vh,0) rotateX(100deg);
    opacity:0;
}
to{
    transform:translate3d(0,0,0);
    opacity:1;
}
`;
const HomePageContainer = styled.div`
    font-family: 'poppins-bold', sans-serif !important;
    display: flex;
    position:relative;
    top:0;
    z-index:1;
    
    justify-content: center;
    flex-direction: column;
    overflow:hidden;
    align-items:center;

    width: 90.9vw;
    height: 100vw;
    background:#bfe9ff;
    gap: 2vw;

    padding-bottom: 2vw;
    padding-right: 4vw;
    padding-left: 4vw;

    animation: ${SlideImg} 1.5s ease-out;
    animation-delay: 0.8s; 
    `;

const SlideContent = keyframes`
    from{
        transform:translateX(-100%);
        opacity:0;

    }
    to{     
        transform:translateY(0);
        opacity:1;
    }
`


const TextContainer2 = styled.div`
    opacity: ${props => {
        const startFadeAt = 10;
        const endFadeAt = 20;
        const scroll = Math.min(Math.max(props.$ValueOfScroll, startFadeAt), endFadeAt);
        return ((scroll - startFadeAt) / (endFadeAt - startFadeAt));
    }};
`
const Content = styled.div`
    font-size: 4em;
    font-weight:bold;    
    padding-bottom:1vw;
    opacity:0;
    color: #ff6e7f;
    width:100%;
    align-items:center;
    text-align:center;

    animation: ${SlideContent} 1s ease-in-out;
    animation-duration:2s;
    animation-delay:1.7s;
    animation-fill-mode:forwards;

`;
//contains all contents
    //translate based on the scroll
    //value (oldVal-oldMin) *newRange/oldRange+newMin
//
//contains input and the button
const ButtonContainer = styled.div`
    text-align:center;
    width:40%;
    display:flex;
    flex-direction:row;
    opacity:0;

    animation: ${SlideContent} 1s ease-in-out;
    animation-delay:1.7s;
    animation-duration:1.7s;
    animation-fill-mode:forwards;

`

