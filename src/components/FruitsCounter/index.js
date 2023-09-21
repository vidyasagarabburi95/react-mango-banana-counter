import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  eatMango = () => {
    this.setState(prevState => ({
      mangoCount: prevState.mangoCount + 1,
    }))
  }

  eatBanana = () => {
    this.setState(prevState => ({
      bananaCount: prevState.bananaCount + 1,
    }))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="yellowContainer">
        <div className="whiteContainer">
          <h1>
            Bob ate {mangoCount} mangoes {bananaCount} bananas
          </h1>
          <div className="imageCon">
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
            />

            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
            />
          </div>
          <div className="bcon">
            <button className="button2" onClick={this.eatMango} type="button">
              Eat Mango
            </button>
            <button className="button2" onClick={this.eatBanana} type="button">
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
