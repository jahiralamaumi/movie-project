import React, { Component } from 'react';

const Input = ({ label, type, value, name, id, onChange, errors }) => {
// const Input = ({ props }) => {
    // const { label, type, value, name, id, onChange } = props; //evabe kaj kore na
    return ( 
        <>
            <label className="form-label" htmlFor={id}>
                {label}
            </label>
            <input
                type = {type}
                value= {value}
                className="form-control"
                name={name}
                id={id}
                onChange={onChange}
            />
            {errors[name] && <div className="alert alert-danger"> {errors[name]} </div>}
        </>
     );
}
 
export default Input;