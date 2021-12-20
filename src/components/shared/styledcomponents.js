import styled from "styled-components";

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
    PageTitle,
    PageTitleSucess,
    LargeBtn
}