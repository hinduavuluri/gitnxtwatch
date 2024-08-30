import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  position: fixed;
  height: 60px;
  width: 100%;
  justify-content: space-between;
  background-color: ${props => props.bgColor};
`
export const NavLogo = styled.img`
  height: 40px;
  width: 170px;
`
export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ThemeBtn = styled.button`
  background: none;
  border: none;
  margin-right: 10px;
`
export const ProfileImg = styled.img`
  height: 40px;
  width: 30px;
  margin-right: 10px;
`
export const LogoutBtn = styled.btn`
  height: 40px;
  width: 120px;
  font-family: 'Roboto';
  font-size: 25px;
  border-width: 1px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border-color: ${props => props.color};
`
export const ModalContainer = styled.div`
  background-color: #475569;
  border-width: 0px;
  border-radius: 4px;
  padding: 10px;
  height: 200px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const ModalText = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #f1f1f1;
  text-align: center;
`
export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const CloseBtn = styled.button`
  height: 50px;
  width: 100px;
  font-family: 'Roboto';
  font-size: 29px;
  border-width: 0px;
  background-color: transparent;
  color: #f1f1f1;
  margin-right: 15px;
`
export const ConfirmBtn = styled.button`
  height: 50px;
  width: 100px;
  font-family: 'Roboto';
  font-size: 29px;
  border-width: 0px;
  background-color: #3b82f6;
  color: #f1f1f1;
`
