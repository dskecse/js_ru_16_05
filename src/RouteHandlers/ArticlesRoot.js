import React, { Component, PropTypes } from 'react'
import Navigation from '../containers/Navigation'
import { Link } from 'react-router'
import SigninForm from "../components/SigninForm"

class ArticlesIndex extends Component {
    static propTypes = {
    };

    state = {
        user: null
    }

    static childContextTypes = {
        user: PropTypes.string
    }

    getChildContext() {
        return {
            user: this.state.user
        }
    }

    render() {
        return (
            <div>
                <h1>News app: Articles</h1>
                <SigninForm setUser={this.setUser} />
                <Link to="/articles/new">New article</Link>
                <h3 onClick = {this.switchUser}>Switch User</h3>
                <Navigation />
                {this.props.children}
            </div>
        )
    }

    setUser = name => {
        this.setState({ user: name })
    }

    switchUser = (ev) => {
        this.setState({
            user: 'Other User'
        })
    }
}

export default ArticlesIndex
