import styled from 'styled-components'

export const VideoCardDiv = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 15px;
  margin-bottom: 18px;
  width: 150px;
  height: 320px;
  flex-wrap: wrap;
`
export const VideoCardImg = styled.img`
  height: 150px;
  width: 240px;
  margin-bottom: 10px;
`
export const VideoDetails = styled.div`
  display: flex;
  flex-direction: row;
`
export const ProfileImage = styled.img`
  height: 60px;
  width: 40px;
  margin-right: 10px;
`
export const VideoContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const VideoTitle = styled.p`
  font-family: 'roboto';
  font-size: 17px;
  font-weight: 600;
  color: ${props => props.color};
`
export const Name = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.color};
`
export const ViewAndDate = styled.div`
  display: flex;
  flex-direction: row;
`
export const Views = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.color}
  margin-right: 7px;
`
export const Date = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.color};
`
export const Dot = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
