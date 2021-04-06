import React from "react"

function Child(props) {
    return(
        <div style={{backgroundColor: props.color}}>
            <h1>{props.name}</h1>
            <h2>{props.color}</h2>
            <h2>{props.birth}</h2>
            <h2>{props.year}</h2>
        </div>
    )}

export default Child