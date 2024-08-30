import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
`
export const FormContainer = styled.form`
  background-color: #ffffff;
  box-shadow: shadow;
  padding: 23px;
  height: 40vh;
  width: 30vw;
`
export const WatchLogo = styled.img`
  height: 70px;
  width: 180px;
  margin-bottom: 50px;
  margin-left: 50px;
`
export const LabelText = styled.label`
  font-family: 'Roboto';
  font-size: 18px;
  color: #0f0f0f;
  font-weight: bold;
`
export const InputContainer = styled.input`
  height: 50px;
  border-radius: 7px;
  border-color: #0f0f0f;
  font-family: 'Roboto';
  font-size: 20px;
  color: #0f0f0f;
  margin-bottom: 20px;
`
export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const CheckBoxInput = styled.input`
  height: 50px;
  width: 50px;
  margin-right: 20px;
`
export const Button = styled.button`
  background-color: blue;
  height: 50px;
  border-width: 0px;
  color: #ffffff;
  font-size: 28px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: red;
`
