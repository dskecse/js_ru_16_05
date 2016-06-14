import React, { PropTypes, Component } from 'react'
import { history } from "../routes"

class ArticleNew extends Component {
    static contextTypes = {
        user: PropTypes.string
    };

    componentWillMount() {
        if (!this.context.user) history.replace("/articles")
    }

    render() {
        return (
            <div>
                <h2>New Article page</h2>
            </div>
        )
    }
}

export default ArticleNew
