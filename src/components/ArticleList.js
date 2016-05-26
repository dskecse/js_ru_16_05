import React, { PropTypes, Component } from 'react'
import Article from './Article'
import Chart from './Chart'
import collapsible from "../decorators/collapsible"

class ArticleList extends Component {
    render() {
        const { articles, openItem: openArticle, isOpen } = this.props
        const articleItems = articles.map((article) => <li key={article.id}>
            <Article article = {article}
                isOpen = {isOpen(article.id)}
                toggleOpen = {openArticle(article.id)}
            />
        </li>)
        return (
            <div>
                <ul>
                    {articleItems}
                </ul>
                <Chart articles = {articles}/>
            </div>
        )
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    openItem: PropTypes.func.isRequired,
    isOpen: PropTypes.func.isRequired
}

export default collapsible(ArticleList)
