import React, { PropTypes, Component } from "react"
import CommentsPageContainer from "../containers/CommentsPageContainer"

const CommentsPage = props => {
    return (
        <div>
            <CommentsPageContainer page={props.params.page} />
        </div>
    )
}

export default CommentsPage
