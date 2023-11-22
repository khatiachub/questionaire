import Content from './Content';
import picture from '../images/vaccinate2.png';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import Leftarrow from '../images/Vector 7.png';
import arrow from '../images/Vector 2.png';

const Label = styled.label`
  margin-top: 46px;
  font-size: 19px;
  font-weight: 700;
  line-height: 22.6px;
  @media (max-width: 768px) {
    font-weight:600;
    font-size:20px;
}
`;
const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 15px;
  outline: none;
  border: 0.8px solid #232323;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 45%;
  @media (max-width: 768px) {
    position: absolute;
    z-index: 1;
    left: 50%;
    transform: translateX(-50%);
    width: 84%;
  }
`;
const Legend = styled.legend`
  margin-top: 46px;
  font-weight: 700;
  font-size: 22px;
  line-height: 26.55px;
  @media (max-width: 768px) {
    font-weight:600;
    font-size:20px;
}
`;
const InputNum = styled.input`
  max-width: 513px;
  width: 100%;
  height: 50px;
  margin-top: 23px;
  outline: none;
`;
const Radio = styled.label`
  font-size: 20px;
  font-weight: 400;
`;
const ImgArrow = styled.img`
   
`;
const ImgArrowleft=styled.img`
 
`
const Wraper=styled.div`
  width:100%;
  position: relative;
  height:100vh;
  margin-top:0px;
`
const ArrowWraper=styled.div`
  display:flex;
  justify-content:space-around;
  position:fixed;
  left:50%;
  transform:translateX(-50%);
  width:150px;
  z-index:100 ;
  top:95vh;
`
const Button = styled.button`
  background-color: #e5e7e9;
  border: none;
`;
const ErrorMessage = styled.p`
  color: #f15524;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  margin-top:19px;
`;

export default function CovidStatus() {
  const nav = useNavigate();
  const onLeftArrowClick = () => {
    nav(-1);
  };

  const [selectedOption, setSelectedOption] = useState<string>('');
  const [select, setSelect] = useState<string>('');
  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setSelectedOption(target.value);
    if (!selectedOption) {
      setError('');
    }
  };
  const handleChange2 = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setSelect(target.value);
    if (!select) {
      setError2('');
    }
  };
  const [error, setError] = useState<string>('');
  const [error2, setError2] = useState<string>('');
  const onClick = (e: any) => {
    e.preventDefault();
    if (
      selectedOption === 'no' ||
      selectedOption === 'now' ||
      (numbers.number && numbers.quantity) ||
      numbers.date
    ) {
      nav('/privateroute',{
        state:{
            select:select,
            selectedOption:selectedOption,
            number:numbers?.number,
            quantity:numbers?.quantity,
            date:numbers?.date
        }
    })
    } else if (!selectedOption) {
      setError('გთხოვთ მონიშნოთ პასუხი');
    } else if (!select) {
      setError2('გთხოვთ მონიშნოთ პასუხი');
    } else if (!numbers.number || !numbers.quantity || !numbers.date) {
      setErrorNumber('ამ ველის შევსება სავალდებულოა');
    }
  };
 
  const [errorNumber, setErrorNumber] = useState('');
  const [numbers, setNumbers] = useState({
    number: '',
    quantity: '',
    date: '',
  });
  const handleNumberChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;
    setNumbers({ ...numbers, [name]: value });
  };


  useEffect(() => {
    try {
      const savedState = localStorage.getItem('value');
      if (savedState) {
        const parsedState = JSON.parse(savedState);
        setSelectedOption(parsedState);
      }
    } catch (error) {
      console.error('Error parsing saved state:', error);
    }
  }, []);

   useEffect(() => {
    localStorage.setItem('value', JSON.stringify(selectedOption));
  }, [selectedOption]);




  useEffect(() => {
    try {
      const savedState = localStorage.getItem('state');
      if (savedState) {
        const parsedState = JSON.parse(savedState);
        setSelect(parsedState);
      }
    } catch (error) {
      console.error('Error parsing saved state:', error);
    }
  }, []);
   useEffect(() => {
    localStorage.setItem('state', JSON.stringify(select));
  }, [select]);


  useEffect(() => {
    try {
      const savedState = localStorage.getItem('myState');
      if (savedState) {
        const parsedState = JSON.parse(savedState);
        setNumbers(parsedState);
      }
    } catch (error) {
      console.error('Error parsing saved state:', error);
    }
  }, []);
   useEffect(() => {
    localStorage.setItem('myState', JSON.stringify(numbers));
  },[numbers]);

  return (
    <Wraper>
      <Content
        click={onLeftArrowClick}
        picture={picture}
        inputs={
          <Form onSubmit={onClick}>
            <Legend>გაქვს გადატანილი Covid-19?*</Legend>
            <div>
              <input
                style={{ marginTop: 19 }}
                checked={selectedOption === 'yes'}
                type='radio'
                id='yes'
                onChange={(e) => {
                  handleChange(e);
                }}
                name='fav_language'
                value='yes'
              />
              <Radio htmlFor='html'>კი</Radio>
            </div>
            <div>
              <input
                style={{ marginTop: 19 }}
                checked={selectedOption === 'no'}
                type='radio'
                onChange={(e) => {
                  handleChange(e);
                }}
                name='fav_language'
                value='no'
              />
              <Radio htmlFor='css'>არა</Radio>
            </div>
            <div>
              <input
                style={{ marginTop: 19 }}
                checked={selectedOption === 'now'}
                type='radio'
                onChange={(e) => {
                  handleChange(e);
                }}
                name='fav_language'
                value='now'
              />
              <Radio htmlFor='javascript'>ახლა მაქვს</Radio>
              {<ErrorMessage>{error}</ErrorMessage>}
            </div>
            {selectedOption === 'yes' ? (
              <>
                <Legend>ანტისხეულების ტესტი გაქვს გაკეთებული?*</Legend>
                <div>
                  <input
                    style={{ marginTop: 19 }}
                    checked={select === 'positive'}
                    type='radio'
                    id='html'
                    onChange={(e) => {
                      handleChange2(e);
                    }}
                    name='favlanguage'
                    value='positive'
                  />
                  <Radio htmlFor='html'>კი</Radio>
                </div>
                <div>
                  <input
                    style={{ marginTop: 19 }}
                    checked={select === 'negative'}
                    type='radio'
                    id='css'
                    onChange={(e) => {
                      handleChange2(e);
                    }}
                    name='favlanguage'
                    value='negative'
                  />
                  <Radio htmlFor='css'>არა</Radio>
                </div>
                {<ErrorMessage>{error2}</ErrorMessage>}
              </>
            ) : null}
            {select === 'positive' && selectedOption === 'yes' ? (
              <>
                <Label>
                  თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და
                  ანტისხეულების რაოდენობა*
                </Label>
                <InputNum
                  type='number'
                  placeholder='რიცხვი'
                  onChange={handleNumberChange}
                  name='number'
                  value={numbers.number}
                ></InputNum>
                {numbers.number ? null : (
                  <ErrorMessage>{errorNumber}</ErrorMessage>
                )}
                <InputNum
                  type='number'
                  placeholder='ანტისხეულების რაოდენობა'
                  onChange={(e) => handleNumberChange(e)}
                  name='quantity'
                  value={numbers.quantity}
                ></InputNum>
                {numbers.quantity ? null : (
                  <ErrorMessage>{errorNumber}</ErrorMessage>
                )}
              </>
            ) : null}
            {select === 'negative' && selectedOption === 'yes' ? (
              <>
                <Label htmlFor=''>
                  მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა
                  Covid-19*
                </Label>
                <Input
                  type='date'
                  onChange={handleNumberChange}
                  value={numbers.date}
                  name='date'
                ></Input>
                {numbers.date ? null : (
                  <ErrorMessage>{errorNumber}</ErrorMessage>
                )}
              </>
            ) : (
              ''
            )}
            <ArrowWraper>
            <Button onClick={onLeftArrowClick}>
              <ImgArrowleft src={Leftarrow}>
            </ImgArrowleft>
            </Button>
            <Button type='submit'>
              <ImgArrow
                style={{
                  opacity:
                    ((selectedOption &&
                      select &&
                      numbers.number &&
                      numbers.quantity) ||
                    numbers.date)||selectedOption==='no'||selectedOption==='now'
                      ? '100%'
                      : '50%',
                }}
                src={arrow}
              ></ImgArrow>
            </Button>
            </ArrowWraper>
          </Form>
        }
      />
    </Wraper>
  );
}
