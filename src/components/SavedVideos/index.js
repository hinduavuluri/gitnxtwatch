import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import SideBar from '../SideBar'
import TrendingVideoCard from '../TrendingVideoCard'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  SavedVideosDiv,
  SavedVideoTitle,
  SavedVideoIconDiv,
  SavedVideoHeading,
  SavedVideoList,
  NoVideosView,
  NoVideosImg,
  NoVideosHeading,
  NoVideosNote,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'
      return (
        <>
          <Header />
          <SideBar />
          <SavedVideosDiv data-testid="savedVideos" bgColor={bgColor}>
            <SavedVideoTitle>
              <SavedVideoIconDiv>
                <HiFire size={30} color="#ff0000" />
              </SavedVideoIconDiv>
              <SavedVideoHeading color={textColor}>
                Saved Videos
              </SavedVideoHeading>
            </SavedVideoTitle>
            {savedVideos.length > 0 ? (
              <SavedVideoList>
                {savedVideos.map(each => (
                  <TrendingVideoCard key={each.id} videoDetails={each} />
                ))}
              </SavedVideoList>
            ) : (
              <NoVideosView>
                <NoVideosImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoVideosHeading color={headingColor}>
                  No saved videos found
                </NoVideosHeading>
                <NoVideosNote color={noteColor}>
                  You can save your videos while watching them{' '}
                </NoVideosNote>
              </NoVideosView>
            )}
          </SavedVideosDiv>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)
export default SavedVideos
