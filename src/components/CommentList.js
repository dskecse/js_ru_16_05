import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import { getRelation } from '../utils'
import { loadComments } from "../AC/comments"
import { connect } from "react-redux"

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func,
        loadComments: PropTypes.func.isRequired
    };

    static contextTypes = {
        router: PropTypes.object,
        user: PropTypes.string
    }

    componentWillReceiveProps({ isOpen, article, loadComments }) {
        if (!isOpen || article.loadedComments || article.loadingComments) return
        loadComments(article.id)
    }

    render() {
        return (
            <div>
                <h3>Hello {this.context.user}</h3>
                {this.getToggler()}
                {this.getList()}
            </div>
        )
    }

    getToggler() {
        const { isOpen, toggleOpen } = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return <a href = "#" onClick = {toggleOpen}>{text}</a>
    }

    getList() {
        const { isOpen, article } = this.props

        const comments = getRelation(article, 'comments')
        if (!isOpen) return null
        if (!article.loadedComments) return <h3>Loading...</h3>
        if (!comments || !comments.length) return <h3>No comments yet</h3>

        const items = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <ul>
            {items}
            <li><NewCommentForm articleId = {article.id} /></li>
        </ul>
    }
}

export default connect(null, { loadComments })(toggleOpen(CommentList))
