import Movie from "./Movie";
import { getMovies } from "../../../services/cineflex";
import { useState, useEffect } from 'react';
import styled from "styled-components";
import { PageTitle } from "../../shared/styledcomponents";

export default function Movies() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies()
      .then(res => setMovies(res.data))
  }, [])

  return (
    <>
      <PageTitle>
        Selecione o filme
      </PageTitle>
      <MovieList>
        {
          movies.map(m => (
            <Movie key={m.id} movie={m} />
          ))
        }
      </MovieList>
    </>
  );
}

const MovieList = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`