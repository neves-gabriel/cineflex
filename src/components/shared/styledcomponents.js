import styled from "styled-components";
import LOADING_GIF from "../../assets/gif/loading.gif";

const Loading = styled.img.attrs({
    src: `${LOADING_GIF}`
    })`
    display: block; 
    height: 150px;
    width: 150px;
    background-size: cover;
    margin: 30vh auto 0 auto;
    border: none;
`

const PageTitle = styled.h1`
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 110px;
`

const PageTitleSucess = styled.h1`
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 110px;
    color: #247A6B;
    font-weight: bold;
    text-align: center;
`

const LargeBtn = styled.button`
    width: 225px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    background-color: #E8833A;
    font-size: 18px;
    border: none;
    border-radius: 3px;
    margin: 0 auto;
`

export {
    Loading,
    PageTitle,
    PageTitleSucess,
    LargeBtn
}