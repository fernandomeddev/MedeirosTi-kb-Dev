import React from "react";



function Content(props) {
    return (
        <div className="Container">
            <h1>{props.title}</h1>
            <h1>{props.ano}</h1>
        </div>
    )
}

export default Content;