import Header from '../Header'
import SideBar from '../SideBar'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NotFoundDiv,
  NotFoundImg,
  NotFoundHead,
  NotFoundNote,
} from './styledComponents'

const NotFound = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'
      const NotFoundImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Header />
          <SideBar />
          <NotFoundDiv bgColor={bgColor}>
            <NotFoundImg src={NotFoundImage} />
            <NotFoundHead color={headingColor}>Page Not Found</NotFoundHead>
            <NotFoundNote noteColor={noteColor}>
              We are sorry, the page you requested could not be found
            </NotFoundNote>
          </NotFoundDiv>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default NotFound
