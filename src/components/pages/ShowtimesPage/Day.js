import styled from "styled-components";
import Showtime from "./Showtime";

export default function Day({ day }) {

  return (
    <DayContainer>

      <DayTitle>
        {day.weekday} - {day.date}
      </DayTitle>

      <ShowtimeList>
        {
          day.showtimes.map(s => (
            <Showtime showtime={s} key={s.id} />
          ))
        }
      </ShowtimeList>
      
    </DayContainer>
  );
}

const DayContainer = styled.div`
    margin: 0 0 22px;
`

const DayTitle = styled.div`
    font-size: 20px;
    margin: 0 0 22px;
`
const ShowtimeList = styled.div`
    display: flex;
`