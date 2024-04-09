import React from 'react';
import styled, {keyframes} from 'styled-components'

const SlideUp = keyframes`
    from{
        transform: translate3d(0,0,0);
    }
    to{
        transform:translate3d(0,-100vh,0) rotateX(90deg);
    };
`;

const PreloaderContainer = styled.div`
    position:fixed;
    background-color:white;
    z-index:100;
    width:100%;
    height:100%;
    overflow:hidden;

    display:flex;
    justify-content:center;
    align-items:center;
    animation: ${SlideUp} 1.3s ease-out forwards;
    animation-delay:1.5s;
`

const TypingEffect = keyframes`
    from{
        width:0;
    }
    to{
        width:100%;

    }
`;

const SlideIcon = keyframes`
    0%
    {
        transform: translate3d(0,0,0);
    }
    100%
    {
        transform:translate3d(0,71vh,0) rotateX(-30deg);
    };
`;
const slideInFromBottom = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`
const PreloaderText = styled.text`
    font-family: 'poppins-bold', sans-serif !important;
    background: linear-gradient(45deg, #ff6e7f, #bfe9ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline;    -webkit-background-clip: text;
    background-clip: text;
    font-weight: bold;
    font-size: 8vw;
    overflow:hidden;
    Opacity:0;

    animation: ${slideInFromBottom} 1s ease-out forwards;

    `
const PreloaderText1 = styled(PreloaderText)`
    animation-delay:0.1s;
`
const PreloaderText2 = styled(PreloaderText)`
    animation-delay:0.2s;
`
const PreloaderText3 = styled(PreloaderText)`
    animation-delay:0.3s;
`
const PreloaderText4 = styled(PreloaderText)`
    animation-delay:0.4s;
`
const PreloaderText5 = styled(PreloaderText)`
    animation-delay:0.5s;
`
const PreloaderText6 = styled(PreloaderText)`
    animation-delay:0.6s;
`

const Preloader = () => {
    
    return(
        <>
        <PreloaderContainer>
            <PreloaderText>
                A
            </PreloaderText>
            <PreloaderText1>
                r
            </PreloaderText1>
            <PreloaderText2>
                t
            </PreloaderText2>
            <PreloaderText3>
                c
            </PreloaderText3>
            <PreloaderText4>
                l
            </PreloaderText4>
            <PreloaderText5>
                e
            </PreloaderText5>
            <PreloaderText6>
                t
            </PreloaderText6>
        </PreloaderContainer>
        </>
    )
}

export default Preloader