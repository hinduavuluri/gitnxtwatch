import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import HomeVideoCard from '../HomeVideoCard'

import {
  VideosList,
  EmptyVideosContainer,
  NoVideosImg,
  NoVideosHeading,
  NoVideosText,
  RetryBtn,
} from './styledComponents'

const HomeVideos = props => {
  const {homeVideos, onRetry} = props
  const videosCount = homeVideos.length

  const onClickRetry = () => {
    onRetry()
  }
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const textColor = isDarkTheme ? '#e2e8f0' : '#475569'

        return videosCount.length > 0 ? (
          <VideosList>
            {homeVideos.map(each => (
              <HomeVideoCard key={each.id} video={each} />
            ))}
          </VideosList>
        ) : (
          <EmptyVideosContainer>
            <NoVideosImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideosHeading headingColor={headingColor}>
              No Search results found
            </NoVideosHeading>
            <NoVideosText textColor={textColor}>
              Try different key words or remove search filters
            </NoVideosText>
            <RetryBtn onClick={onClickRetry}>Retry</RetryBtn>
          </EmptyVideosContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default HomeVideos
