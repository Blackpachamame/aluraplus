import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

export default function Busqueda({ videosUse, setResults }) {
  const [busqueda, setBusqueda] = useState("");

  const handleChange = (e) => {
    const valorInput = e.target.value;
    setBusqueda(valorInput);
    const filteredVideos =
      valorInput.length > 0
        ? videosUse.filter((video) =>
            video.title.toUpperCase().includes(valorInput.toUpperCase())
          )
        : [];
    setResults(filteredVideos);
  };

  const handleBlur = () => {
    const valorSearch = "";
    setBusqueda(valorSearch);
    // const filteredVideos = [];
    // setResults(filteredVideos);
  };

  return (
    <StyledBusqueda>
      <ContainerInput>
        <input
          name="search"
          placeholder="¿Qué buscas?"
          value={busqueda}
          onChange={(e) => handleChange(e)}
          onBlur={() => handleBlur()}
          type="search"
        />
        <BsSearch aria-label="Search" style={{ fontSize: "1.5rem" }} />
      </ContainerInput>
    </StyledBusqueda>
  );
}

const StyledBusqueda = styled.div`
  position: absolute;
  left: 0;
  bottom: 100%;
  width: 100%;
  background-color: var(--color-black-ultra-dark);
`;

const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 64px;
  border-bottom: solid 2px var(--color-primary);
  padding: 16px 36px;

  input {
    margin: 0;
    border: 0;
    font-size: 0.875rem;
    height: 100%;
    width: 100%;
    color: var(--color-white);
    background-color: transparent;
    outline: none;
    &::placeholder {
      color: var(--color-primary);
    }
  }

  @media (max-width: 425px) {
    padding: 16px;
  }
`;

Busqueda.propTypes = {
  videosUse: PropTypes.array,
  setResults: PropTypes.func,
};
