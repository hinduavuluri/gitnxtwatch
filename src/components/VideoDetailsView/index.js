import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'
import VideoPlayView from '../VideoPlayView'

import {VideoDetailsList, VideoListDiv} from './styledComponents'

const apivideoDetailsStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class VideoDetailsView extends Component {
  state = {
    apiStatus: apivideoDetailsStatusConstants.initial,
    videoDetails: [],
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  formattedData = data => ({
    id: data.video_details.id,
    title: data.video_details.title,
    videoUrl: data.video_details.video_url,
    thumbnailUrl: data.video_details.thumbnail_url,
    viewCount: data.video_details.view_count,
    publishedAt: data.video_details.published_at,
    description: data.video_details.description,
    name: data.video_details.channel.name,
    profileImageUrl: data.video_details.channel.profile_image_url,
    subscriberCount: data.video_details.channel.subscriber_count,
  })

  getVideoDetails = async () => {
    this.setState({apiStatus: apivideoDetailsStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = this.formattedData(data)
      this.setState({
        apiStatus: apivideoDetailsStatusConstants.success,
        videoDetails: updatedData,
      })
    } else {
      this.setState({apiStatus: apivideoDetailsStatusConstants.failure})
    }
  }

  clickLiked = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  clickDisliked = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  renderVideoDetails = () => {
    const {videoDetails, isLiked, isDisliked} = this.state
    return (
      <VideoListDiv>
        <VideoPlayView
          clickLiked={this.clickLiked}
          clickDisliked={this.clickDisliked}
          videoDetails={videoDetails}
          onClickSave={this.onClickSave}
          isLiked={isLiked}
          isDisliked={isDisliked}
        />
      </VideoListDiv>
    )
  }

  onRetry = () => {
    this.getVideoDetails()
  }

  renderVideoFailure = () => <FailureView onRetry={this.onRetry} />

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderVideoItemDetailsView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apivideoDetailsStatusConstants.success:
        return this.renderVideoDetails()
      case apivideoDetailsStatusConstants.failure:
        return this.renderVideoFailure()
      case apivideoDetailsStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          return (
            <>
              <Header />
              <SideBar />
              <VideoDetailsList
                data-testid="videoItemDetails"
                bgColor={bgColor}
              >
                {this.renderVideoItemDetailsView()}
              </VideoDetailsList>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}
export default VideoDetailsView
