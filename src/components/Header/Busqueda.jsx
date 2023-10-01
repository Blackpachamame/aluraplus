import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

export default function Busqueda() {
  return (
    <StyledBusqueda>
      <StyledBusquedaForm>
        <StyledBusquedaInput name="search" placeholder="¿Qué buscas?" />
        <StyledBusquedaBtn>
          <BsSearch aria-label="Search" style={{ fontSize: "1.5rem" }} />
        </StyledBusquedaBtn>
      </StyledBusquedaForm>
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

const StyledBusquedaForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 64px;
  border-bottom: solid 2px var(--color-primary);
  padding: 16px 36px;
  @media (max-width: 425px) {
    padding: 16px;
  }
`;

const StyledBusquedaInput = styled.input`
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
`;

const StyledBusquedaBtn = styled.button`
  color: var(--color-gray-light);
  background-color: transparent;
  border: 0;
`;
