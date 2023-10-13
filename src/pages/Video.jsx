import { useState, useContext } from "react";
import { MainContext } from "./../context/MainContext";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Modal } from "./../components";
import { BsPlayFill, BsFillHeartFill, BsHeart } from "react-icons/bs";
import { motion } from "framer-motion";

function obtenerVideo(id, videos) {
  const unVideo = videos.filter((video) => video.id === id);
  return unVideo;
}

export default function Video() {
  const { videosUse, actualizarFav } = useContext(MainContext);
  const url = new URL(window.location).pathname;
  const id = url.slice(7);
  const video = obtenerVideo(id, videosUse)[0];
  const favorito = video?.favorito;

  const [openModal, setOpenModal] = useState(false);

  function toggleFav(video, fav) {
    actualizarFav(video, !fav);
  }

  let navigate = useNavigate();
  let goBack = () => {
    navigate(-1);
  };

  return (
    <StyledContainer
      as={motion.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        url={video?.urlVideo}
        tipo="video"
      />
      <div className="video__descripcion">
        <div className="video__formacion">{video?.formacion}</div>
        <h1>{video?.title}</h1>
        <p>{video?.descripcion}</p>
        <ContainerButtons>
          <button className="video__ver" onClick={() => setOpenModal(true)}>
            <BsPlayFill /> Ver ahora
          </button>
          <button onClick={goBack} className="video__volver">
            Volver
          </button>
          <button
            className="video__favoritos"
            onClick={() => toggleFav(video, favorito)}
          >
            {favorito ? <BsFillHeartFill /> : <BsHeart />}
          </button>
        </ContainerButtons>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.main`
  max-width: 874px;
  padding-top: 16px;
  padding-inline: 32px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  .video__formacion {
    margin-bottom: 5px;
    font-size: 12px;
    color: var(--color-black-ultra-dark);
    background-color: var(--color-white);
    border-radius: 10px;
    padding: 3px 10px;
    display: inline-block;
  }
  .video__descripcion h1,
  .video__descripcion p {
    font-family: var(--ff-body);
    margin-bottom: 10px;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  @media (max-width: 425px) {
    padding-inline: 16px;
  }
`;

const ContainerButtons = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  @media (max-width: 430px) {
    max-width: 180px;
    .video__ver {
      width: 100%;
    }
  }

  .video__volver,
  .video__ver {
    height: 56px;
    font-size: 18px;
    font-weight: 700;
    padding: 14px 22px;
    border: 2px solid var(--color-secondary);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    cursor: pointer;
  }
  .video__ver {
    gap: 5px;
    color: var(--color-black-ultra-dark);
    background: var(--color-secondary);
    &:hover {
      border: 2px solid var(--color-primary);
      background: var(--color-primary);
    }
    & svg {
      font-size: 32px;
    }
  }
  .video__volver {
    color: var(--color-secondary);
    background: var(--color-black-dark);
    &:hover {
      color: var(--color-secondary);
      border: 2px solid var(--color-secondary);
      background: var(--color-black-ultra-dark);
    }
  }

  .video__edicion {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .video__favoritos {
    font-size: 16px;
    padding: 15px 13px 12px;
    color: var(--color-secondary);
    background: var(--color-black-ultra-dark);
    border: 2px solid var(--color-secondary);
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      color: var(--color-secondary);
      border: 2px solid var(--color-secondary);
      background: var(--color-black-medium);
    }
  }
`;
