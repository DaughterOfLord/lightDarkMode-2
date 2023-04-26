// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  changeMode = () => {
    const {isDarkMode} = this.state
    this.setState({isDarkMode: !isDarkMode})
  }

  render() {
    let modeCls
    const {isDarkMode} = this.state
    const buttonText = isDarkMode
      ? ((modeCls = 'dark-mode'), 'Light Mode')
      : ((modeCls = 'light-mode'), 'Dark Mode')

    return (
      <div className="container-1">
        <div className={`container ${modeCls}`}>
          <h1 className="mode-heading">Click To Change Mode</h1>
          <button className="mode-btn" onClick={this.changeMode} type="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
