import {Link} from 'react-router-dom'
import {Container1} from './styledComponents'
import Header from '../Header'
import HomeContext from '../../context/HomeContext'

const Home = props => {
  const onTapRegister = () => {
    const {history} = props
    history.replace('/register')
  }
  return (
    <HomeContext.Consumer>
      {value => {
        const {
          isRegisterNowClicked,
          inputNameDisplay,
          selectedItemDisplay,
        } = value
        return (
          <div>
            <Header />
            <Container1>
              {isRegisterNowClicked ? (
                <h1>Hello {inputNameDisplay}</h1>
              ) : (
                <h1>Welcome to Meetup</h1>
              )}
              {isRegisterNowClicked ? (
                <p>Welcome to {selectedItemDisplay}</p>
              ) : (
                <p>Please register for the topic</p>
              )}
              {isRegisterNowClicked ? null : (
                <Link to="/register">
                  <button type="button">Register</button>
                </Link>
              )}
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </Container1>
          </div>
        )
      }}
    </HomeContext.Consumer>
  )
}
export default Home
