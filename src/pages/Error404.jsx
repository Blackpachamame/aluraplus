import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <StyledContainer>
      <figure>
        <img
          src="https://raw.githubusercontent.com/Blackpachamame/aluraplus/main/src/assets/images/logo/404page.png"
          alt="error 404"
        />
      </figure>
      <div className="contant_box_404">
        <h1>Parece que estás perdido</h1>

        <p>¡La página que estás buscando no está disponible!</p>

        <Link to="/" className="link_404">
          Volver al Home
        </Link>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    max-width: 400px;
  }
  .contant_box_404 h1,
  .contant_box_404 p {
    font-family: var(--ff-body);
    margin-bottom: 10px;
  }
  .contant_box_404 {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .link_404 {
    font-weight: 700;
    color: var(--color-black-ultra-dark);
    margin: 20px 0;
    padding: 14px 22px;
    background: var(--color-secondary);
    border: 2px solid var(--color-secondary);
    border-radius: 5px;
    transition: all 0.3s ease;
    &:hover {
      color: var(--color-secondary);
      border: 2px solid var(--color-secondary);
      background: var(--color-black-ultra-dark);
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }
  @media (max-width: 425px) {
    img {
      max-width: 300px;
    }
    .contant_box_404 {
      max-width: 290px;
    }
  }
`;
