import React from "react"


function vacayCard(props) {
    return (
        <div style={{textAlign: "center"}}>
            <h1>{props.place}</h1>
            <img src={props.image} />
            <p>{props.description}</p>
            <p>{props.price}</p>
            <p>{props.expensive}</p>
            <p>{props.timeToGo}</p>
        </div>
    )
}

export default vacayCard