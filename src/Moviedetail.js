import React, { Component } from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { Poster } from './movie';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
  state = {
      movie: {},
  }

  async componentDidMount() {
      try {
          // eslint-disable-next-line
          const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=429317dc9d5dcf6f81c04b10a5cc9638&language=en-US`);
          const movie = await res.json();
          this.setState({
              movie,
          });
      } catch (e) {
          console.log(e); // eslint-disable-line
      }
  }

  render() {
    const { movie } = this.state;

    return (
        <div>
            <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`} />
              <MovieInfo>
                <Overdrive id={movie.id}>
                  <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
                </Overdrive>
                <div>
                    {movie.title ? (
                        <h1>Hello</h1>
                    ) : (
                        <h1>No Title Found</h1>
                    )}
                    <h1>{movie.title}</h1>
                    <h3>{movie.release_date}</h3>
                    <p>{movie.overview}</p>
                </div>
              </MovieInfo>
        </div>
    );
  }
}

export default MovieDetail;

const MovieWrapper = styled.div`
    position: relative;
    padding-top: 65vh;
    background: url(${props => props.backdrop}) no-repeat;
    background-size: cover;
`;

const MovieInfo = styled.div`
    background: #3d344b;
    text-align: left;
    padding: 2rem 10%;
    display: flex;
    > div {
        margin-left: 20px;
    }
    img {
        position: relative;
        top: -5rem;
    }
`;
