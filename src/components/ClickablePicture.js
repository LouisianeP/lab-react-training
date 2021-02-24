import React, { Component } from 'react'

export default class ClickablePicture extends Component {
    state = {
        clicked: false
      }
    
    clickedHandler = () => {
        this.setState((state,props) => ({
            clicked: !state.clicked
        }))
    }

    render() {
        return (
            <div>
                <a onClick={this.clickedHandler}>
                    <img src={this.state.clicked ? '/img/persons/maxence.png' : '/img/persons/maxence-glasses.png'} style={{height: '10vh'}}></img>
                </a>
            </div>
        )
    }
}
