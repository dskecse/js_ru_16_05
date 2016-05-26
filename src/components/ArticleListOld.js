import React, { PropTypes, createClass } from "react"
import Article from "./Article"
import Chart from "./Chart"
import collapsible from "../mixins/collapsible"

const ArticleListOld = createClass({
    propTypes: {
        articles: PropTypes.array.isRequired
    },
    mixins: [collapsible],
    render() {
        const { articles } = this.props
        const articleItems = articles.map(article => (
            <li key={article.id}>
                <Article article={article}
                         isOpen={this.isOpen(article.id)}
                         toggleOpen={this.openItem(article.id)}
                />
            </li>)
        )
        return (
            <div>
                <ul>
                    {articleItems}
                </ul>
                <Chart articles={articles} />
            </div>
        )
    }
})

export default ArticleListOld
