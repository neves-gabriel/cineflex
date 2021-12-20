import BACK_ICON from "../../assets/img/back-button.svg"
import { useNavigate } from "react-router-dom"
import styled from "styled-components";

export default function BackBtn() {

    const navigate = useNavigate();

    return (
        <BackBtnContainer className="turn-icon" src={BACK_ICON} alt="BACK-icon" onClick={() => navigate(-1)} />
    )
}

const BackBtnContainer = styled.img`
    position: absolute;
    width: 40px;
    height: 36px;
    cursor: pointer;
    left: 20px;
    top: 75px;
`