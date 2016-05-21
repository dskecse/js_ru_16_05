import React, { PropTypes, Component } from "react"
import Comment from "./Comment"

class CommentList extends Component {
    state = {
        isOpen: false
    }

    render() {
        const { comments } = this.props
        const { isOpen } = this.state
        if (!isOpen) {
            return (
                <div>
                    <a href="" onClick={this.handleClick}>Expand comments section</a>
                </div>
            )
        }

        const commentItems = comments ? comments.map((comment) => <li key={comment.id}><Comment comment={comment} /></li>) : <li>No comments</li>

        return (
            <div>
                <a href="" onClick={this.handleClick}>Collapse comments section</a>
                <ul>{commentItems}</ul>
            </div>
        )
    }

    handleClick = e => {
        e.preventDefault()
        this.setState({ isOpen: !this.state.isOpen })
    }
}

CommentList.propTypes = {
    comments: PropTypes.array
}

export default CommentList
