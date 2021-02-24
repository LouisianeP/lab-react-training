import React from 'react'

export default function BoxColor(props) {
    const mystyle = {
        backgroundColor: `rgba(${props.r},${props.g}, ${props.b},1)`,
        width: '90%',
        height: '5vh'
    };
    return (
        <div style={mystyle}>
        <h1>rgb({props.r},{props.g},{props.b})</h1>
        </div>
    )
}
