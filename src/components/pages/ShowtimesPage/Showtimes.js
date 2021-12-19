import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

export default function SessionList() {
    const { idMovie } = useParams();

    const [sessions, setSessions] = useState([]);

	useEffect(() => {
		const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${idMovie}/showtimes`);

		requisicao.then(resposta => {
			setSessions(resposta.data.days);
		});
	}, []);

    console.log(sessions);

    return (
        <div class="container">
            <h2>Selecione o horário</h2>
            <div class="sessions">
                {sessions.map(({weekday,date,showtimes}) => (weekday ? (<div className="daySessions">
                                <p>{weekday} - {date}</p><div className="hours">
                                    {showtimes.map(({name, id}) =>  
                                        <button><Link to={`/sessao/${id}`}>{name}</Link>
                                        </button>
                                         )}
                                         </div>
                            </div>
                        ) : (
                            "Carregando Sessoes"
                        )))}
            </div>
        </div>
    )
}