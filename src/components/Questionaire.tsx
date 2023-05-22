import styled from "styled-components"
import {Link} from 'react-router-dom'
import picture from '../images/Vector (11).png'

const MainWraper=styled.div`
 width:100%;
 background-color:#e5e7e9;
 height:100vh;
 position: relative;
`
const Image=styled.img`
      position:absolute;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
      object-fit:cover;
      width:150px;
      height:150px;
      border-radius:50%;
 `
 const Title=styled(Link)`
 font-size:30px;
 font-weight:700;
 line-height:36px;
 text-align:center;
 margin-top:101px;
 text-decoration:none;
 color: #232323;
 `
 const ImageBox=styled.div`
 position:absolute;
 top:50%; 
 left:50%;
 transform:translate(-50%);

 width:200px;
 height:300px;
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 `

function Questionary(){
  return(
      <div>
        <MainWraper>
        <Image src={picture}></Image>

          <ImageBox>
           <Title to={'/private'}>კითხვარის დაწყება</Title>
           </ImageBox>
         </MainWraper>
      </div>
  )
}
export default Questionary





