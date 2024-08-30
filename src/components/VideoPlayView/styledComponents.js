import styled from 'styled-components'

export const VideoPlayer = styled.div`
  padding: 20px;
`
export const VideoPlayerTitle = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.color};
`
export const VideoStatusContainer = styled.div`
  display: f;ex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const ViewsAndDuration = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: ${props => props.color};
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Button = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
`
export const SocialBtn = styled.button`
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  color: ${props => props.color};
`
export const Text = styled.span`
  margin-left: 5px;
`
export const HrLine = styled.hr`
  border: 1px solid #909090;
`
export const ChannelContainer = styled.div`
  display: flex;
`
export const ChannelImg = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50px;
  margin-right: 20px;
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
