import React, { PropTypes, Component } from "react"
import CommentsPagination from "../containers/CommentsPagination"

const CommentsIndex = props => {
    return (
        <div>
            <h1>News app: Comments</h1>
            <CommentsPagination />
            {props.children}
        </div>
    )
}

export default CommentsIndex
