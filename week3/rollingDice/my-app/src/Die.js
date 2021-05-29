import React from 'react'


class Die extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <h3>{this.props.number}</h3>
        )
    }
}
export default Die