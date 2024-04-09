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
                Contact
            </Name>
            <Img>
               <BoldContent>
                For any information, please contact us at: xxxxxxxxxxx@gmail.com
               </BoldContent>
            </Img>
        </HomePageContainer>
        <Footer />

    </>
  )
  }
const BoldContent = styled.div`
  font-size: 1.5em;
  font-weight:bold;

`
const SubBold = styled.div`
  font-size: 1.2em;
`

const Name = styled.div`
    font-size: 4em;
    font-weight:bold;
    color: #ff6e7f;
`
const Img = styled.div`
    display:flex;
    width: 80%;
    height: auto;
    background-color: white;
    text-align: left;
    align-items: left;
    justify-content: center;
    border-radius: 1rem;
    gap: 1rem;
    padding: 2rem;
    flex-direction: column;
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
    height: 50vw;
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