import React, { Component, PropTypes } from 'react'
import Counter from './Counter'
import Articles from './Articles'
import { Provider } from 'react-redux'

class Root extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired
    };

    render() {
        return (
            <Provider store = {this.props.store}>
                <div>
                    <Counter />
                    <Articles />
                </div>
            </Provider>
        )
    }
}

export default Root