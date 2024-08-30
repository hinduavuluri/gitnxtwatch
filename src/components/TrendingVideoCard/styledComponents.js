import styled from 'styled-components'

export const TrendingVideoDiv = styled.li`
  height: 200px;
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
`
export const TrendingVideoImg = styled.img`
  height: 180px;
  width: 30%;
  margin-right: 20px;
`
export const VideoDetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
`
export const VideoDetailsHead = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.color};
`
export const VideoDetailsNote = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.color};
`
export const ProfileImage = styled.img`
  height: 29px;
  width: 25px;
`
