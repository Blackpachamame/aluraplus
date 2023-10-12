import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ListBusqueda = ({
  results,
  setResults,
  setBusqueda,
  setToggleSearch,
}) => {
  const handleLink = () => {
    setResults([]);
    setBusqueda("");
    setToggleSearch(false);
  };

  return (
    <StyledResult>
      {results.map((result) => {
        return (
          <Link
            to={`/video/${result.id}`}
            key={result.id}
            onClick={() => handleLink()}
          >
            {result.title}
          </Link>
        );
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
  a {
    width: 100%;
    color: var(--color-primary);
    padding: 10px 20px;
    &:hover {
      background-color: var(--color-black-medium);
    }
  }
`;

ListBusqueda.propTypes = {
  results: PropTypes.array,
  setResults: PropTypes.func,
  setBusqueda: PropTypes.func,
  setToggleSearch: PropTypes.func,
};
