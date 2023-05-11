import Content from "./Content"
import picture from '../images/vaccinate2.png'
import styled from "styled-components"



const Label=styled.label`
     margin-top:46px;
     font-size:19px;
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
export default function CovidStatus(){
    return(
        <>
        <Content picture={picture} inputs={
            <Form>
                <legend>გაქვს გადატანილი Covid-19?*</legend>
                <div>
                <input type="radio" id="html" name="fav_language" value="HTML"/>
                <label htmlFor="html">კი</label>
                </div>
                <div>
                <input type="radio" id="css" name="fav_language" value="CSS"/>
                <label htmlFor="css">არა</label>
                </div>
                <div>
                <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
                <label htmlFor="javascript">ახლა მაქვს</label>
                </div>

                <legend>ანტისხეულების ტესტი გაქვს გაკეთებული?*</legend>
                <div>
                <input type="radio" id="html" name="fav_language" value="HTML"/>
                <label htmlFor="html">კი</label>
                </div>
                <div>
                <input type="radio" id="css" name="fav_language" value="CSS"/>
                <label htmlFor="css">არა</label>
                </div>
                <Label htmlFor="">მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*</Label>
                <Input type="date"></Input>
            </Form>
        }/>
        </>
    )
}