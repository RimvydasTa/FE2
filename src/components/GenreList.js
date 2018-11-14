import React, { Component } from 'react';
import { connect } from 'react-redux';
import {rootThunk} from "../rootThunk";

class GenreList extends Component {
  constructor(props) {
    super(props);
    props.onGetGenres();
  }

  render() {
    const {
      genres,
       onSetMoviesToGenre
    } = this.props;

    return (
      <div className="genres">
        {genres.map(({ id, name }) => (
          <div key={id} className="genre"
               onClick={
                onSetMoviesToGenre(id)
               }
          >
            {name}
          </div>
        ))}
      </div>
    );
  }
}

export default connect(
  ({ genres }) => ({
    genres
  }),
  dispatch => ({
    onGetGenres: () => dispatch(
        rootThunk.getGenres()
),
      onSetMoviesToGenre: (id) =>
    dispatch(
        rootThunk.setMoviesToGenre(id))
  })
)(GenreList);
