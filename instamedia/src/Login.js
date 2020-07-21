import React, {Component} from "react";

class Login extends Component {
    render() {
        return (
            <div class="mt-5">
                <div class="row justify-content-md-center">
                    <div class="col-sm"></div>
                    <div class="col-sm">
                        <div class="card bg-light">
                            <div class="border border-light p-3 mb-4">
                                <div class="text-center">
                                    <h1>My Logo</h1>
                                </div>
                            </div>
                            <form id="loginform">
                                <div class="formgroup col-xl-8 mx-auto text-center">
                                    <div class="col-xs-2">
                                        <input class="form-control mt-1" aria-label="Username or email" aria-required="true" id="username" name="username" type="text" placeholder="Username or email"/>
                                        <input class="form-control mt-1" aria-label="Password" aria-required="true" id="password" name="password" type="password" placeholder="Password"/>
                                        <div class="border border-light p-3 mb-4">
                                            <div class="text-center">
                                                <button class="btn btn-primary pl-5 pr-5" type="submit">Log In</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div class="border border-light p-3 mb-4">
                                <div class="text-center">
                                    <small>Forgot password?</small>
                                </div>
                            </div>
                        </div>
                        <div class="card bg-light mt-3">
                            <div class="border border-light p-3">
                                <div class="text-center">
                                    <span>Don't have an account? </span><a href="#">Sign Up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;