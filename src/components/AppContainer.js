import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import storesSubscribable from "../decorators/storesSubscribable"

class AppContainer extends Component {
    render() {
        return <ArticleList articles={this.props.articles} />
    }
}

function getState(stores) {
    return {
        articles: stores.articles.getAll()
    }
}

export default storesSubscribable(getState)(AppContainer)
