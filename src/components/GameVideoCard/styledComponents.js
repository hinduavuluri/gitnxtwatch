import styled from 'styled-components'

export const VideoCardItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 350px;
  margin-bottom: 30px;
  margin-right: 20px;
`
export const GameImage = styled.img`
  height: 270px;
  border-radius: 6px;
  margin-bottom: 10px;
  width: 190px;
`
export const GameTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.color};
  font-weight: bold;
`
export const GameViews = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.color};
`
