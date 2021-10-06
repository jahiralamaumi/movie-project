import React, { Component } from 'react';

class Form extends Component {
    state = {
        data: {},
        errors: {}
    }

    // handleSubmit = (e) =>{
    //     e.preventDefault();

    //     const userName = e.target[0].value;
    //     const password = e.target[1].value;

    //     if(userName === 'admin' && password === '12345') {
    //         this.props.history.push('/movies');
    //     }
    //     else {
    //         const errors = {...this.state.errors};

    //         errors.username = 'Username may be incorrect.';
    //         errors.password = 'Pass may be incorrect.';

    //         this.setState({ ...this.state, errors });
    //     }
    // }
    handleSubmit = (e) =>{
        e.preventDefault();

        this.doSubmit();
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
    propertyValidate = (name, value) => {
        if (name === 'username') {
            if (value.trim() === '') return 'Username must not be empty.';
        }

        if (name === 'password') {
            if ( value.trim() === '') return "Password must not be empty.";
        }

        return '';
    }

    // handleChange = ({ currentTarget: input }) => {
    //     const name= input.name;
    //     const value = input.value;

    //     const error = this.validateInput(name, value);
    //     const errors = {...this.state.errors};

    //     errors[name] = error;

    //     const user = {...this.state.user};
    //     user[name] = value;

    //     this.setState({ user, errors });
    // }

    handleChange = ({ currentTarget: input }) => {
        const data= { ...this.state.data };
        data[input.name] = input.value;
        

        const error = this.propertyValidate(input.name, input.value);
        const errors = {...this.state.errors};

        if (error) errors[input.name] = error;
        else delete errors[input.name];

        this.setState({ data, errors: errors || {} });
    }
    
    // render() { 
    //     return <div></div>;
    // }
}
 
export default Form;