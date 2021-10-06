import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "./form.component";
import { getMovies } from "../services/movies.service.js";

class Navbar extends Form {
  state = {
    data: { search_query: '' },
    errors: {},
    movies: getMovies(),
  }

  doSubmit = (e) => {

  }

  searchMovies = (e) => {
    if (this.state.data.search_query.trim() === '') return [];
    return this.state.movies.filter(movie => movie.title.toLowerCase().includes(this.state.data.search_query.toLowerCase()));
  }

  render() {
    const searched_movies = this.searchMovies();
      return (
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                  <Link class="navbar-brand" to="/">
                      IMDb
                  </Link>
                  <button
                      class="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                  >
                      <span class="navbar-toggler-icon"></span>
                  </button>
                  <div
                      class="collapse navbar-collapse"
                      id="navbarSupportedContent"
                  >
                      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                          <li class="nav-item">
                              <Link
                                  class="nav-link active"
                                  aria-current="page"
                                  to="/movies"
                              >
                                  Movies
                              </Link>
                          </li>
                          <li class="nav-item">
                              <Link
                                  class="nav-link active"
                                  aria-current="page"
                                  to="/add-movie"
                              >
                                  Add Movie
                              </Link>
                          </li>
                      </ul>
                      <form class="d-flex" onSubmit={this.handleSubmit}>
                          <input
                              class="form-control me-2"
                              type="search"
                              placeholder="Search"
                              aria-label="Search"
                              name="search_query"
                              onChange={this.handleChange}
                              value={this.state.data.search_query}
                          />
                          <div
                              class={searched_movies.length ? "card" : 'card d-none'}
                              style={{
                                  width: "18rem",
                                  position: "absolute",
                                  top: 50,
                              }}
                          >
                              <ul class="list-group list-group-flush">
                                {
                                  searched_movies.map((movie, idx) => <li key={idx} className="list-group-item">{movie.title}</li>)
                                }
                              </ul>
                          </div>
                          <button
                              class="btn btn-outline-success"
                              type="submit"
                          >
                              Search
                          </button>
                      </form>
                  </div>
                  <ul className="navbar-nav">
                      <li className="nav-item d-flex">
                          <Link class="nav-link active" to="/login">
                              Login
                          </Link>
                          <Link class="nav-link active" to="/sign-up">
                              Sign up
                          </Link>
                      </li>
                  </ul>
              </div>
          </nav>
      );
  }
}

export default Navbar;
