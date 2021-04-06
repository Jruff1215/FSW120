import React from "react"

function vacayCard(props) {
    return (
        <div style={{backgroundColor: props.color}}>
            <h1>{props.place}</h1>
            <img src= {props.image} />
            <p style={{backgroundColor: props.color}}>{props.price}</p>
            <p className= "paragraph">{props.expensive}</p>
            <p>{props.timeToGo}</p>
        </div>
    )
}

export default vacayCard