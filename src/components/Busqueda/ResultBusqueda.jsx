import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ResultBusqueda = ({ result }) => {
  return (
    <StyledSearchResult>
      <Link to={`/video/${result.id}`}>{result.title}</Link>
    </StyledSearchResult>
  );
};

export default ResultBusqueda;

const StyledSearchResult = styled.div`
  padding: 10px 20px;
  &:hover {
    background-color: var(--color-black-medium);
  }
  a {
    width: 100%;
    color: var(--color-primary);
  }
`;

ResultBusqueda.propTypes = {
  result: PropTypes.object,
};
