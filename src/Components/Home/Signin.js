import { Component } from "react";

class Signin extends Component {
    initialState = {
        username: "",
    };

    state = this.initialState;

    handleChange = (event) => {
        const { username, value } = event.target;

        this.setState({
            [username]: value,
        });
    };

    submitForm = () => {
        this.props.handleChange(this.state);
        this.setState(this.initialState);
    };

    render() {
        const { username } = this.state;

        return (
            <form>
                <label htmlFor="username">Username :</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={this.handleChange}
                />
                <br></br>
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }
}

export default Signin;
