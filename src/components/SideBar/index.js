import {Component} from 'react'
import {MdHome} from 'react-icons/md'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {RiPlayListAddFill} from 'react-icons/ri'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NavBar,
  NavOptions,
  NavLink,
  NavLinkContainer,
  NavText,
  BottomContainer,
  BottomHead,
  IconsContainer,
  Icon,
  BottomDesc,
} from './styledComponents'

class SideBar extends Component {
  renderTabItems = () => (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, activeTab, ChangeTab} = value

        const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'
        const activeTabBg = isDarkTheme ? '#475569' : '#cbd5e1'
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        const onClickTabHome = () => {
          ChangeTab('Home')
        }

        const onClickTabGaming = () => {
          ChangeTab('Gaming')
        }

        const onClickTabTrending = () => {
          ChangeTab('Trending')
        }

        return (
          <NavBar bgColor={bgColor}>
            <NavOptions>
              <NavLink to="/">
                <NavLinkContainer
                  key="home"
                  bgColor={activeTab === 'Home' ? activeTabBg : 'none'}
                  onClick={onClickTabHome}
                >
                  <MdHome
                    size={40}
                    color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                  />
                  <NavText color={textColor}>Home</NavText>
                </NavLinkContainer>
              </NavLink>

              <NavLink to="/trending">
                <NavLinkContainer
                  key="trending"
                  bgColor={activeTab === 'Trnding' ? activeTabBg : 'none'}
                  onClick={onClickTabTrending}
                >
                  <FaFire
                    size={40}
                    color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                  />
                  <NavText color={textColor}>Trending</NavText>
                </NavLinkContainer>
              </NavLink>

              <NavLink to="gaming">
                <NavLinkContainer
                  key="gaming"
                  bgColor={activeTab === 'Gaming' ? activeTabBg : 'none'}
                  onClick={onClickTabGaming}
                >
                  <SiYoutubegaming
                    size={40}
                    color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                  />
                  <NavText color={textColor}>Gaming</NavText>
                </NavLinkContainer>
              </NavLink>

              <NavLink to="/saved-videos">
                <NavLinkContainer
                  key="saved"
                  bgColor={activeTab === 'Saved' ? activeTabBg : 'none'}
                  onClick={this.onClickTabSaved}
                >
                  <RiPlayListAddFill
                    size={40}
                    color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                  />

                  <NavText color={textColor}>Saved videos</NavText>
                </NavLinkContainer>
              </NavLink>
            </NavOptions>

            <BottomContainer>
              <BottomHead color={textColor}>CONTACT US</BottomHead>
              <IconsContainer>
                <Icon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <Icon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <Icon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </IconsContainer>
              <BottomDesc color={textColor}>
                Enjoy! Now to see your channels and recommendations!
              </BottomDesc>
            </BottomContainer>
          </NavBar>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )

  render() {
    return <>{this.renderTabItems()}</>
  }
}
export default SideBar
