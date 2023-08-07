import React from 'react'
import "./Card.css"

const Card = (props) => {
    /* Children --> reserved name. It's value will always be the content 
        of the opening and closing tag
    */
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Card
