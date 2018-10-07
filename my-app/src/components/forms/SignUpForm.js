import React from "react";
// import HomePage from "../pages/HomePage";

class SignUpForm extends React.Component {
    state = {
        data : {},
        loading: false,
        errors: {}
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>

            <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <br />

             <label>
          Username:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <br />
        <label>
          Email:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        <br />
          Password:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
        );
    }
}

export default SignUpForm