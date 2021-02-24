import React, { Component } from 'react'

export class Carousel extends Component {

state = {
    img: this.props.imgs[0],
}

changeImageLinks = () => {
    let i = this.props.imgs.indexOf(this.state.img)
    const length = this.props.imgs.length
    if (i == 0) {
    this.setState({
    img: this.props.imgs[length-1]
    })
    }   
    else {
        this.setState({
            img: this.props.imgs[i-1]
            })
        }
}

changeImageRight = () => {
    let i = this.props.imgs.indexOf(this.state.img)
    const length = this.props.imgs.length
    if (i == length-1) {
    this.setState({
    img: this.props.imgs[0]
    })
    }   
    else {
        this.setState({
            img: this.props.imgs[i+1]
            })
        }
}
    render() {

        return (
            <div>
     <button onClick={this.changeImageLinks}>Previous</button>
     <img src={this.state.img} />            
     <button onClick={this.changeImageRight}>Next</button>      
            </div>
        )
    }
}

export default Carousel
