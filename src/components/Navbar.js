import styled from "styled-components";
import LOGO from "../assets/img/logo.png"
import { useNavigate } from "react-router-dom";

export default function Navbar({ setReservation }) {

    let navigate = useNavigate();

    function reloadPage() {
        setReservation(null);
        navigate("/");
    }

    return (
      <NavbarContainer>
        <img src={LOGO} alt="logo" onClick={reloadPage}/>
      </NavbarContainer>
    );
}

const NavbarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 67px;
    background-color: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #E8833A;
    font-size: 34px;
    text-transform: uppercase;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    img {
        height:50px;
        cursor: pointer;
    }
`