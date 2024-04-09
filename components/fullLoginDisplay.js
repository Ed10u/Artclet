import React,{useState,useEffect} from 'react'
import styled,{keyframes} from 'styled-components'
import { signInWithEmailAndPassword,onAuthStateChanged,createUserWithEmailAndPassword,signOut} from 'firebase/auth'
import {auth} from '../library/firebaseConfig';
import { useRouter } from 'next/router'
import { useFullLoginMenu } from './customHook/fullLoginMenuProvider.js';


const SlideUp = keyframes`
    0%{
        transform: translate3d(100vw,0,0);
    }
    50%{
        transform:translate3d(90vw,0,0);
    }
    100%{
        transform:translate3d(0,0,0);
    };
`;
const SlideOut = keyframes`
    0%{
        transform: translate3d(0,0,0);
    }
    50%{
        transform:translate3d(10vw,0,0);
    }
    100%{
        transform:translate3d(100vw,0,0);
    };
`;


const ContentWrapper =styled.div`
    jusfity-content:center;
    width: 100%;
    height: 100%;
    position: fixed;
    background-color:white;
    top: 0;
    right: 0;
    z-index:10000;

    animation: ${({ $animationState }) => $animationState === 'in' ? SlideUp : SlideOut} 1s ease-in forwards;
    animation-delay: ${({ $animationState }) => $animationState === 'in' ? '0s' : '0.3s'};
`

const WindowWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    height:100%;
    width:100%;
    align-items:center;
    z-index:10000;
`
const ExitMenu = styled.button`
    width: 5dvh;
    height: 5dvh;
    cursor: pointer;
    background-size: 1.5em;
    border-radius: 20%;
    border:none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.1em;
    display: flex;
    position: absolute;
    top: 1.5em;
    bottom: auto;
    left: auto;
    right: 2em;
`

const ExitMenuWrapper = styled.div`
    display:flex;
    
`
const WindowAnimationIn = keyframes`
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
`
const WindowAnimationOut = keyframes`
    from{
        opacity:1;
    }
    to{
        opacity:0;
    }
`
const MenuWindow = styled.div`
    display:flex;
    height:100%;
    background: linear-gradient(45deg, #A9F1DF, #FFBBBB);
    width:100%;
    color:white;
    align-items:center;
    justify-content:center;

    z-index:1;
    opacity:0;

    flex-direction:column;
    animation: ${({ $animationState }) => $animationState === 'in' ? WindowAnimationIn : WindowAnimationOut} 1s ease-in-out forwards;
    animation-delay: ${({ $animationState }) => $animationState === 'in' ? '1s' : '0s'};



`
const LoginWindow = styled(MenuWindow)`
    width:29%;
    height:100%;
    background-image:url('/LoginBackground.jpg');
    background-size: cover;
    background-position: center;
    animation-delay: ${({ $animationState }) => $animationState === 'in' ? '1.15s' : '0s'};
    &::before{
        content: "";
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index:2;
        
      }

`


const RegisterWindow = styled(MenuWindow)`
    width:33%;
    background-color: #A7BEAE;
    animation-delay: ${({ $animationState }) => $animationState === 'in' ? '1.3s' : '0s'};
    z-index:2;
`

const ButtonContainer = styled.div`
    width:50%;
    height:20em;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:1.2rem;
    z-index:2;

    
`
const ButtonContainerRegister = styled(ButtonContainer)`
`
//the button
const ContentButtonRegister = styled.button`
    width:40%;
    height:30%  ;
    border:none;
    color:white;
    font-size:18px;
    z-index:2;

    background-color:rgb(87,202,195);
    border-radius:6px;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover{
        background-color:#0D98BA;
        transform: scale(1.008);
    }

`//the input
const ContentButtonLogin = styled(ContentButtonRegister)`
    background-color:#79D4FF;
    height:30%;


`
const RegisterButton = styled.a`
    transition:0.2s linear;
    font-size:1em;
    color:#3f6366;
    &:hover{
        transform:scale(1.1);
    }
`
const LogoutButton = styled(ContentButtonLogin)`
    height:20%;
    
`
const UserLoggedIn = styled.div`
    color: white;
    text-align: center;
    align-self: stretch;
    font-size: 3dvh;
    font-weight: 500;
    text-decoration: none;
    font-family: Georgia, serif;
    z-index:2;
`
const ContentInput = styled.input`
    width:100%;
    height:35%;
    background-color:#d9ebf4;
    border:none;
    border-radius:6px;/* make the boarder round*/
    font-size:16px;
    padding-left:15px;

    &:focus{
        outline:none;
        border:none;

    }

`
const PasswordInput = styled(ContentInput)`
    height:35%;
`
const ErrorText = styled.div`
    color:red;
`
const MenuButtonWrapper = styled.div`

    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction:column;
    width:100%;
    height:60%;
    gap:3%;

`
const MenuButtons = styled.a`
position: relative;
display: inline-block;
padding: 10px 20px;
color: black;
font-size: 1.5em;
text-align: center;
text-decoration: none;
background: white;
overflow: hidden;
transition: color 1s, background-color 1s;
width: 100%;
z-index: 1;
border-radius: 10px;
font-family: 'poppins-bold', sans-serif !important;
font-weight: bold;

&::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #ff6e7f, #bfe9ff);
  transition: left 1s;
  z-index: -1;
}

&:hover::before {
  left: 0;
}

span {
  position: relative;
  z-index: 1;
}
`

const MenuButtonsBottom = styled(MenuButtons)`
    font-size:1.3em;
    width:5%;
`
const WebsiteName = styled.a`
    font-size: 3.2vw;
    font-weight: bold;
    background: linear-gradient(45deg, #ff6e7f, #bfe9ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
`
const WebName = styled.div`
    font-family: 'poppins-bold', sans-serif !important;
    display:flex;
    flex-direction:row;
    padding-bottom:5em;
`
const ButtomInfoWrapper = styled.div`
    display:flex;
    flex-direction:row;
    gap:6em;
    padding-top:10em;
    position:relative;
    width:100%;
    justify-content:center;

    &::before{
        content: '';
        position: absolute;
        left: 0;
        width: 100%;
        height:100%; 
        background: rgb(0,0,0.3);
        opacity:0.12;
        z-index:-1;
    }
`

const FullLoginMenu = ({isVisible, setIsVisible, animationState, setAnimationState}) => {

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [registerEmail,setRegisterEmail] = useState("");
    const [registerPassword,setRegisterPassword] = useState("");
    const [user, setUser] = useState("");

    const router = useRouter();
    const [RegisterErrorMessage, setRegisterErrorMessage] = useState('');
    const [LoginErrorMessage, setLoginErrorMessage] = useState('');
    const [RegisterIsVisible,setRegisterIsVisible] = useState(false);
 

    useEffect(() => { 
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    },[]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log("Logged out successfully");
        } catch (error) {
            console.error("Logout Error:", error);
        }
    };

    const handleClose = () => {
        setAnimationState('out');
    };
    const handleRegister = () =>{
        setRegisterIsVisible(!RegisterIsVisible);
    }

    useEffect(() => {
        let animationTimeout;
        if(isVisible){
            if (animationState !== 'out') {
            } else if (animationState == 'out') {
                animationTimeout = setTimeout(() => {
                    setIsVisible(false);
                    setAnimationState('idle');
                }, 1600); // Match animation duration
            }
            return () => clearTimeout(animationTimeout);
        }
    }, [animationState]);


    const LoginButton= async ()=>{
        try{
        const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
        setAnimationState('out');

        console.log(user);
        } catch(error){
            console.log(error.message);
            setLoginErrorMessage("Invalid Email or Password");
        }
    };
    const Register= async ()=>{
        try{
        const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword);
        console.log(user);
        } catch(error){
            console.log(error.message);
            setRegisterErrorMessage("Invalid Email");

        }
    }
    return(
        <>
        <ContentWrapper className="fullscreen-menu" style={{ display: isVisible ? 'flex' : 'none' }} $animationState={animationState}>
            <WindowWrapper>
                <MenuWindow $animationState={animationState}>
                    <ExitMenuWrapper>
                    <ExitMenu onClick={handleClose}>X</ExitMenu>
                    </ExitMenuWrapper>
                    <MenuButtonWrapper>
                        <WebName>
                             <WebsiteName href="/">Artclet</WebsiteName>
                        </WebName>
                        <MenuButtons href = "/">
                            Connect to your wallet
                        </MenuButtons>
                    </MenuButtonWrapper>
                    <ButtomInfoWrapper>
                        <MenuButtonsBottom href = "/contact">
                            Contact
                        </MenuButtonsBottom>
                        <MenuButtonsBottom href = "/about">
                            About
                        </MenuButtonsBottom>
                        

                    </ButtomInfoWrapper>
                </MenuWindow>
            </WindowWrapper>
        </ContentWrapper>
        </>
    )
}

export default FullLoginMenu