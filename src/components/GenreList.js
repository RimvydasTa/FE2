import React, { Component } from 'react';
import { connect } from 'react-redux';
import {rootThunk} from "../rootThunk";

class GenreList extends Component {

  constructor(props) {
    super(props);
    props.onGetGenres();
  }

  render() {
    const currentDate =  new Date().toLocaleString();
    const {genres} = this.props;

    return (
      <div className="genres">
        {genres.map(({ id, name }) => (
          <div key={id} className="genre"
               onClick=
                 {
                   () => rootThunk.logAndSetMoviesToGenres(
                       id,  currentDate, `Genre is now ${name}`)
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
    ({ genres }) => ({genres}),
    (dispatch) => {
        return {
            onLogToConsole:
                (name, currentDate) => dispatch(
                rootThunk.logToConsole(name, currentDate)
            ),
            onGetGenres:
                () => dispatch(
                rootThunk.getGenres()
            ),
            onSetMoviesToGenre:
                (id) => dispatch(
                rootThunk.setMoviesToGenre(id)
            )
        }

    }
)(GenreList);
