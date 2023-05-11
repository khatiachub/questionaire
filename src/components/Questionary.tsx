import styled from "styled-components"
import vector from '../images/Vector (9).png'
import {Link} from 'react-router-dom'

const MainWraper=styled.div`
 width:100%;
 background-color:#e5e7e9;
 height:100vh;
 /* overflow-y:hidden; */
`
const Image=styled.img`
 width:100px; 
 height:100px; 
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
 transform:translate(-50%,-50%);
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
          <ImageBox>
           <Image src={vector}></Image>
           <Title to={'/private'}>კითხვარის დაწყება</Title>
           </ImageBox>
         </MainWraper>
      </div>
  )
}
export default Questionary





