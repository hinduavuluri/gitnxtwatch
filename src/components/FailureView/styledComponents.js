import styled from 'styled-components'

export const FailureViewDivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureViewImg = styled.img`
  height: 250px;
  width: 210px;
  margin-bottom: 20px;
`
export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: bold;
  color: ${props => props.color};
`
export const FailureNote = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 300;
  color: ${props => props.noteColor};
`
export const RetryBtn = styled.button`
  height: 50px;
  width: 110px;
  border-radius: 6px;
  border-width: 0px;
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
