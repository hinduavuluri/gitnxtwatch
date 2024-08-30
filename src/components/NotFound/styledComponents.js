import styled from 'styled-components'

export const NotFoundDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`
export const NotFoundImg = styled.img`
  height: 250px;
  width: 300px;
  margin-bottom: 20px;
`
export const NotFoundHead = styled.h1`
  font-family: 'Roboto';
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  color: ${props => props.color};
`
export const NotFoundNote = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  text-align: center;
  color: ${props => props.noteColor};
`
