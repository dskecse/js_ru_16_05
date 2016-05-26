import React, { Component } from "react"

export default (CustomComponent) => {
    return class Collapsible extends Component {
        state = {
            openedItem: null
        }

        render() {
            return <CustomComponent {...this.props} openItem={this.openItem} isOpen={this.isOpen} />
        }

        openItem = id => e => {
            if (e) e.preventDefault()
            this.setState({
                openedItem: this.isOpen(id) ? null : id
            })
        }

        isOpen = id => {
            return id === this.state.openedItem
        }
    }
}
