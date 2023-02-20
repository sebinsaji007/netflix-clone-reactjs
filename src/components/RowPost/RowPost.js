import React, { useEffect, useState } from 'react';
import './RowPost.css';
import axios from '../../axios';
import { imgUrl } from '../../constants/constants';


function RowPost(props) {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data);
      setMovies(response.data.results);
    }).catch(error => {
      console.error(error);
    });
  }, [props.url]);

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((movie, index) => (
          <img
            key={movie.id}
            
            className={props.isSmall ? 'smallposter' : 'poster'}
            src={`${imgUrl}${movie.backdrop_path}`}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
}

export default RowPost;
