import {Link} from 'react-router-dom'

import {
  VideoCardItem,
  GameImage,
  GameTitle,
  GameViews,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const GameVideoCard = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        return (
          <Link to={`/videos/${id}`}>
            <VideoCardItem>
              <GameImage src={thumbnailUrl} alt="video thumbnail" />
              <GameTitle color={textColor}>{title}</GameTitle>
              <GameViews color={textColor}>
                {viewCount} Watching Worldwide
              </GameViews>
            </VideoCardItem>
          </Link>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default GameVideoCard
