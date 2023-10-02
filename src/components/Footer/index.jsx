import styled from "styled-components";
import { logo, logoCircle } from "../../assets/images";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <StyledFooter>
      <div className="textFooter">Blackpachamame@2023</div>
      <div className="containerLogo">
        <img className="logoCircle" src={logoCircle} alt="" />
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="redes">
        <a
          href="https://github.com/Blackpachamame"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver github"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/marcos-travaglini/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver linkedin"
        >
          <BsLinkedin />
        </a>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  width: 100%;
  background-color: var(--color-black-ultra-dark);
  padding: 16px 36px;
  border-top: solid 2px var(--color-primary);
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: 250px auto 250px;
  grid-template-areas: "texto logo redes";
  .textFooter {
    grid-area: texto;
    font-family: var(--ff-title);
  }
  .containerLogo {
    grid-area: logo;
    position: relative;
    & .logoCircle {
      width: 80px;
      height: 80px;
      animation: rotate 30s infinite;
    }
    & .logo {
      width: 20px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .redes {
    grid-area: redes;
    font-size: 32px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 24px;
  }
  @media (max-width: 768px) {
    grid-template-columns: auto auto;
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
      "logo texto"
      "logo redes";
    .textFooter {
      text-align: end;
    }
  }
  @media (max-width: 425px) {
    padding: 16px;
    .containerLogo {
      & .logoCircle {
        width: 70px;
        height: 70px;
      }
    }
    .textFooter {
      font-size: 16px;
    }
    .redes {
      font-size: 28px;
      gap: 16px;
    }
  }
  @keyframes rotate {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
