import PropTypes from "prop-types";
import styled from "styled-components";
import FormFormacion from "../components/Formulario/FormFormacion";

function obtenerFormacion(slice, formaciones) {
  const url = new URL(window.location).pathname;
  const id = url.slice(slice);
  const unaFormacion = formaciones.filter((formacion) => formacion.id === id);
  return unaFormacion;
}

export default function EditFormacion({
  videosUse,
  formaciones,
  actualizarVideo,
  actualizarFormacion,
}) {
  const formacion = obtenerFormacion(18, formaciones)[0];

  return (
    <StyledMain>
      <h1>Editar Formacion</h1>
      <FormFormacion
        datosFormaciones={formacion}
        actualizarVideo={actualizarVideo}
        datosVideos={videosUse}
        actualizarFormacion={actualizarFormacion}
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

EditFormacion.propTypes = {
  videosUse: PropTypes.array,
  formaciones: PropTypes.array,
  actualizarVideo: PropTypes.func,
  actualizarFormacion: PropTypes.func,
};
