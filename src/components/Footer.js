import styled from "styled-components";

export default function Footer({ showtime, weekday, name }) {

    return (
      <FooterContainer>

        <FooterPoster>
          <img src={showtime.posterURL} alt="poster"/>
        </FooterPoster>
  
        <FooterInfo>
            <span>{showtime.title}</span>
            <span>
                {weekday ? `${weekday} - ${name}` : null}
            </span>
        </FooterInfo>

      </FooterContainer>
    );
}

const FooterContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 117px;
    border-top: 1px solid #9EADBA;
    background-color: #DFE6ED;
    padding: 14px 10px;
    display: flex;
    border:none;
    box-shadow: 2px 2px 4px 2px rgba(0,0,0,.2);
`

const FooterPoster = styled.div`
    padding: 8px;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    img {
        width: 48px;
        height: 72px;
        object-fit: cover;
    }
`

const FooterInfo = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 16px;
    font-size: 26px;
    line-height: 120%;
`