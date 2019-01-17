import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Movie from './movie';

// Pure components only rerender when state or props change
// Pure components do not "deep check" inside objects

class MovieList extends PureComponent {
  state = {
      movies: [],
  }

  async componentDidMount() {
      try {
          const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=429317dc9d5dcf6f81c04b10a5cc9638&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
          const movies = await res.json();
          this.setState({
              movies: movies.results,
          });
      } catch (e) {
          console.log(e); // eslint-disable-line
      }
  }

  render() {
    return (
        <MovieGrid>
            {this.state.movies.map(movie => ( // eslint-disable-line
            <Movie key={movie.id} movie={movie} />
            ))}
        </MovieGrid>
    );
  }
}

export default MovieList;

const MovieGrid = styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(5, 1fr);
    grid-row-gap: 1rem;
`;
