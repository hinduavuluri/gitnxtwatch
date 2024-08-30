import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import {
  VideoPlayer,
  VideoPlayerTitle,
  VideoStatusContainer,
  ViewsAndDuration,
  ButtonsContainer,
  Button,
  SocialBtn,
  Text,
  HrLine,
  ChannelContainer,
  ChannelImg,
  DetailsContainer,
} from './styledComponents'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const VideoPlayView = props => {
  const {videoDetails, isLiked, isDisliked, clickLiked, clickDisliked} = props

  const onClickLike = () => {
    clickLiked()
  }

  const onClickDislike = () => {
    clickDisliked()
  }
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, addVideo, savedVideos} = value
        const textColor = isDarkTheme ? '#64748b' : '#231f20'
        const likeColor = isLiked ? '#2563eb' : '#64748b'
        const dislikeColor = isDisliked ? '#2563eb' : '#64748b'
        let isSaved
        const index = savedVideos.findIndex(each => each.id === videoDetails.id)
        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }
        const saveColor = isSaved ? '#2563eb' : textColor

        const onClickSave = () => {
          addVideo(videoDetails)
        }
        return (
          <VideoPlayer>
            <ReactPlayer url={videoDetails.videoUrl} controls width="100%" />
            <VideoPlayerTitle color={textColor}>
              {videoDetails.title}
            </VideoPlayerTitle>
            <VideoStatusContainer>
              <ViewsAndDuration>
                {videoDetails.viewCount} views {videoDetails.publishedAt}
              </ViewsAndDuration>
              <ButtonsContainer>
                <Button>
                  <SocialBtn
                    color={likeColor}
                    onClick={onClickLike}
                    type="button"
                  >
                    <AiOutlineLike size={20} />
                    <Text>Like</Text>
                  </SocialBtn>

                  <SocialBtn
                    color={dislikeColor}
                    onClick={onClickDislike}
                    type="button"
                  >
                    <AiOutlineDislike size={20} />
                    <Text>Dislike</Text>
                  </SocialBtn>

                  <SocialBtn
                    color={saveColor}
                    onClick={onClickSave}
                    type="button"
                  >
                    <BiListPlus size={20} />
                    <Text>{isSaved ? 'Saved' : 'Save'}</Text>
                  </SocialBtn>
                </Button>
              </ButtonsContainer>
            </VideoStatusContainer>
            <HrLine />
            <ChannelContainer>
              <ChannelImg
                src={videoDetails.profileImageUrl}
                alt="channel logo"
              />
              <DetailsContainer>
                <VideoPlayerTitle color={textColor}>
                  {videoDetails.name}
                </VideoPlayerTitle>
                <ViewsAndDuration color={textColor}>
                  {videoDetails.subscriberCount}
                </ViewsAndDuration>
                <VideoPlayerTitle color={textColor}>
                  {videoDetails.description}
                </VideoPlayerTitle>
              </DetailsContainer>
            </ChannelContainer>
          </VideoPlayer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default VideoPlayView
