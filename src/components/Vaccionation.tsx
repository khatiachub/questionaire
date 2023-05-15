// import { useForm,Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
import Leftarrow from '../images/Vector 7.png'
import arrow from '../images/Vector 2.png'
import picture from '../images/doctor2.png'
import Content from "./Content"
import styled from "styled-components"


const Form=styled.form`
       
`
export default function Vaccination(){
       const HandleClick=()=>{

       }
       const nav=useNavigate()
       const onLeftArrowClick=()=>{
              nav(-1)
       }
       return(
        <div>
            <Content 
            click={onLeftArrowClick} 
            leftarrow={Leftarrow} 
            arrow={arrow} handleClick={HandleClick} 
            picture={picture} 
            inputs={
              <Form>
                     
              </Form>
            }
            />
        </div>
       )
    
}