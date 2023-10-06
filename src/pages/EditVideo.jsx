import PropTypes from "prop-types";
import styled from "styled-components";
import { Formulario } from "./../components";

function obtenerVideo(slice, videos) {
  const url = new URL(window.location).pathname;
  const id = url.slice(slice);
  const unVideo = videos.filter((video) => video.id === id);
  return unVideo;
}

export default function EditVideo({ videosUse, actualizarVideo, formaciones }) {
  const video = obtenerVideo(14, videosUse)[0];

  return (
    <StyledMain>
      <h1>Editar Video</h1>
      <Formulario
        formaciones={formaciones}
        actualizarVideo={actualizarVideo}
        datos={video}
      />
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

EditVideo.propTypes = {
  videosUse: PropTypes.array,
  actualizarVideo: PropTypes.func,
  formaciones: PropTypes.array,
};
