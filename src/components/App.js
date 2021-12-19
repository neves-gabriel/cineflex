import Navbar from "./Navbar";
import Movies from "./Movies/Movies";
import Showtimes from "./Showtimes/Showtimes";
import Seats from "./Seats/Seats";
import Success from "./Success/Success";
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function App() {

  const [reservation, setReservation] = useState(null);

  return (
    <>
      <Navbar />
      <div className="page">

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
        
      </div>
    </>
  );
}