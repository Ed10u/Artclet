import React,{useState,useEffect} from 'react';
import styled,{keyframes} from 'styled-components';
import {useScrollValue} from '@/components/customHook/scrollValue'
import {useRouter} from 'next/router';



const MainStore =()=>{
    const router = useRouter();

    const HandleRedirect = () => {
      router.push('/itemPage');
    };
    const ScrollValue = useScrollValue();

    const [style, setStyle] = useState({ opacity: 0});
    const [styleContent2, setstyleContent2] = useState({ opacity: 0});

    useEffect(() => {
      const handleScroll = () => {
        const shouldScrollDown = window.scrollY > 1500&&window.scrollY<2500;
        const showContent1 = window.scrollY > 640&&window.scrollY<1200;
        if (showContent1) {
          setStyle({ opacity: 1});
        } else {
          setStyle({ opacity: 0 });
        }
        if (shouldScrollDown) {
          setstyleContent2({ opacity: 1});
        }
        else {
          setstyleContent2({ opacity: 0});
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <>
        <HomePageContainer2>
            <TopHalfContainer>
                <LabelsTitle>
                    <ItemLabel>
                      <Name>Name</Name>
                      <Volume>Volume</Volume>
                      <Price>Price</Price>
                    </ItemLabel>
                    <ItemLabel>
                      <Name>Name</Name>
                      <Volume>Volume</Volume>
                      <Price>Price</Price>
                    </ItemLabel>
                </LabelsTitle>
                <ItemList>
                    <Item onClick={HandleRedirect}>
                        <Icon>
                            <img src = "./icon.png" alt = "icon"/>
                        </Icon>
                        <Name>
                            Genodo
                        </Name>
                        <Volume>
                            1
                        </Volume>
                        <ItemPrice>
                            99 ETH
                        </ItemPrice>

                    </Item>
                </ItemList>
            </TopHalfContainer>
            <DiscrpitionWrapper>
            </DiscrpitionWrapper>
            
        </HomePageContainer2>
        </>
    );
    };

const Item = styled.button`
    display:flex;
    flex-direction:row;
    gap:2vw;
    width:47%;
    background-color:white;
    border-radius:10px;
    padding:1vw;
    border:none;
    cursor:pointer;
    &:hover{
        transform:scale(1.01);
    }
`
const Icon = styled.div`
`
const ItemList = styled.div`
    display:flex;
    flex-direction:row;
    gap:2vw;
    width:100%;
`
const LabelsTitle = styled.div`
    display:flex;
    justify-content:left;
    width:100%;
    font-size:1.5vw;
    gap:2vw;
`;

const Name = styled.div`
    font-family: 'poppins-bold', sans-serif !important;
    font-weight: bold;
    font-size:1.5vw;
    color:black;
    item-align:center;
    text-align:center;

`;

const Volume = styled(Name)`
    padding-left:15vw;
    `;
const Price = styled(Name)`
    `;
const ItemPrice = styled.div`
font-family: 'poppins-bold', sans-serif !important;
font-weight: bold;
font-size:1.5vw;
padding-left:5vw;
`;

const ItemLabel = styled.div`
    display:flex;
    justify-content:space-between;
    width:49%;

`

const HomePageContainer2 = styled.div`
    font-family: 'poppins-bold', sans-serif !important;
    font-weight: bold;
    display: flex;
    flex-direction:column;
    z-index: 2;
    position:relative;
    padding-top:15vw;
    height:150rem;
    background-color: #bfe9ff;
    opacity:1;
    width:100%;
    align-items:center;

`;

const TopHalfContainer = styled.div`
    width:90%;
    font-size:2.5vw;
    text-align:center;
    color:black;
    align-items:center;
    display:flex;
    flex-direction:column;
    position:relative;
    opacity: ${props => props.opacity};
    transform: translateY(${props => props.$translateY});
    transition: all 0.7s linear;
    gap:2vw;
`;
//(oldValue-oldMin)*newRange/oldRange+newMin

const DiscrpitionWrapper = styled(TopHalfContainer)`
    opacity: ${props => props.opacity};
    transform: translateY(${props => props.$translateY});
    transition: all 0.7s linear;
    top:30%;
`
export default MainStore;