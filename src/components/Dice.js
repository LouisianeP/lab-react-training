import React, { Component } from 'react'

export default class Dice extends Component {
    state = {
        srcImg: "/img/dice-empty.png"
      }

    reset = () => {
        this.setState((state,props) => ({
            srcImg: "/img/dice-empty.png"
            }))
        setTimeout(this.randomHandler,1000)
    }
    
    randomHandler = () => {
        let result = Math.floor(Math.random() * (5) ) + 1;
        this.setState((state,props) => ({
        srcImg: `/img/dice${result}.png`
        }))
    }



    render() {
        return (
            <div>
                <a onClick={this.reset}>
                    <img src={this.state.srcImg} style={{height: '10vh'}}></img>
                </a>
            </div>
        )
    }
}
