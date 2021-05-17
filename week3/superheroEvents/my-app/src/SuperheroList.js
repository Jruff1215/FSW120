import React from "react"

function superhero(props) {
    return(
        <div className= "box">
            <h2 className= "name">{props.name}</h2>
            <h2 className= "show">{props.show}</h2>
            <img className = "image" src= {props.image} alt="" onClick= {() => alert(props.catchPhrase)}  />
        </div>
    )
}

export default superhero