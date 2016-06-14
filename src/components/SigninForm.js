import React, { PropTypes, Component } from "react"

class SigninForm extends Component {
    static propTypes = {
        setUser: PropTypes.func.isRequired
    }

    state = {
        name: ""
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.name} onChange={this.handleChange} required />
                    <input type="submit" value="Sign In" />
                </form>
            </div>
        )
    }

    handleChange = e => {
        this.setState({ name: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.setUser(this.state.name)
        this.setState({ name: "" })
    }
}

export default SigninForm
