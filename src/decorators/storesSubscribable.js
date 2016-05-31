import React from "react"
import { stores } from "../stores"

export default (getStateFromStores) => (Component) => class extends React.Component {
    constructor(props) {
        super(props)
        this.state = getStateFromStores(stores)
    }

    componentDidMount() {
        Object.keys(stores).forEach(store => {
            stores[store].addChangeListener(this.handleChange)
        })
    }

    componentWillUnmount() {
        Object.keys(stores).forEach(store => {
            stores[store].removeChangeListener(this.handleChange)
        })
    }

    handleChange = () => {
        this.setState(getStateFromStores(stores))
    }

    render() {
        return <Component {...this.props} {...this.state} />
    }
}
