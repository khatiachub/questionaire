import styled,{keyframes} from "styled-components"
import {Link} from 'react-router-dom'
import picture from '../images/Vector (11).png'

const MainWraper=styled.div`
 width:100%;
 background-color:#e5e7e9;
 height:100vh;
 position: relative;
`
const zoomOut = keyframes`
  0% {
    width:100%;
    height: 100%;
    top:0;
    left:0;
  }
  100% {
    width:100px;
    height: 100px;
    top:50%;
    left:50%;
    transform:translate(-50%);
    border-radius:50%;
  }
`;
const Image=styled.img`
      position:absolute;
      /* top:50%; */
      /* left:50%; */
      /* transform:translate(-50%); */
      object-fit:cover;
      animation: ${zoomOut} 0.3s ease-in-out forwards;
      transform-origin: center;
      transform: width 50px ;
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





