import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'
import GameVideoCard from '../GameVideoCard'

import {
  GameVideosContainer,
  GameVideosTitle,
  GameIconContainer,
  GameTitle,
  GameVideosList,
} from './styledComponents'

const apiGameStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GameVideos extends Component {
  state = {status: apiGameStatusConstants.initial, gameVideos: []}

  componentDidMount() {
    this.getGameVideos()
  }

  getGameVideos = async () => {
    this.setState({status: apiGameStatusConstants.inProgress})
    const token = Cookies.get('jwt_token')
    const gamesUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      Authorization: `Bearer ${token}`,
    }
    const response = await fetch(gamesUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))
      this.setState({
        status: apiGameStatusConstants.success,
        gameVideos: updatedData,
      })
    } else {
      this.setState({status: apiGameStatusConstants.failure})
    }
  }

  renderGamingView = () => {
    const {gameVideos} = this.state
    return (
      <GameVideosList>
        {gameVideos.map(game => (
          <GameVideoCard key={game.id} videoDetails={game} />
        ))}
      </GameVideosList>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  onRetry = () => {
    this.getGameVideos()
  }

  failureView = () => <FailureView onRetry={this.onRetry} />

  renderGamingVideosView = () => {
    const {status} = this.state

    switch (status) {
      case apiGameStatusConstants.success:
        return this.renderGamingView()
      case apiGameStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiGameStatusConstants.failure:
        return this.failureView()
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
            <div>
              <Header />
              <SideBar />
              <GameVideosContainer data-testid="gaming" bgColor={bgColor}>
                <GameVideosTitle>
                  <GameIconContainer>
                    <HiFire size={30} color="#ff0000" />
                  </GameIconContainer>
                  <GameTitle color={textColor}>Saved Videos</GameTitle>
                </GameVideosTitle>
                {this.renderGamingVideosView()}
              </GameVideosContainer>
            </div>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}
export default GameVideos
