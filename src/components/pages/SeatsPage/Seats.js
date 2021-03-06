import Footer from "../../Footer";
import { getSeats, postReservation } from "../../../services/cineflex";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { Loading, PageTitle, LargeBtn} from "../../shared/styledcomponents";
import styled from "styled-components";

export default function Seats({ setReservation }) {

  const [showtime, setShowtime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const { showtimeId } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    getSeats(showtimeId)
      .then(res => {
        setShowtime(res.data)
      })
  }, [showtimeId]);

  if ( showtime === null ){
    return (<Loading />)
  }

  function selectSeats (seat) {

    if (!seat.isAvailable) {
      alert("Esse assento não está disponível");
      return;
    }

    seat.isSelected = true;

    if (selectedSeats.includes(seat)) {
      if (window.confirm(`Você gostaria realmente de remover o assento ${seat.name}?`)) {
      const filteredSeats = selectedSeats.filter(s => s !== seat);
      setSelectedSeats(filteredSeats);
      }
    } else {
      setSelectedSeats([...selectedSeats, seat])
    }
  }

  function sendReservation () {

    const body = {
      ids: selectedSeats.map(s => s.id),
      name,
      cpf,
    }

    if (name.length <= 0) {
      alert("Insira um nome valido")
    }

    if (cpf.length <= 0 || !testCPF(body.cpf)) {
      alert("Insira um CPF valido")
    }

    if (selectedSeats.length <= 0) {
      alert("Selecione pelo menos um assento")
    }

    if (name && cpf && selectedSeats.length > 0 && testCPF(body.cpf)) {
      postReservation(body);
      navigate("/sucesso");
    }

    setReservation({ showtime, selectedSeats, name, cpf })
  }

  function testCPF(strCPF) {
    var sum;
    var rest;
    sum = 0;
    if (strCPF === "00000000000") return false;

    for (let i=1; i<=9; i++) sum = sum + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    rest = (sum * 10) % 11;

      if ((rest === 10) || (rest === 11))  rest = 0;
      if (rest !== parseInt(strCPF.substring(9, 10)) ) return false;

    sum = 0;
      for (let i = 1; i <= 10; i++) sum = sum + parseInt(strCPF.substring(i-1, i)) * (12 - i);
      rest = (sum * 10) % 11;

    if ((rest === 10) || (rest === 11))  rest = 0;
    if (rest !== parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
  }

  return (
    <SeatsPage>

      <PageTitle>
        Selecione o(s) assento(s)
      </PageTitle>

      <SeatList>
        {showtime ?
          showtime.seats.map(s => (
            <Seat isAvailable={s.isAvailable} isSelected={selectedSeats.find((seat) => seat.id === s.id) ? true : false} onClick={() => selectSeats(s)} key={s.id}>
              {s.name}
            </Seat>
          ))
          :
          ''
        }
      </SeatList>

      <SeatsCaption>
        <div>
          <Seat isAvailable={true} isSelected={true} />
          <span>Selecionado</span>
        </div>

        <div>
          <Seat isAvailable={true} isSelected={false} />
          <span>Disponível</span>
        </div>

        <div>
          <Seat isAvailable={false} isSelected={false} />
          <span>Indisponível</span>
        </div>
      </SeatsCaption>

      <FormsContainer>
          <InputGroup>
            <h1>Nome do comprador:</h1>
            <input type="text" placeholder="Digite seu nome..." onChange={(e) => setName(e.target.value)} value={name} />
          </InputGroup>

          <InputGroup>
            <h1>CPF do comprador:</h1>
            <input type="text" placeholder="Digite seu CPF..." onChange={(e) => setCpf(e.target.value)} value={cpf} pattern="[0-9]{11}" maxLength={11} />
          </InputGroup>
      </FormsContainer>

      <LargeBtn onClick={sendReservation}>
        Reservar assento(s)
      </LargeBtn>

      {showtime ?
        <Footer showtime={showtime.movie} weekday={showtime.day.weekday} name={showtime.name}/>
        :
        ''
      }
    </SeatsPage>
  );
}

const SeatsPage = styled.div`
  margin-bottom: 117px;
  padding-bottom: 24px;
`

const SeatList = styled.div`
  padding: 0 24px;
  display: flex;
  flex-wrap: wrap;
  width: 350px;
  margin: -20px auto 0;
`

const Seat = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 12px;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  margin-bottom: 18px;
  cursor: pointer;
  border: 1px solid;
  :not(:nth-child(10n)) {
    margin-right: 5px;
  }
  background-color: ${props => props.isSelected ? "#8DD7CF;" : (props => props.isAvailable ? "#C3CFD9;" : "#FBE192;") }
  border-color: ${props => props.isSelected ? "#45BDB0;" : (props => props.isAvailable ? "#808F9D;" : "#F7C52B;") }
`

const SeatsCaption = styled.div`
  width: 350px;
  padding: 0 57px;
  display: flex;
  justify-content: space-between;
  margin: -1px auto 0;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 13px;
    letter-spacing: -0.013em;
    color: #4E5A65;
    text-align: center;
    span {
      margin-top: -10px;
    }
  }
`

const FormsContainer = styled.div`
  margin-top: 31px;
  padding: 0 24px;
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  :last-child {
    margin-bottom: 30px;
  }
  h1 {
    font-size: 18px;
    color: #293845;
  }
  input {
    border-radius: 3px;
    padding: 18px;
    border: 1px solid #D4D4D4;
    height: 51px;
    font-size: 18px;
    margin-top: 6px;
    margin-bottom: 6px;
    ::placeholder {
      color: #AFAFAF;
      font-style: italic;
      font-size: 18px;
    }
  }
`