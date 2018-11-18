import React from 'react';
import { getImageUrl } from '../../config';
import { connect } from 'react-redux';
import { rootThunk } from "../rootThunk";

class Card extends React.Component {
  constructor() {
    super();

    this.state = {
      opened: false,
    };
  }

  toggleSummary = () => {
    const { opened } = this.state;

    this.setState({
      opened: !opened
    });
  };

    logMovieLiked = (msg, date) => {
        this.props.onAddHeart();
        this.props.onLogToConsole(date,msg);
    };
    logMovieUnliked= (msg, date) => {
        this.props.onRemoveHeart();
        this.props.onLogToConsole(date,msg);
    };

  render() {
    const {
      isHearted,
      movie: {
        backdrop_path,
        original_title,
        overview,
        release_date,
        vote_average,
        vote_count,
      },
    } = this.props;
    const { opened } = this.state;
    const currentDate =  new Date().toLocaleString();
    return (
      <div className="card">
        <div
          className="card__image"
          style={{ backgroundImage: `url(${getImageUrl(backdrop_path)})` }}
        />

        <div className="card__title">
          {original_title}
        </div>

        <div className="card__like" onClick={
            isHearted
            ? () => {  this.logMovieUnliked(`Movie ${original_title} unliked`,currentDate)}
            : () => { this.logMovieLiked(`Movie ${original_title} liked`,currentDate)}
        }
        >
          <i className={`fa fa-heart${isHearted ? '' : '-o'}`} />
        </div>

        <div className="card__subtitle">
          <span>{release_date}</span>
          <span>{vote_average} ({vote_count} votes)</span>
        </div>

        <div className="card-info">
          <div className="card-info__header" onClick={this.toggleSummary}>
            Summary
          </div>

          {opened && <div className="card-info__description">{overview}</div>}

        </div>
      </div>
    );
  }
}

export default connect(
  (
       {
           likes: {
               likedMovieList
           }
       },
       {
           movie: {
               id
           }
       }
   ) =>
      ({
        isHearted: likedMovieList.includes(id)
      }),
  (dispatch,
   {
       movie: { id }
   }) => ({
    onAddHeart: () => dispatch(
        rootThunk.likeMovie(id)
    ),
    onRemoveHeart: () => dispatch(
        rootThunk.unLikeMovie(id)
    ),
    onLogToConsole: (movieName, currentDate) => dispatch(
        rootThunk.logToConsole(movieName, currentDate)
    )
  }),

)(Card);
