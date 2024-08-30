import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  overflow-y: auto;
  margin-top: 50px;
  margin-botom: 50px;
`
export const BannerDiv = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 200px;
  width: 100%;
  background-size: cover;
  padding: 20px;
  display: ${props => props.display};
  justify-content: space-between;
`
export const BannerLeftDiv = styled.div`
  display: flex;
  flex-direction: column;
`
export const BannerImg = styled.img`
  height: 70px;
  widh: 200px;
  margin-bottom: 10px;
`
export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 24px;
  color: #1e293b;
  font-weight: 500;
`
export const BannerBtn = styled.button`
  height: 50px;
  width: 130px;
  border-width: 2px;
  border-color: #1e293b;
  color: #1e293b;
  font-size: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const BannerRightPart = styled.div``
export const BannerCloseBtn = styled.button`
  height: 30px;
  width: 30px;
`
export const SearchDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 60%;
`
export const InputContainer = styled.input`
  height: 50px;
  border-radius: 6px;
  border-color: ${props => props.color};
  font-size: 30px;
`
export const SearchButton = styled.button`
  height: 50px;
  width: 40px;
  background-color: #475569;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.color};
`
