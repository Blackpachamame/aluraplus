import PropTypes from "prop-types";
import styled from "styled-components";
import Formulario from "../components/Formulario";

export default function AddVideo({ agregarVideo, formaciones }) {
  return (
    <StyledMain>
      <h1>Agregar Video</h1>
      <Formulario formaciones={formaciones} agregarVideo={agregarVideo} />
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

AddVideo.propTypes = {
  agregarVideo: PropTypes.func,
  formaciones: PropTypes.array,
};
