// Write your code here
import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onMangoIncrement = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onBananaIncrement = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    const element = (
      <div className="bg-container">
        <div className="fruits-container">
          <h1 className="heading">
            Bob ate <span className="fruit-head">{mango}</span> mangoes{' '}
            <span className="fruit-head">{banana}</span> bananas
          </h1>
          <div className="fruit-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
              className="fruit-image"
            />
            <button
              type="button"
              className="eat-button"
              onClick={this.onMangoIncrement}
            >
              Eat mango
            </button>
          </div>
          <div className="fruit-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
              alt="banana"
              className="fruit-image"
            />
            <button
              type="button"
              className="eat-button"
              onClick={this.onBananaIncrement}
            >
              Eat banana
            </button>
          </div>
        </div>
      </div>
    )
    return element
  }
}
export default FruitsCounter
