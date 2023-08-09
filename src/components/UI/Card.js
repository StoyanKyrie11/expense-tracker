import "./Card.css"

const Card = ({ children, className }) => {
    /* Children --> reserved name. It's value will always be the content 
        of the opening and closing tag
    */
    const classes = 'card ' + className;
    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default Card
