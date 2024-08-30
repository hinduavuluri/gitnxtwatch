import styled from 'styled-components'

export const GameVideosContainer = styled.div`
  display: flex;
  background-color: ${props => props.bgColor}
  flex-direction: column;
  padding: 10px;

`
export const GameVideosTitle = styled.div`
  display: flex;
  align-items: center;
`
export const GameIconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 80px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const GameTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: bold;
  color: ${props => props.color};
`
export const GameVideosList = styled.ul`
  list-style: none;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`
