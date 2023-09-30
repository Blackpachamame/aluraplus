import PropTypes from "prop-types";
import styled from "styled-components";
import FormFormacion from "../components/Formulario/FormFormacion";

export default function AddFormacion({ agregarFormacion }) {
  return (
    <StyledMain>
      <h1>Agregar Formación</h1>
      <FormFormacion agregarFormacion={agregarFormacion} />
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

AddFormacion.propTypes = {
  agregarFormacion: PropTypes.func,
};
