import React, {Component} from "react";

class Login extends Component {
    render() {
        return (
            <div class="boxcontainer">
                <form id="loginform">
                    <label class="username">
                        <span>Username or email</span>
                        <input aria-label="Username or email" aria-required="true" name="username" type="text"/>
                    </label>
                    <label class="password">
                        <span>Password</span>
                        <input aria-label="Password" aria-required="true" name="password" type="password"/>
                    </label>
                    <button class="btnLogin" type="submit">Log In</button>
                </form>
            </div>
        );
    }
}

export default Login;