import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import { loadCommentsByArticleId } from "../AC/comments"

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array
    };

    componentWillReceiveProps(newProps) {
        const { isOpen, article } = newProps
        const { isLoading } = article
        const comments = article.getRelation('comments')
        if (isOpen && !comments.length && !isLoading) loadCommentsByArticleId(article)
    }

    render() {
        return (
            <div>
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
        const { isLoading } = article
        if (isLoading) return <h3>Loading...</h3>

        const comments = article.getRelation('comments')
        if (!isOpen) return null
        if (!comments || !comments.length) return <h3>No comments yet</h3>
        const items = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <ul>
            {items}
            <li><NewCommentForm articleId = {article.id} /></li>
        </ul>
    }
}

export default toggleOpen(CommentList)
