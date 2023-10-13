import { useContext } from "react";
import { MainContext } from "./../context/MainContext";
import styled from "styled-components";
import { Formulario } from "./../components";
import { motion } from "framer-motion";

function obtenerVideo(slice, videos) {
  const url = new URL(window.location).pathname;
  const id = url.slice(slice);
  const unVideo = videos.filter((video) => video.id === id);
  return unVideo;
}

export default function EditVideo() {
  const { videosUse } = useContext(MainContext);
  const video = obtenerVideo(14, videosUse)[0];

  return (
    <StyledMain
      as={motion.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Editar Video</h1>
      <Formulario datos={video} />
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
