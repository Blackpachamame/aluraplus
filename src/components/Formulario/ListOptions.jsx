import { useContext } from "react";
import { MainContext } from "./../../context/MainContext";
import PropTypes from "prop-types";
import styled from "styled-components";
import { arrowDown, arrowDownFocus } from "../../assets/images";

const ListaOpciones = ({ valor, actualizarFormacion }) => {
  const { formacionesUse } = useContext(MainContext);
  const manejarCambio = (e) => {
    actualizarFormacion(e.target.value);
  };

  return (
    <StyledLista>
      <label htmlFor="Formacion">Formaciones</label>
      <StyledSelect
        id="Formacion"
        name="Formacion"
        value={valor}
        onChange={manejarCambio}
        required
        $arrowDorw={arrowDown}
        $arrowDorwFocus={arrowDownFocus}
      >
        <option value="" disabled defaultValue="" hidden>
          Seleccionar formación
        </option>
        {formacionesUse.map((formacion) => (
          <option key={formacion.id} value={formacion.name}>
            {formacion.name}
          </option>
        ))}
      </StyledSelect>
    </StyledLista>
  );
};

export default ListaOpciones;

const StyledLista = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  label {
    margin-bottom: 3px;
  }
`;

const StyledSelect = styled.select`
  --arrow-down: url("${(props) => props.$arrowDorw}");
  --arrow-down-focus: url("${(props) => props.$arrowDorwFocus}");
  height: 60px;
  font-family: var(--ff-body);
  font-size: 16px;
  color: var(--color-white);
  background-color: var(--color-black-light);
  padding-inline: 20px;
  border: none;
  border-bottom: 2px solid var(--color-gray-medium);
  border-radius: 5px 5px 0 0;
  appearance: none;
  transition: all 0.5s ease;
  background-image: var(--arrow-down);
  background-repeat: no-repeat;
  background-position: right 0.7rem top 50%;
  &:focus {
    border-bottom: 2px solid var(--color-secondary);
    background-image: var(--arrow-down-focus);
    outline: 0;
  }
  &:required:invalid {
    color: #a4a4a4;
  }
  option {
    color: var(--color-white);
  }
`;

ListaOpciones.propTypes = {
  valor: PropTypes.string,
  actualizarFormacion: PropTypes.func,
};
