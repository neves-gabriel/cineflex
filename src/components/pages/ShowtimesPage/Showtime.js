import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Showtime({ showtime }) {

  return (
    <Link to={`/sessao/${showtime.id}`}>
      <ShowtimeContainer>
        {showtime.name}
      </ShowtimeContainer>
    </Link>
  );
}

const ShowtimeContainer = styled.div`
    background-color: #E8833A;
    border-radius: 3px;
    width: 83px;
    height: 43px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 18px;
    margin-right: 10px;
    cursor: pointer;
    border:none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: transform .2s;
    :hover {
        transform: scale(1.1);
    }
`