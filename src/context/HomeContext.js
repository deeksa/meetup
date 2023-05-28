import React from 'react'

const HomeContext = React.createContext({
  isRegisterNowClicked: false,
  inputNameDisplay: '',
  selectedItemDisplay: '',
  onClickRegisterNow: () => {},
})
export default HomeContext
