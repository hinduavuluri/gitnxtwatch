import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import Header from '../Header'
import SideBar from '../SideBar'
import TrendingVideoCard from '../TrendingVideoCard'
import FailureView from '../FailureView'

import {
  TrendingVideosDiv,
  TrendingVideoTitle,
  TrendingVideoIconContainer,
  TrendingTitle,
  TrendingVideosList,
} from './styledComponents'

const apiTrendingVideosStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}
class TrendingVideos extends Component {
  status = {
    apiStatus: apiTrendingVideosStatusConstants.initial,
    trendingVideos: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiTrendingVideosStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const trendingVideosUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      Authorization: `Bearer ${jwtToken}`,
    }
    const response = await fetch(trendingVideosUrl, options)
    if (response.ok) {
      const data = await response.json()
      const fetchedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnaiUrl: eachVideo.thumbnail_url,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
      }))
      this.setState({
        apiStatus: apiTrendingVideosStatusConstants.success,
        trendingVideos: fetchedData,
      })
    } else {
      this.setState({apiStatus: apiTrendingVideosStatusConstants.failure})
    }
  }

  renderTrendingVideosSuccessView = () => {
    const {trendingVideos} = this.state
    return (
      <TrendingVideosList>
        {trendingVideos.map(each => (
          <TrendingVideoCard key={each.id} videoDetails={each} />
        ))}
      </TrendingVideosList>
    )
  }

  onRetry = () => {
    this.getTrendingVideos()
  }

  renderTrendingVideosFailureView = () => <FailureView onRetry={this.onRetry} />

  renderTrendingVideosLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderTrendingVideosView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiTrendingVideosStatusConstants.success:
        return this.renderTrendingVideosSuccessView()
      case apiTrendingVideosStatusConstants.failure:
        return this.renderTrendingVideosFailureView()
      case apiTrendingVideosStatusConstants.inProgress:
        return this.renderTrendingVideosLoadingView()
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
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
          return (
            <div data-testid="trending">
              <Header />
              <SideBar />
              <TrendingVideosDiv data-testid="trending" bgColor={bgColor}>
                <TrendingVideoTitle>
                  <TrendingVideoIconContainer>
                    <HiFire size={35} color="#ff0000" />
                  </TrendingVideoIconContainer>
                  <TrendingTitle color={textColor}>Trending</TrendingTitle>
                </TrendingVideoTitle>
                {this.renderTrendingVideosView()}
              </TrendingVideosDiv>
            </div>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}
export default TrendingVideos
