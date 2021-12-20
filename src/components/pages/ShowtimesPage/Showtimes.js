import Day from "./Day";
import Footer from "../../Footer";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { getShowtimes  } from "../../../services/cineflex";
import { PageTitle } from "../../shared/styledcomponents";
import styled from "styled-components";

export default function Showtimes() {

  const [showtime, setShowtimes] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getShowtimes(movieId)
      .then(res => {
        setShowtimes(res.data)
      })
  }, [movieId])
  
  return (
    <>

      <PageTitle>
        Selecione o horário
      </PageTitle>

      <DayList>
        {
          showtime ?
          showtime.days.map(d => (
            <Day day={d} key={d.date} />
          ))
          :
          ''
        }
      </DayList>
      
      {showtime ? <Footer showtime={showtime}/> : null}
    
    </>
  );
}

const DayList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 23px;
    margin-bottom: 117px;
`