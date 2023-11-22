import styled from "styled-components"
import Header from "./Header"
import { createGlobalStyle } from 'styled-components'

const Wraper=styled.div`
display:flex;
width:85%;
margin:0 auto;
justify-content:space-between;
`
const Image=styled.img`
width:55%;
height:800px;
object-fit:cover;
@media (max-width:1620px){
    max-width:704px;
    width:100%;
    height:700px;
}
@media (max-width:1350px){
    max-width:510px;
    width:100%;
    height:500px;
}
@media (max-width:1024px){
    max-width:370px;
    width:100%;
    height:500px;
}
@media (max-width:768px){
    position:relative;
    margin:0 auto;
    width:85%;
}
    
`

const GlobalStyle=createGlobalStyle`
body{
    background-color:#e5e7e9;
}
`
export default function Content(props:any){  
     
    return(
        <>
         <Header page={location.hash==='#/private'?'1/4':location.hash==='#/covidstatus'?'2/4':location.hash==='#/vaccination'?'3/4':location.hash==='#/covidpolice'?'4/4':null}/>
          <Wraper>
          <GlobalStyle/>
             {props.inputs}
              <Image src={props.picture}></Image>
          </Wraper> 
        </>
    )
}