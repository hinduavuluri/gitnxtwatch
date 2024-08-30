import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarkTheme: false,
  activeTab: 'Home',
  savedVideos: [],
  addVideo: () => {},
  toggleTheme: () => {},
  changeTab: () => {},
})
export default ThemeAndVideoContext
