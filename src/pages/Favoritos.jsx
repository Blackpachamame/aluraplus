import { useContext } from "react";
import { MainContext } from "./../context/MainContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function colorFormacion(formaciones, video) {
  const color = formaciones.find(
    (formacion) => formacion.name === video.formacion
  );
  return color.color;
}

function filtrarFavoritos(videos) {
  const favoritos = videos.filter((video) => video.favorito === true);
  return favoritos;
}

export default function Favoritos() {
  const { videosUse, formacionesUse } = useContext(MainContext);
  const arrayFavoritos = filtrarFavoritos(videosUse);
  return (
    <StyledMain
      as={motion.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Favoritos</h1>
      <StyledContainer
        className={arrayFavoritos.length > 0 ? "container__favoritos" : ""}
      >
        {arrayFavoritos.length > 0 ? (
          videosUse.map((video) => {
            return (
              video.favorito && (
                <div key={video.id}>
                  <Link to={`/video/${video.id}`}>
                    <StyledFigure
                      className="project"
                      $bgColor={colorFormacion(formacionesUse, video)}
                    >
                      <img src={video.imgVideo} alt={video.title} />
                    </StyledFigure>
                  </Link>
                </div>
              )
            );
          })
        ) : (
          <h5>Aun no añadiste favoritos</h5>
        )}
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
`;

const StyledContainer = styled.div`
  width: 100%;
  text-align: center;
  &.container__favoritos {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 16px;
  }
`;

const StyledFigure = styled.figure`
  --bg-color: ${(props) => props.$bgColor};
  background-color: var(--color-black-dark);
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
