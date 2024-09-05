import {
  FailureViewDivContainer,
  FailureViewImg,
  FailureHeading,
  FailureNote,
  RetryBtn,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetryBtn = () => [onRetry()]
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'
        const imageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureViewDivContainer>
            <FailureViewImg src={imageUrl} alt="failure view" />
            <FailureHeading color={headingColor}>
              Oops! something Went Wrong
            </FailureHeading>
            <FailureNote noteColor={noteColor}>
              We are having some trouble to complete your request.
              <br /> Please try again
            </FailureNote>
            <RetryBtn type="button" onClick={onClickRetryBtn}>
              Retry
            </RetryBtn>
          </FailureViewDivContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default FailureView
