import PropTypes from "prop-types";
import ResultBusqueda from "./ResultBusqueda";
import styled from "styled-components";

const ListBusqueda = ({ results }) => {
  return (
    <StyledResult>
      {results.map((result) => {
        return <ResultBusqueda result={result} key={result.id} />;
      })}
    </StyledResult>
  );
};

export default ListBusqueda;

const StyledResult = styled.div`
  width: 100%;
  background-color: var(--color-black-ultra-dark);
  display: flex;
  flex-direction: column;
  border-bottom: 2px dotted var(--color-secondary);
  max-height: 300px;
  overflow-y: auto;
`;

ListBusqueda.propTypes = {
  results: PropTypes.array,
};
