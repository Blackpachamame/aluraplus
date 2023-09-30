import PropTypes from "prop-types";
import styled from "styled-components";

const Campo = ({
  label,
  placeholder,
  required,
  valor,
  actualizarValor,
  type,
}) => {
  const placeholderModificado = `${placeholder}...`;

  const tipo = type ? type : "text";

  const manejarCambio = (event) => {
    actualizarValor(event.target.value);
  };

  return (
    <StyledCampo className={`campo campo-${type}`}>
      <label htmlFor={label}>{label}</label>
      {tipo === "textarea" ? (
        <textarea
          id={label}
          name={label}
          placeholder={placeholderModificado}
          required={required}
          value={valor}
          onChange={manejarCambio}
        />
      ) : (
        <input
          id={label}
          name={label}
          placeholder={placeholderModificado}
          required={required}
          value={valor === "" && type === "color" ? "#000000" : valor}
          onChange={manejarCambio}
          type={tipo}
        />
      )}
    </StyledCampo>
  );
};

export default Campo;

const StyledCampo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 3px;
  }
  input {
    height: 60px;
  }
  textarea {
    height: 120px;
    padding-top: 20px;
    resize: none;
  }

  textarea::-webkit-scrollbar {
    width: 5px;
  }

  textarea::-webkit-scrollbar-thumb {
    background-color: var(--color-black-medium);
    border-radius: 5px;
  }
  input,
  textarea {
    font-family: var(--ff-body);
    font-size: 16px;
    color: var(--color-white);
    background-color: var(--color-black-light);
    padding-inline: 20px;
    border: none;
    border-bottom: 2px solid var(--color-gray-medium);
    border-radius: 5px 5px 0 0;
    outline: none;
    transition: all 0.5s ease;
    &:focus {
      border-bottom: 2px solid var(--color-secondary);
    }
  }
  input[type="color"] {
    width: 100%;
    padding: 0;
    border: none;
    border-radius: 0;
  }

  input::placeholder,
  textarea::placeholder {
    color: #a4a4a4;
  }

  .campo-color input {
    padding: 20px;
    width: 100%;
  }
`;

Campo.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  valor: PropTypes.string,
  actualizarValor: PropTypes.func,
  type: PropTypes.string,
};
