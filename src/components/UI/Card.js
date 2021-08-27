import "./Card.css";


// Card is a wrapper componenet
function Card(props) {
    // Here the style for class card plus the style of respective components applied
    const classes = "card " + props.className;

    return (
        <div className={classes}>{props.children}</div>
    );
}

export default Card;