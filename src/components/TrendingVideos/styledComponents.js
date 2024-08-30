import styled from 'styled-components'

export const TrendingVideosDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-y: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  background-color: ${props => props.bgColor};
`
export const TrendingVideoTitle = styled.div`
  display: flex;
  align-items: center;
`
export const TrendingVideoIconContainer = styled.div`
  height: 40px;
  width: 40px;
  border-radous: 80px;
  margin-left: 40px;
  margin-right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TrendingTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 40px;
  color: ${props => props.color};
  font-weight: bold;
`
export const TrendingVideosList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`
