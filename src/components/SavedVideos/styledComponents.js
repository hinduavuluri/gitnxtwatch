import styled from 'styled-components'

export const SavedVideosDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
`
export const SavedVideoTitle = styled.div`
  display: flex;
  align-items: center;
`
export const SavedVideoIconDiv = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 80px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SavedVideoHeading = styled.h1`
  font-family: Roboto;
  font-size: 25px;
  color: ${props => props.color};
`
export const SavedVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`
export const NoVideosView = styled.div`
  display: flex;
  flex-direction: column;
`
export const NoVideosImg = styled.img`
  height: 200px;
  width: 300px;
  margin-bottom: 20px;
  margin-top: 50px;
`
export const NoVideosHeading = styled.h1`
  font-family: 'roboto';
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: ${props => props.color};
`
export const NoVideosNote = styled.p`
  font-family: 'roboto';
  font-size: 20px;
  color: ${props => props.color};
`
