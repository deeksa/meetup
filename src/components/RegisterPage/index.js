import {Component} from 'react'
import {Container1, Container2, Container3} from './styledComponents'
import HomeContext from '../../context/HomeContext'
import Header from '../Header'

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

class RegisterPage extends Component {
  state = {
    selectedItem: topicsList[0].displayText,
    inputName: '',
    isError: false,
  }

  onChangeOption = event => {
    this.setState({selectedItem: event.target.value})
  }

  onChangeInput = event => {
    this.setState({
      inputName: event.target.value,
    })
  }

  getRegisterPage = (inputName, selectedItem, isError) => (
    // const {selectedItem, inputName} = this.state
    <HomeContext.Consumer>
      {value => {
        const {onClickRegisterNow} = value
        const onTapRegisterNow = event => {
          event.preventDefault()
          if (inputName === '') {
            this.setState({isError: true})
          } else {
            onClickRegisterNow(inputName, selectedItem)
            //   <HomeContext>
            //   {value)=>{const {onClickRegisterNow}=value
            //    onClickRegisterNow(inputName,selectedItem)

            //   }}
            //    </HomeContext>
            const {history} = this.props
            history.replace('/')
          }
        }

        return (
          <Container3>
            <Container1>
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <Container2>
                <form onSubmit={onTapRegisterNow}>
                  <h1>Let Us Join</h1>
                  <label>
                    Name
                    <br />
                    <input
                      type="text"
                      placeholder="Your name"
                      value={inputName}
                      onChange={this.onChangeInput}
                    />
                  </label>
                  <br />
                  <label>
                    TOPICS
                    <br />
                    <select onChange={this.onChangeOption} value={selectedItem}>
                      {topicsList.map(e => (
                        <option value={e.id}>{e.displayText}</option>
                      ))}
                    </select>
                  </label>
                  <br />
                  <button type="submit">Register Now</button>
                  {isError ? <p>Please enter your name</p> : null}
                </form>
              </Container2>
            </Container1>
          </Container3>
        )
      }}
    </HomeContext.Consumer>
  )

  render() {
    const {inputName, selectedItem, isError} = this.state
    console.log(inputName)
    console.log(selectedItem)

    return (
      <div>
        <Header />
        {this.getRegisterPage(inputName, selectedItem, isError)}
      </div>
    )
  }
}
export default RegisterPage
