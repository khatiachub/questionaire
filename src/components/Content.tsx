import styled from "styled-components"
import Header from "./Header"
import { createGlobalStyle } from 'styled-components'
// import arrow from '../images/Vector 2.png'
import { useLocation } from "react-router-dom"

const GlobalStyle=createGlobalStyle`
body{
    background-color:#e5e7e9;
}
`
const Wraper=styled.div`
display:flex;
width:85%;
margin:0 auto;
justify-content:space-between;
`
const Image=styled.img`
width:60%;
height:800px;
object-fit:cover;
@media (max-width:1620px){
    max-width:704px;
    width:100%;
    height:700px;
}
@media (max-width:1300px){
    max-width:554px;
    width:100%;
    height:500px;
}
@media (max-width:1024px){
    max-width:400px;
    width:100%;
    height:500px;
}
@media (max-width:768px){
    position:relative;
    margin:0 auto;
    width:85%;
}
    
`


export default function Content(props:any){   
    const location=useLocation();      
    return(
        <>
          <GlobalStyle/>
          <Header page={location.pathname==='/private'?'1/4':location.pathname==='/covidstatus'?'2/4':location.pathname==='/vaccination'?'3/4':location.pathname==='covidpolice'?'4/4':null}/>
          <Wraper>
             {props.inputs}
              <Image src={props.picture}></Image>
          </Wraper> 
          {/* <ImgArrowleft onClick={props.click} src={props.leftarrow}></ImgArrowleft> */}
          {/* <ImgArrow onClick={props.handleClick} src={props.arrow}></ImgArrow> */}
        </>
    )
}