import React from "react";
// import HomePage from "../pages/HomePage";

class LoginForm extends React.Component {
    state = {
        data : {},
        loading: false,
        errors: {}
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
        <label>
          email:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        <br />
          password:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
        );
    }
}

export default LoginForm