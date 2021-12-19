import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

export default function SeatList() {
    const { idShowtime } = useParams();

    const [seats, setSeats] = useState([]);

    const [selectseat, setSelectSeat] = useState([]);

    function selectedSeat() {
        if (selectedSeat === 'selecionado') {
          setSelectSeat('disponivel');
        } else {

        }
    }

	useEffect(() => {
		const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idShowtime}/seats`);

		requisicao.then(resposta => {
			setSeats(resposta.data.seats);
		});
	}, []);

    console.log(seats);

    return (
        <div class="container">
            <h2>Selecione o(s) assento(s)</h2>
            <div class="seats">
                {seats.map(({name,isAvailable}) => (name ? ( <button className={isAvailable === true ? 'disponivel' : 'indisponivel'}>
                    <p>{name}</p>
                    </button>
                        ) : (
                            "Carregando Assentos"
                        )))}
            </div>
            <div className="seatsDescription">
                <button className="selecionado"></button>
                <button className="disponivel"></button>
                <button className="indisponivel"></button>
            </div>
            <div className="seatsDescription">
                <span>Selecionado</span>
                <span>Disponível</span>
                <span>Indisponível</span>
            </div>
            <h3>Nome do comprador:</h3>
            <input type="text" placeholder="Digite seu nome..."/>
            <h3>CPF do comprador:</h3>
            <input type="text" placeholder="Digite seu CPF..."/>
            <button className="reserveSeats"><Link to="/sucesso">Reservar assento(s)</Link></button>
            
        </div>
    )
}