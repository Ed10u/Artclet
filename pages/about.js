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
                About Artclet
            </Name>
            <Img>
               <BoldContent>
               Welcome to Artclet – Your Premier Destination for Digital Asset Exchange
               </BoldContent>
               <SubBold>
               At Artclet, we believe in the transformative power of digital ownership and the seamless exchange of digital goods. As a cutting-edge platform, Artclet empowers creators, collectors, and traders to buy, sell, and transfer digital items with ease and security.
               </SubBold>
               <BoldContent>
               Our Vision
               </BoldContent>
               <SubBold>
               In a world where digital assets have become as valuable as their physical counterparts, we envisioned a marketplace that respects the uniqueness of these assets and the community around them. Artclet is more than a platform; it’s a haven for the digital renaissance, a place where art meets technology, and where the items you own are as limitless as your imagination.
               </SubBold>
               <BoldContent>
               What We Offer
               </BoldContent>
            <SubBold>A Diverse Marketplace: Whether it’s a piece of digital art, a unique in-game item, or a rare virtual collectible, Artclet’s marketplace is as diverse as the creators and users who populate it.

            </SubBold>
            <SubBold>
                Secure Transactions: Artclet ensures that every transaction is secure and transparent, so you can buy, sell, and trade with confidence.
            </SubBold>
            <SubBold>Creator-Centric Approach: Artclet champions creators by offering tools that make it easy to mint, list, and manage digital items, providing a direct link to a community eager to appreciate and invest in their work.
                </SubBold>
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

