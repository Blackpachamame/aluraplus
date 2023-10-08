import { videos } from "./../assets/data/videos";
import { formaciones } from "./../assets/data/formaciones";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Favoritos() {
  return (
    <main>
      <h1>Favoritos</h1>
      <StyledContainer>
        {videos.map((video) => {
          return (
            video.favorito && (
              <div key={video.id}>
                <Link to={`/video/${video.id}`}>
                  <StyledFigure
                    className="project"
                    $bgColor={formaciones.forEach(
                      (formacion) =>
                        formacion.name === video.formacion && formacion.color
                    )}
                  >
                    <img src={video.imgVideo} alt={video.title} />
                  </StyledFigure>
                </Link>
              </div>
            )
          );
        })}
      </StyledContainer>
    </main>
  );
}

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
