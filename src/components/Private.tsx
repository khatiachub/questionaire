import styled from "styled-components"
import picture from '../images/scan2.png'
import Content from "./Content"


const Form=styled.form`
display:flex;
flex-direction:column;
width:35%;

@media (max-width:768px){
    position:absolute;
    z-index:1;
    left:50%;
    transform:translateX(-50%);
    width:84%;
}
    
`
const Label=styled.label`
    margin-top:46px;
    font-size:22px;
    font-weight:700;
    line-height:22.6px;
`
const Input=styled.input`
    width:100%;
    height:40px;
    margin-top:15px;
    outline:none;
    border:0.8px solid #232323;
`
const Line=styled.div`
    width:237px;
    height:1px;
    background-color:#000;
    margin-top:15vh;
    margin-left:4px;
`
const Paragraph=styled.p`
    font-size:16px;
    font-weight:400;
    line-height:19px;
    color:#626262;
    width:365px;
    margin-top:10px;
`
export default function Private(){
    return(
        <>
        <Content picture={picture} inputs={
            <Form>
            <Label>სახელი*</Label>
            <Input></Input>
            <Label>გვარი*</Label>
            <Input></Input>
            <Label>მეილი*</Label>
            <Input></Input>
            <Line></Line>
            <Paragraph>*-ით მონიშნული ველების შევსება სავალდებულოა</Paragraph>
        </Form>
        }/>
        </>
    )
}