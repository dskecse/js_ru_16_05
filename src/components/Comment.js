import React, { PropTypes } from "react"

function Comment(props) {
    const { comment: { name, text } } = props

    return (
        <div>
            <h4>{name}</h4>
            <section>{text}</section>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
}

export default Comment
