import React, { PropTypes, Component } from "react"
import { Link } from "react-router"
import connectToStore from "../decorators/connectToStore"

class CommentsPagination extends Component {
    static propTypes = {
        total: PropTypes.number
    };

    render() {
        const { total } = this.props
        if (!total) return null
        return this.getPagination(total)
    }

    getPagination(total) {
        const pages = Math.ceil(total / 10)
        const links = [...Array(pages)].map((_, i) => (
            <li key={i}><Link to={`/comments/${i + 1}`}>{i + 1}</Link></li>
        ))
        return <ul>{links}</ul>
    }
}

function getState(stores) {
    const { comments } = stores
    return {
        total: comments.total
    }
}

export default connectToStore(["comments"], getState)(CommentsPagination)
