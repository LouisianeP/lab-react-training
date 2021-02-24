import React, { Component } from 'react'

export default class LikeButton extends Component {
    state = {
        counter: 0,
        plur: false,
        liked: false
      }
    
      clickHandler = () => {
        console.log('click');
        // update the state of counter
        // 🚨 should not be done
        // this.state.counter = 5
        // this.setState({
        //   counter: this.state.counter + 1
        // })
        this.setState((state, props) => ({
          counter: state.counter + 1
        }))
        if (this.state.counter > 0) this.state.plur = true
      }
    
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>{this.state.counter} {this.state.plur ? 'Likes':'Like'} </button>
            </div>
        )
    }
}
