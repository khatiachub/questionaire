import { useNavigate } from 'react-router-dom';
import Leftarrow from '../images/Vector 7.png';
import arrow from '../images/Vector 2.png';
import picture from '../images/doctor2.png';
import Content from './Content';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width:50%;
  @media (max-width: 768px) {
   position: absolute;
   z-index: 1;
   left: 50%;
   transform: translateX(-50%);
   width: 84%;
 }
`;
const Input = styled.input`
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  margin-top: 22px;
`;
const Legend = styled.legend`
  margin-top: 46px;
  font-weight: 700;
  font-size: 22px;
  line-height: 26.55px;
  @media (max-width: 768px) {
    font-weight: 600;
    font-size: 20px;
  }
`;
const Label = styled.label`
     font-size:16px;
     max-width:534px;
     width:100%;

`;
const ImgArrowleft = styled.img`
`;
const ArrowWraper=styled.div`
  display:flex;
  left:50%;
  transform:translateX(-50%);
  justify-content:space-between;
  position: absolute;
  top: 90vh;
  @media screen and (max-width:768px) {
    top:77vh;
  }
  width:270px;
`
const Button = styled.button`
  background-color: #208298;
  border: none;
  width:180px;
  height:56px;
  border-radius:42px;
  color:#fff;
  cursor: pointer;
`;
const ButtonLeft=styled.button`
   background-color: #e5e7e9;
   border: none;
`
const ErrorMessage = styled.p`
  color: #f15524;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  margin-top: 19px;
`;
const Paragraph = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  max-width: 300px;
  width:100%;
  margin-top: 39px;
  margin-left: 20px;
  @media screen and (max-width:768px) {
    font-size: 17px;
  }
`;
const Atag = styled.a`
  margin-top: 10px;
  margin-left: 20px;
  text-decoration: none;
`;

export default function Vaccination() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const HandleClick = () => {
    nav('/gratitude',{
      state:{
        value:value,
        state:state,
        vaccine:vaccine
      }
    });
  };
  const nav = useNavigate();
  const onLeftArrowClick = () => {
    nav(-1);
  };


  const [state, setState] = useState<string>();
  const response = register('response', { required: true });
  const registered = register('registered', { required: state==='agree'?true:false});
  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setState(target.value);
  };
  const [value, setValue] = useState<string>('');
  const handleChange2 = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setValue(target.value);
  };
  const [vaccine, setVaccine] = useState<string>('');
  const vaccination = register('vaccination', { required:state==='deny'?true:false });
  const handleChange3 = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setVaccine(target.value);
  };


  useEffect(() => {
    try {
      const savedState = localStorage.getItem('myState');
      if (savedState) {
        const parsedState = JSON.parse(savedState);
        setValue(parsedState);
      }
    } catch (error) {
      console.error('Error parsing saved state:', error);
    }
  }, []);

   useEffect(() => {
    localStorage.setItem('myState', JSON.stringify(value));
  }, [value]);


  useEffect(() => {
    try {
      const savedState = localStorage.getItem('vaccine');
      if (savedState) {
        const parsedState = JSON.parse(savedState);
        setVaccine(parsedState);
      }
    } catch (error) {
      console.error('Error parsing saved state:', error);
    }
  }, []);



   useEffect(() => {
    localStorage.setItem('vaccine', JSON.stringify(vaccine));
  }, [vaccine]);


 
  useEffect(() => {
    try {
      const savedState = localStorage.getItem('state');
      if (savedState) {
        const parsedState = JSON.parse(savedState);
        setState(parsedState);
      }
    } catch (error) {
      console.error('Error parsing saved state:', error);
    }
  }, []);
  

  
   useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, [state]);
  return (
    <div>
      <Content
        click={onLeftArrowClick}
        leftarrow={Leftarrow}
        arrow={arrow}
        handleClick={HandleClick}
        picture={picture}
        inputs={
          <Form onSubmit={handleSubmit(HandleClick)}>
            <Legend>უკვე აცრილი ხარ?*</Legend>
            <div style={{display:'flex',alignItems:'baseline'}}>
              <Input
                checked={state === 'agree'}
                type='radio'
                value='agree'
                {...response}
                onChange={(e) => {
                  response.onChange(e);
                  handleChange(e);
                }}
              ></Input>
              <Label>კი</Label>
            </div>
            <div style={{display:'flex',alignItems:'baseline'}}>
              <Input
                checked={state === 'deny'}
                type='radio'
                value='deny'
                {...response}
                onChange={(e) => {
                  response.onChange(e);
                  handleChange(e);
                }}
              ></Input>
              <Label>არა</Label>
            </div>
            {errors.response ? (
              <ErrorMessage>გთხოვთ მონიშნოთ პასუხი</ErrorMessage>
            ) : (
              ''
            )}

            {state === 'agree' ? (
              <>
                <Legend>აირჩიე რა ეტაპზე ხარ*</Legend>
                <div style={{display:'flex',alignItems:'baseline'}}>
                  <Input
                    checked={value === 'registered'}
                    type='radio'
                    value='registered'
                    {...registered}
                    onChange={(e) => {
                      registered.onChange(e);
                      handleChange2(e);
                    }}
                  ></Input>
                  <Label>პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</Label>
                </div>
                <div style={{display:'flex',alignItems:'baseline'}}>
                  <Input
                    checked={value === 'vaccinated'}
                    type='radio'
                    value='vaccinated'
                    {...registered}
                    onChange={(e) => {
                      registered.onChange(e);
                      handleChange2(e);
                    }}
                  ></Input>
                  <Label>სრულად აცრილი ვარ</Label>
                </div>
                <div style={{display:'flex',alignItems:'baseline'}}>
                  <Input
                    checked={value === 'notregistered'}
                    type='radio'
                    value='notregistered'
                    {...registered}
                    onChange={(e) => {
                      registered.onChange(e);
                      handleChange2(e);
                    }}
                  ></Input>
                  <Label>პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე</Label>
                </div>
                {errors.registered ? (
                  <ErrorMessage>გთხოვთ მონიშნოთ პასუხი</ErrorMessage>
                ) : (
                  ''
                )}
              </>
            ) : (
              ''
            )}
            {value === 'notregistered' && state === 'agree' ? (
              <>
                <Paragraph>რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი</Paragraph>
                <Atag href='https://booking.moh.gov.ge/'>
                  https://booking.moh.gov.ge/
                </Atag>
              </>
            ) : (
              ''
            )}
            {state === 'deny' ? (
              <>
                <Legend>რას ელოდები?*</Legend>
                <div style={{display:'flex',alignItems:'baseline'}}>
                  <Input
                    type='radio'
                    value='waitinglist'
                    {...vaccination}
                    onChange={(e) => {
                      vaccination.onChange(e);
                      handleChange3(e);
                    }}
                  ></Input>
                  <Label>დარეგისტრირებული ვარ და ველოდები რიცხვს</Label>
                </div>

                <div style={{display:'flex',alignItems:'baseline'}}>
                  <Input
                    type='radio'
                    value='notplanning'
                    {...vaccination}
                    onChange={(e) => {
                      vaccination.onChange(e);
                      handleChange3(e);
                    }}
                  ></Input>
                  <Label>არ ვგეგმავ</Label>
                </div>

                <div style={{display:'flex',alignItems:'baseline'}}>
                  <Input
                    type='radio'
                    value='planning'
                    {...vaccination}
                    onChange={(e) => {
                      vaccination.onChange(e);
                      handleChange3(e);
                    }}
                  ></Input>
                  <Label>გადატანილი მაქვს და ვგეგმავ აცრას</Label>
                </div>
                {errors.vaccination ? (
                  <ErrorMessage>გთხოვთ მონიშნოთ პასუხი</ErrorMessage>
                ) : (
                  ''
                )}
              </>
            ) : (
              ''
            )}
            {vaccine === 'notplanning' && state === 'deny' ? (
              <Atag
                style={{ marginTop: 30 }}
                href='https://booking.moh.gov.ge/'
              >
                👉 https://booking.moh.gov.ge/
              </Atag>
            ) : (
              ''
            )}
            {vaccine === 'planning' && state === 'deny' ? (
              <>
                <Paragraph>
                  ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ
                  ვაქცინის გაკეთება. 👉 რეგისტრაციის ბმული
                </Paragraph>
                <Atag href='https://booking.moh.gov.ge/'>
                  https://booking.moh.gov.ge/
                </Atag>
              </>
            ) : (
              ''
            )}

            <ArrowWraper>
              <ButtonLeft>
                <ImgArrowleft onClick={onLeftArrowClick} src={Leftarrow}></ImgArrowleft>
              </ButtonLeft>
              <Button type='submit'style={{opacity:state&&value||(state&&vaccine)?'100%':'50%'}} >
                დასრულება
              </Button>
            </ArrowWraper>
          </Form>
        }
      />
    </div>
  );
}
