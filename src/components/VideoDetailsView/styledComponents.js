import styled from 'styled-components'

export const VideoDetailsList = styled.div`
  padding: 10px;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
`
export const VideoListDiv = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`
