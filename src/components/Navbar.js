import styled from "styled-components";
import LOGO from "../assets/img/logo.png"

export default function Navbar() {

    function reloadPage() {
        window.location.reload();
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
    img {
        height:40px;
    }
`