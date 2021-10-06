import logo from './logo.svg';
import './App.css';
import Movies from './Components/movies.component.js';
import Pagination from './Common/pagination.component.js';
import Navbar from './Common/navbar.component';
import Login from './Common/login.component';
import { Route, Switch } from 'react-router-dom';
import MovieForm from './Components/movie-form.component';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/movies" component= { Movies } />
      <Route path="/add-movie" component= { MovieForm } />
      <Route exact path="/" component= { Movies } />
    </Switch>
    </>
  );
}

export default App;
