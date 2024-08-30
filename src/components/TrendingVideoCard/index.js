import {Link} from 'react-router-dom'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  TrendingVideoDiv,
  TrendingVideoImg,
  VideoDetailsDiv,
  VideoDetailsHead,
  VideoDetailsNote,
  ProfileImage,
} from './styledComponents'

const TrendingVideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    name,
    profileImageUrl,
    viewCount,
    publishedAt,
  } = videoDetails
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        return (
          <Link to={`/videos/${id}`}>
            <TrendingVideoDiv>
              <TrendingVideoImg src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsDiv>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <VideoDetailsHead color={textColor}>{title}</VideoDetailsHead>
                <VideoDetailsNote color={textColor}>{name}</VideoDetailsNote>
                <VideoDetailsNote>
                  {viewCount} views {publishedAt}
                </VideoDetailsNote>
              </VideoDetailsDiv>
            </TrendingVideoDiv>
          </Link>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default TrendingVideoCard
