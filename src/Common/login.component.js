import React, { Component } from "react";
import Form from "./form.component";
import Input from "./input.component";

class Login extends Form {
    state = {
        data: { username: '', password: '' },
        errors: { username: '', password: '' }
    }



    doSubmit = (e) =>{
        e.preventDefault();

        const userName = e.target[0].value;
        const password = e.target[1].value;

        if(userName === 'admin' && password === '12345') {
            this.props.history.push('/movies');
        }
        else {
            const errors = {...this.state.errors};

            errors.username = 'Username may be incorrect.';
            errors.password = 'Pass may be incorrect.';

            this.setState({ ...this.state, errors });
        }
    }

    // validateInput = (name, value) => {
    //     if (name === 'username') {
    //         if (value.trim() === '') return 'Username must not be empty.';
    //     }

    //     if (name === 'password') {
    //         if ( value.trim() === '') return "Password must not be empty.";
    //     }

    //     return '';
    // }

    // handleChange = (e) => {
    //     const name= e.currentTarget.name;
    //     const value = e.target.value;

    //     const error = this.validateInput(name, value);
    //     const errors = {...this.state.errors};

    //     errors[name] = error;

    //     const user = {...this.state.user};
    //     user[name] = value;

    //     this.setState({ user, errors });
    // }

    render() {
        return (
            <div className='container w-50 mx-auto'>
                <form onSubmit={this.handleSubmit}>
                <div class="mb-3">
                    {/* <label className="form-label" htmlFor="username">
                        User Name
                    </label>
                    <input
                    autoFocus
                        type="text"
                        value= {this.state.user.username}
                        className="form-control"
                        name="username"
                        id="username"
                        onChange={e => this.handleChange(e)}
                    /> */}
                    <Input
                        label="User Name"
                        type="text"
                        value= {this.state.data.username}
                        className="form-control"
                        name="username"
                        id="username"
                        onChange={e => this.handleChange(e)}
                        errors={this.state.errors}
                    />
                </div>
                <div class="mb-3">
                    
                    <Input
                        label="Password"
                        type="password"
                        value= {this.state.data.password}
                        className="form-control"
                        name="password"
                        id="password"
                        onChange={e => this.handleChange(e)}
                        errors={this.state.errors}
                    />
                </div>
                <div class="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="remember"
                    />
                    <label class="form-check-label" htmlFor="remember">
                        Check me out
                    </label>
                </div>
                <button type="submit" class="btn btn-primary">
                    Login
                </button>
            </form>
            </div>
        );
    }
}

export default Login;
