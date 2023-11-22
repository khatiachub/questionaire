import styled from "styled-components"
import star1 from "../images/Frame1.png"
import star2 from "../images/Frame2.png"

const Background=styled.div`
    width:100%;
    height:100vh;
    background-color:#000;
    display:flex;
    justify-content:center;
    align-items:center;
`
const Text=styled.p`
    font-size:64px;
    font-weight:700;
    color:#fff; 
    line-height:76px;
    text-align:center;
    letter-spacing:24px;
    margin-left:10px;
    @media (max-width: 768px) {
    font-size:30px;
  }
    `
const Image1=styled.img`
    position:absolute;
    left:35%;
    top:35%;
`
const Image2=styled.img`
    position:absolute;
    left:60%;
    top:58%;
`
export default function Gratitude(){
    return(
        <>
        <Background>
            <Image1 src={star1} alt="star" ></Image1>
            <Image2 src={star2} alt="star" ></Image2>
            <Text>მადლობა</Text>
        </Background>
        </>
    )
}