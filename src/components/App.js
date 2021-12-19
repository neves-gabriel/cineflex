import Navbar from "./Navbar";
import Movies from "./pages/MoviesPage/Movies";
import Showtimes from "./pages/ShowtimesPage/Showtimes";
import Seats from "./pages/SeatsPage/Seats";
import Success from "./pages/SucessPage/Sucess";
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from "styled-components";

export default function App() {

  const [reservation, setReservation] = useState(null);

  return (
    <>
      <Navbar />
      <PageView>

        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Movies />
            </Route>
            <Route path="/filme/:movieId" exact>
              <Showtimes />
            </Route>
            <Route path="/sessao/:showtimeId" exact>
              <Seats setReservation={setReservation}/>
            </Route>
            <Route path="/sucesso" exact>
              <Success reservation={reservation} setReservation={setReservation}/>
            </Route>
          </Switch>
        </BrowserRouter>
        
      </PageView>
    </>
  );
}

const PageView = styled.div`
	margin-top: 67px;
`