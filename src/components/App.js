import Navbar from "./Navbar";
import Movies from "./pages/MoviesPage/Movies";
import Showtimes from "./pages/ShowtimesPage/Showtimes";
import Seats from "./pages/SeatsPage/Seats";
import Success from "./pages/SucessPage/Sucess";
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from "styled-components";

export default function App() {

  const [reservation, setReservation] = useState(null);

  return (
    <>
      <Navbar />
      <PageView>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Movies />} exact />
            <Route path="/filme/:movieId" element={<Showtimes />} exact />
            <Route path="/sessao/:showtimeId" element={<Seats setReservation={setReservation}/>} exact />
            <Route path="/sucesso" element={<Success reservation={reservation} setReservation={setReservation}/>} exact />
          </Routes>
        </BrowserRouter>
        
      </PageView>
    </>
  );
}

const PageView = styled.div`
	margin-top: 67px;
`