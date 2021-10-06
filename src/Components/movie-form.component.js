import React, { Component } from 'react';
import Input from '../Common/input.component';
import Form from '../Common/form.component';

class MovieForm extends Form {
    state = {
        data: {
            title: '',
            poster: '',
            rating: ''
        },
        errors: {}
    }

    doSubmit = (e) => {

    }

    render() { 
        return (
            <div className='container w-50 mx-auto'>
                <form onSubmit={this.handleSubmit}>
                <div class="mb-3">
                    <Input
                        label="Movie Title"
                        type="text"
                        value= {this.state.data.title}
                        className="form-control"
                        name="title"
                        id="title"
                        onChange={e => this.handleChange(e)}
                        errors={this.state.errors}
                    />
                </div>
                <div class="mb-3">
                    
                    <Input
                        label="Poster URL"
                        type="text"
                        value= {this.state.data.poster}
                        className="form-control"
                        name="poster"
                        id="poster"
                        onChange={e => this.handleChange(e)}
                        errors={this.state.errors}
                    />
                </div>
                <div class="mb-3">
                    
                    <Input
                        label="IMDb Rating"
                        type="text"
                        value= {this.state.data.rating}
                        className="form-control"
                        name="rating"
                        id="rating"
                        onChange={e => this.handleChange(e)}
                        errors={this.state.errors}
                    />
                </div>
                <button type="submit" class="btn btn-primary">
                    Add Movie
                </button>
            </form>
            </div>    
        );
    }
}
 
export default MovieForm;