import React, { PropTypes, Component } from "react"
import connectToStore from "../decorators/connectToStore"
import { LOADING } from "../constants"

class CommentsPageContainer extends Component {
    static propTypes = {
        page: PropTypes.string.isRequired,
        comments: PropTypes.any
    };

    render() {
        const { comments } = this.props
        if (comments === LOADING) return <h3>Loading...</h3>
        const items = comments.map(comment => <li key={comment.id}>{comment.text}</li>)
        return <ul>{items}</ul>
    }
}

function getState(stores, props) {
    return {
        comments: stores.comments.getOrLoadPage(props.page)
    }
}

export default connectToStore(["comments"], getState)(CommentsPageContainer)
