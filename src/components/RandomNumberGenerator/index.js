// Write your code here

import './index.css'

import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {value: 0}

  generateNumber = () => {
    const randomNum = () => Math.floor(Math.random() * 100)

    this.setState({value: randomNum()})
  }

  render() {
    const {value} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="head">Random Number</h1>
          <p className="describe">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="btn" onClick={this.generateNumber}>
            Generate
          </button>
          <p className="value-head">{value}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
