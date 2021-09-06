import './MovieList.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


export default function MovieList() {

    const [movies, setMovies] = useState([]);

	useEffect(() => {
		const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies");

		requisicao.then(resposta => {
			setMovies(resposta.data);
		});
	}, []);

    console.log(movies);

    return (
        <div class="container">
            <h2>Selecione o filme</h2>
            <div class="posters">
                    {movies.map(({posterURL, id})=> (posterURL ? (<>
                        <Link to={`/filme/${id}`}>
                            <img src={posterURL} alt="Movie Poster" />
                        </Link> </>
                    ) : (
                        "Carregando Filmes"
                    )))}   
            </div>
        </div>
    )
}