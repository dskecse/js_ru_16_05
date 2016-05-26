export default {
    getInitialState() {
        return {
            openedItem: null
        }
    },
    openItem(id) {
        return e => {
            if (e) e.preventDefault()
            this.setState({
                openedItem: this.state.openedItem === id ? null : id
            })
        }
    },
    isOpen(id) {
        return id === this.state.openedItem
    }
}
