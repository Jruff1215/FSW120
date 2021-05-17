import React from "react"

function blogList(props) {
    return(
        <div className= "app">
            <h2 className = "blog">{props.title}</h2>
            <p className = "sub">{props.subTitle}</p>
            <p className = "author"> Posted by <b>{props.author}</b> on {props.date}</p>
        </div>
    )
}

export default blogList 