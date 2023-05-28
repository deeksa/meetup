import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Home from './components/Home'
import RegisterPage from './components/RegisterPage'
import NotFound from './components/NotFound'
import HomeContext from './context/HomeContext'
// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here

class App extends Component {
  state = {
    isRegisterNowClicked: false,
    inputNameDisplay: '',
    selectedItemDisplay: '',
  }

  onClickRegisterNow = (i, s) => {
    this.setState({
      isRegisterNowClicked: true,
      inputNameDisplay: i,
      selectedItemDisplay: s,
    })
  }

  render() {
    const {
      isRegisterNowClicked,
      inputNameDisplay,
      selectedItemDisplay,
    } = this.state
    return (
      <HomeContext.Provider
        value={{
          isRegisterNowClicked,
          inputNameDisplay,
          selectedItemDisplay,
          onClickRegisterNow: this.onClickRegisterNow,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/register" component={RegisterPage} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </HomeContext.Provider>
    )
  }
}

export default App
