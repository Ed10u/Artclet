import React, { useState,useEffect } from 'react';
import styled, {keyframes} from 'styled-components'
import {onAuthStateChanged,signOut} from 'firebase/auth';
import {auth} from '../library/firebaseConfig';
import { useRouter } from 'next/router'
import {useScrollValue} from '@/components/customHook/scrollValue'
import { useFullLoginMenu } from './customHook/fullLoginMenuProvider.js';
import FullLoginMenu from './fullLoginDisplay';



const Navbar = () => {

    const [animationState, setAnimationState] = useState('idle');
    const [isVisible, setIsVisible] = useState(false);

    const [loggedUser, setLoggedUser] = useState("LogInMenu");
    const router = useRouter();
    const ValueOfScroll = useScrollValue();
    
    useEffect(() => { 
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedUser(user.email);
            } else {
                setLoggedUser("LogInMenu");
                
            }
        });
    },[]); 

    const handleHomeButton = async()=>{
        router.push("/");
    }
    const handleAboutButton = async()=>{
        router.push("/about");
    }
    const handleSearchPageButton = async()=>{
        router.push("/searchPage");
    }

  return (
    <>
    <Container $ValueOfScroll = {ValueOfScroll}>
        <WebName>
            <WebsiteName href="/">Artclet</WebsiteName>
        </WebName>
        <ContentInput placeholder="Search"/>
        <NavigationButtonContainer>
            <LoginContainer>
                <Login onClick={()=>{setIsVisible(true);setAnimationState('in');}}>{loggedUser}</Login>
            </LoginContainer> 
        </NavigationButtonContainer>
    </Container>
    { isVisible && <FullLoginMenu isVisible={isVisible} setIsVisible={setIsVisible}
                    animationState={animationState} setAnimationState={setAnimationState} />}
    </>
  )
}

const ContentInput = styled.input`
    width:50%;
    height:2.5rem;
    background-color:#FAFAFA;
    border:none;
    border-radius:6px;/ make the boarder round*/
    font-size:17px;
    padding-left:15px;

    &:focus{
        outline:none;
        border:none;

    }


`
const WebName = styled.div`
    font-family: 'poppins-bold', sans-serif !important;
    display:flex;
    flex-direction:row;
    width:30%;
`
const slideIn = keyframes`
    from{
        transform: translateY(-100%);
        opacity:0;
    }
    to{
        transform:translateY(0);
        opacity:1;
    };
`;
const Container = styled.div`
    width:92.9vw;
    background-color: white;
    opacity:0;
    position:sticky;
    top:0;
    z-index:10;
    gap: 20vw;

    display: flex;
    justify-content: space-between;
    flex-direction: row;


    padding-top: 0.3vw;
    padding-bottom: 0.7vw;
    padding-right: 3vw;
    padding-left: 3vw;

    animation: ${slideIn} 1s ease-in-out forwards;
    animation-delay:1.8s;
    animation-duration: 2s;

    translate: 0 ${props => Math.max(-1*(Math.max(props.$ValueOfScroll,50)-50)*100/20,-100)}%;
`;
//(oldValue-oldMin)*newRange/oldRange+newMin

const WebsiteName = styled.a`
    font-size: 2.2vw;
    font-weight: bold;
    background: linear-gradient(45deg, #ff6e7f, #bfe9ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
`

const NavigationButtonContainer = styled.div`
    width:20%;
    display: flex;
    flex-direction: row;
    background-color: white;
    translate: 0 cal(-1%*(max(var(--scroll),25)-25)*100/75);

    `;

const Navigator = styled.button`
    font-size:1.3vw;
    font-weight: bold;
    color: white;
    text-decoration:none;
    background-color:#ff6e7f;
    align-items: center;

    cursor: pointer;
    text-decoration:none;
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    border-style: none;
    flex-shrink: 0;
    transition: transform 0.5s ease, background-color 0.5s ease-in-out, color 0.5s ease-in-out;
    padding:0.2rem 1rem;


    &:hover{
        transform: scale(1.05);
        background-color: #bfe9ff;
      color: white;

    }
`;


const Login = styled.button`
    font-size:1.3vw;
    font-weight: bold;
    color: white;
    background-color:#ff6e7f;

    text-decoration:none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    border-style: none;
    flex-shrink: 0;
    transition: transform 0.5s ease, background-color 0.5s ease-in-out, color 0.5s ease-in-out;
    position: relative;
    padding:0.4rem 1rem;

    &:hover{
        transform: scale(1.05);
        background-color: #bfe9ff;

    }
`
const LoginContainer = styled.div`
    height:100%;
`;



export default Navbar