// import { useForm,Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
import Leftarrow from '../images/Vector 7.png';
import arrow from '../images/Vector 2.png';
import picture from '../images/doctor2.png';
import Content from './Content';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  margin-top: 19px;
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
const Label = styled.label``;
const ImgArrow = styled.img`
  position: absolute;
  left: 53%;
  top: 120vh;
  bottom: 40px;
`;
const ImgArrowleft = styled.img`
  position: absolute;
  left: 45%;
  top: 120vh;
`;
const Button = styled.button`
  background-color: #e5e7e9;
  border: none;
`;
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
  width: 337px;
  margin-top: 39px;
  margin-left: 20px;
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
    nav('/covidpolice');
  };
  const nav = useNavigate();
  const onLeftArrowClick = () => {
    nav(-1);
  };

  const response = register('response', { required: true });
  const registered = register('registered', { required: true });
  const [state, setState] = useState<string>();
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
  const vaccination = register('vaccination', { required: true });
  const handleChange3 = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setVaccine(target.value);
  };

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
            <div>
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
            <div>
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
                <div>
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
                <div>
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
                <div>
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
                <div>
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

                <div>
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

                <div>
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

            <div style={{ display: 'flex' }}>
              <Button onClick={onLeftArrowClick}>
                <ImgArrowleft src={Leftarrow}></ImgArrowleft>
              </Button>
              <Button type='submit'>
                <ImgArrow src={arrow}></ImgArrow>
              </Button>
            </div>
          </Form>
        }
      />
    </div>
  );
}
