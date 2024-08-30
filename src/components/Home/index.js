import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {IoCloseOutline} from 'react-icons/io5'
import {FaSearch} from 'react-icons/fa'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import Header from '../Header'
import SideBar from '../SideBar'
import HomeVideos from '../HomeVideos'
import FailureView from '../FailureView'
import {
  HomeContainer,
  BannerLeftDiv,
  BannerDiv,
  BannerBtn,
  BannerText,
  BannerImg,
  SearchDiv,
  InputContainer,
  SearchButton,
  BannerRightPart,
  BannerCloseBtn,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    status: apiStatusConstants.initial,
    homeVideos: [],
    searchInput: '',
    bannerDisplay: 'flex',
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({status: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const token = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))
      this.setState({
        status: apiStatusConstants.success,
        homeVideos: updatedData,
      })
    } else {
      this.setState({status: apiStatusConstants.failure})
    }
  }

  onClickCloseBtn = () => {
    this.setState({bannerDisplay: 'none'})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  renderSuccessView = () => {
    const {homeVideos} = this.state
    return <HomeVideos homeVideos={homeVideos} onRetry={this.onRetry} />
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderHomeVideos = () => {
    const {status} = this.state
    switch (status) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {searchInput, bannerDisplay} = this.state
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
          const display = bannerDisplay === 'flex' ? 'flex' : 'none'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
          return (
            <>
              <Header />
              <SideBar />
              <HomeContainer data-testid="home" bgColor={bgColor}>
                <BannerDiv data-testid="banner" display={display}>
                  <BannerLeftDiv>
                    <BannerImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                    />
                    <BannerText>
                      Buy Nxt Watch Premium prepaid plans with <br /> UPI
                    </BannerText>
                    <BannerBtn>GET IT NOW</BannerBtn>
                  </BannerLeftDiv>
                  <BannerRightPart>
                    <BannerCloseBtn
                      data-testid="close"
                      onClick={this.onClickCloseBtn}
                    >
                      <IoCloseOutline size={26} />
                    </BannerCloseBtn>
                  </BannerRightPart>
                </BannerDiv>
                <SearchDiv>
                  <InputContainer
                    type="text"
                    placeholder="Search"
                    onChange={this.onChangeSearchInput}
                    value={searchInput}
                    color={textColor}
                  />
                  <SearchButton color={textColor}>
                    <FaSearch size={30} />
                  </SearchButton>
                </SearchDiv>
                {this.renderHomeVideos()}
              </HomeContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}
export default Home
