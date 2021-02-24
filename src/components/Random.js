import React from 'react'

export default function Random(props) {
    let result = Math.floor(Math.random() * (props.max - props.min) ) + props.min;
    return (
        <div>
         <h1>Random value between {props.min} and {props.max} => {result}</h1>   
        </div>
    )
}
