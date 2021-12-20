import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PageTitleSucess, LargeBtn } from "../../shared/styledcomponents";

export default function Success({ reservation, setReservation }) {

    let navigate = useNavigate();

    if (!reservation) {
        navigate("/");
    }

    const {
        cpf,
        name,
        selectedSeats,
        showtime,
    } = reservation;


    function returnToHome () {
        setReservation(null);
        navigate("/");
    }

  return (
    <ReviewPage>
      <PageTitleSucess>
        Pedido feito<br />com sucesso!
      </PageTitleSucess>

      <ReservationInfo>
        <h2>Filme e sessão</h2>
        <div>{showtime.movie.title}</div>
        <div>{showtime.day.date} - {showtime.name}</div>
      </ReservationInfo>

      <ReservationInfo>
        <h2>Ingressos</h2>
        {
          selectedSeats.map(s => (
            <div key={s.name}>Assento {s.name}</div>
          ))
        }
      </ReservationInfo>

      <ReservationInfo>
        <h2>Comprador</h2>
        <div>{name}</div>
        <div>CPF: {cpf}</div>
      </ReservationInfo>

      <LargeBtn onClick={returnToHome}>
        Voltar pra Home
      </LargeBtn>
    </ReviewPage>
  );
}

const ReviewPage = styled.div`
  margin-bottom: 117px;
  padding-bottom: 24px;
`

const ReservationInfo = styled.div`
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    font-size: 22px;
    margin-bottom: 30px;
    h2 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 5px;
    }
`