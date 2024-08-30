import styled from 'styled-components'

export const VideosList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
`
export const EmptyVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoVideosImg = styled.img`
  height: 250px;
  width: 150px;
  margin-bottom: 20px;
`
export const NoVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  color: ${props => props.headingColor};
`
export const NoVideosText = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.textColor};
`
export const RetryBtn = styled.button`
  height: 60px;
  width: 140px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-familt: 'Roboto';
  font-size: 30px;
  background-color: #00306e;
  border-width: 0px;
  border-radius: 5px;
  color: #ffffff;
`
