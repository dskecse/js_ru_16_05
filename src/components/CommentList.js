import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import NewCommentForm from "./NewCommentForm"
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired
    };

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
        let comments = article.getRelation("comments")
        if (!isOpen) return null
        if (!comments || !comments.length) return <div><h3>No comments yet</h3><NewCommentForm articleId={article.id} /></div>
        const items = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return (
            <div>
                <ul>
                    {items}
                </ul>
                <NewCommentForm articleId={article.id} />
            </div>
        )
    }
}

export default toggleOpen(CommentList)
