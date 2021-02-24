import React from 'react'


class NumbersTable extends React.Component {
   
    render() {
    let numbers = []
    for (let i=1; i <= this.props.limit; i++) {
    numbers.push(i)
    }

    const listItems = numbers.map((number => {
        return (
            <td>
            {number%2 == 0 ? <tr className="red">{number}</tr> : <td>{number}</td>}
            </td>
        )
    }))

    return (
        <div>
<table>
<tbody>
    {listItems}
</tbody>
</table>
        </div>
    )
}}

export default NumbersTable



    