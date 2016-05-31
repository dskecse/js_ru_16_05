import React, { PropTypes, Component } from "react"
import { createComment } from "../AC/comments"

class NewCommentForm extends Component {
    static propTypes = {
        articleId: PropTypes.string.isRequired
    }

    state = {
        name: "",
        text: ""
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        createComment(this.state, this.props.articleId)
        this.setState({
            name: "",
            text: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Author (required)" value={this.state.name} onChange={this.handleChange("name")} required />
                <textarea placeholder="Comment" value={this.state.text} onChange={this.handleChange("text")} required />
                <input type="submit" value="Add comment" />
            </form>
        )
    }
}

export default NewCommentForm
