import {Link, withRouter} from 'react-router-dom'
import {BsBrightnessHighFill} from 'react-icons/bs'
import {RiMoonFill} from 'react-icons/ri'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NavbarContainer,
  NavLogo,
  ActionsContainer,
  ThemeBtn,
  ProfileImg,
  ModalContainer,
  LogoutBtn,
  BtnContainer,
  CloseBtn,
  ModalText,
  ConfirmBtn,
} from './styledComponents'

const Header = props => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const color = isDarkTheme ? '#ffffff' : '#00306e'
      const changeTheme = () => {
        toggleTheme()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <NavbarContainer bgColor={bgColor}>
          <Link to="/">
            <NavLogo
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
            />
          </Link>
          <ActionsContainer>
            <ThemeBtn type="button" data-testid="theme" onClick={changeTheme}>
              {isDarkTheme ? (
                <BsBrightnessHighFill color="#ffffff" size={30} />
              ) : (
                <RiMoonFill size={30} />
              )}
            </ThemeBtn>
            <ProfileImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />

            <Popup
              modal
              trigger={
                <LogoutBtn type="button" bgColor={bgColor} color={color}>
                  Logout
                </LogoutBtn>
              }
            >
              {close => (
                <ModalContainer>
                  <ModalText>Are you sure, you want to logout?</ModalText>
                  <BtnContainer>
                    <CloseBtn
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Close
                    </CloseBtn>
                    <ConfirmBtn type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmBtn>
                  </BtnContainer>
                </ModalContainer>
              )}
            </Popup>
          </ActionsContainer>
        </NavbarContainer>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)
export default withRouter(Header)
