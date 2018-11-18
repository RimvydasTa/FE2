import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import Genres from './GenreList';
import { rootThunk } from '../rootThunk';


class App extends Component {
  constructor(props) {
    super(props);

    props.onGetMovies();
  }
  render() {
    return (
      <React.Fragment>
        <Genres />
        <div className="cards">
          {this.props.movieList.map(movie => (
            <Card key={movie.id} movie={movie}

            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  ({ movies: { list } }) => ({
    movieList: list
  }),
  dispatch => ({
    onGetMovies: () => dispatch(
        rootThunk.getMovies()
    ),
  })
)(App);
