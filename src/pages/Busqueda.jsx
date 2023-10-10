import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

function colorFormacion(formaciones, video) {
  const color = formaciones.find(
    (formacion) => formacion.name === video.formacion
  );
  return color.color;
}

export default function Busqueda({ videosUse, formaciones }) {
  return (
    <StyledMain>
      <h1>Favoritos</h1>
      <StyledContainer>
        {videosUse.map((video) => {
          return (
            video.favorito && (
              <div key={video.id}>
                <Link to={`/video/${video.id}`}>
                  <StyledFigure
                    className="project"
                    $bgColor={colorFormacion(formaciones, video)}
                  >
                    <img src={video.imgVideo} alt={video.title} />
                  </StyledFigure>
                </Link>
              </div>
            )
          );
        })}
      </StyledContainer>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  width: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  h1 {
    margin-bottom: 10px;
    text-align: center;
  }
  @media (max-width: 425px) {
    padding: 16px;
  }
  @media (max-width: 375px) {
    padding: 16px 0;
  }
`;

const StyledContainer = styled.div`
  display: flex;
`;

const StyledFigure = styled.figure`
  --bg-color: ${(props) => props.$bgColor};
  background-color: var(--color-black-dark);
  margin: 0 0.5rem;
  padding: 0.2rem;
  border-radius: 4px;
  border: 2px solid var(--bg-color);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  :hover > img {
    transform: scale(1.3);
  }
  img {
    border-radius: 3px;
    object-fit: cover;
    transition: transform 400ms ease-in-out;
  }
`;

Busqueda.propTypes = {
  videosUse: PropTypes.array,
  formaciones: PropTypes.array,
};
