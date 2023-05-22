import Content from "./Content"
import styled from "styled-components"
import picture from '../images/bike2 1.png'
import axios from 'axios';
import { useForm } from 'react-hook-form';


const Form=styled.form`
    display:flex;
    flex-direction:column;    
`
const Button=styled.button`
    background-color:#208298;
    width:180px;
    height:56px;
    border-radius:42px;
    color:#fff;
    font-size:18px;
    border:none;
    margin-top:40px;
    align-self:flex-end;
`
const Text=styled.p`
    font-size:22px;
    font-weight:400;
    line-height:27px;
    margin-top:42px;
`
const Legend = styled.legend`
  margin-top: 46px;
  font-weight: 700;
  font-size: 22px;
  line-height: 26.55px;
  max-width:622px;
  width:100%;
  @media (max-width: 768px) {
    font-weight:600;
    font-size:20px;
}
`
const Radio = styled.label`
  font-size: 20px;
  font-weight: 400;
  margin-left:15px;
`
const Input = styled.input`
   font-size: 20px;
   font-weight: 400;
   line-height: 24px;
   margin-top: 19px;
`;


export default function CovidPolice(){
    const{handleSubmit}=useForm()



    const createPost = async () => {
        const url = ' http://localhost:8000/api'; // Replace with your API endpoint URL
      
        const postData = {
            first_name: 'gela',
            last_name: 'babluani',
            email: 'gela@redberry.ge',
            had_covid: 'yes',
            had_antibody_test: true,
            antibodies:{
              test_date: "2022-04-30T13:34:31.347Z",
              number: 570,
            },
            had_vaccine: true,
            vaccination_stage: 'first_dosage_and_registered_on_the_second',
            non_formal_meetings: 'once_a_week',
            number_of_days_from_office: 3,
            what_about_meetings_in_live: "I will enjoy very much",
            tell_us_your_opinion_about_us: "It's great to be here! Just... why do guys have Postman logo? 🤔"
          
          
        };
      
        try {
          const response = await axios.post(url, postData);
          console.log(response.data); // Handle the response data as needed
        } catch (error) {
          console.error(error); // Handle the error
        }
      };
      const handleClick=async()=>{
        await createPost();

      }

    return(
        <>
        <Content 
         picture={picture}
         inputs={
        <div style={{display:'flex',flexDirection:'column'}}>
        <Text>რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო, რომელსაც ჩვენითანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი — ჩვენთან გადმოსვლის</Text>
        <Text>პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და ყოველდღიური კომუნიკაციაც გაიშვიათდა.</Text>
        <Form onSubmit={handleSubmit(handleClick)}>
            <Legend>რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*</Legend>
            <div>
                <Input type="radio"></Input>
                <Radio>კვირაში ორჯერ</Radio>
            </div>
            <div>
                <Input type="radio"></Input>
                <Radio>კვირაში ერთხელ</Radio>
            </div>
            <div>
                <Input type="radio"></Input>
                <Radio>ორ კვირაში ერთხელ</Radio>

            </div>
            <div>
                <Input type="radio"></Input>
                <Radio>თვეში ერთხელ</Radio>
            </div>

            <Button type="submit">დასრულება</Button>
        </Form>
        </div>
         }/>
        </>
    )

}




























































