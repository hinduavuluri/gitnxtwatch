import {Link} from 'react-router-dom'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  VideoCardDiv,
  VideoCardImg,
  VideoDetails,
  ProfileImage,
  VideoContent,
  VideoTitle,
  Name,
  ViewAndDate,
  Views,
  Date,
  Dot,
} from './styledComponents'

const HomeVideoCard = props => {
  const {video} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = video
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        return (
          <Link to={`/videos/${id}`}>
            <VideoCardDiv>
              <VideoCardImg src={thumbnailUrl} alt="video thumb nail" />
              <VideoDetails>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <VideoContent>
                  <VideoTitle color={textColor}>{title}</VideoTitle>
                  <Name color={textColor}>{name}</Name>
                  <ViewAndDate>
                    <Views color={textColor}>{viewCount} views</Views>
                    <Dot>&#8226</Dot>
                    <Date color={textColor}>{publishedAt}</Date>
                  </ViewAndDate>
                </VideoContent>
              </VideoDetails>
            </VideoCardDiv>
          </Link>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default HomeVideoCard
