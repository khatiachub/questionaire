import styled from "styled-components"
import logo from '../images/LOGO-02 3 (2).png'

const HeaderBox=styled.div`
width:85%;
height:20px;
display:flex;
justify-content:space-between;
border-bottom:1.8px solid #232323;
padding-bottom:10px;
margin:0 auto;
margin-top:55px;
`
const HeaderNumber=styled.p`
font-weight:700;
font-size:30px;
`

export default function Header(props:any){
    return(
        <>
        <HeaderBox>
            <img src={logo}/>
            <HeaderNumber>{props.page}</HeaderNumber>
        </HeaderBox>
        </>
    )
}