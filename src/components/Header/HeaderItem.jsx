import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsFillHouseDoorFill, BsSearch, BsFillHeartFill } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";

export default function HeaderItem({ mostrarBarraBusqueda, iconDotsVertical }) {
  if (iconDotsVertical === "true") {
    return (
      <StyledDiv>
        <HiDotsVertical style={{ fontSize: "1.5rem" }} />
      </StyledDiv>
    );
  } else {
    return (
      <StyledHeaderItem>
        <li>
          <Link to="/">
            <BsFillHouseDoorFill style={{ fontSize: "1rem" }} />
            <StyledParagraph>Home</StyledParagraph>
          </Link>
        </li>
        <li>
          <StyledBtn onClick={mostrarBarraBusqueda}>
            <BsSearch style={{ fontSize: "1rem" }} />
            <StyledParagraph>Búsqueda</StyledParagraph>
          </StyledBtn>
        </li>
        <li>
          <Link to="/favoritos">
            <BsFillHeartFill style={{ fontSize: "1rem" }} />
            <StyledParagraph>Favoritos</StyledParagraph>
          </Link>
        </li>
      </StyledHeaderItem>
    );
  }
}

const StyledHeaderItem = styled.ul`
  list-style: none;
  padding-block: 10px;
  display: flex;
  align-items: center;
  gap: 32px;
  cursor: pointer;
  li a {
    font-weight: 700;
    font-size: 15px;
    color: var(--color-gray-light);
    display: flex;
    align-items: center;
    text-transform: uppercase;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

const StyledDiv = styled.div`
  font-size: 15px;
  color: var(--color-gray-light);
  cursor: pointer;
`;

const StyledBtn = styled.button`
  font-weight: 700;
  font-size: 15px;
  color: var(--color-gray-light);
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;
`;

const StyledParagraph = styled.p`
  font-size: 15px;
  margin-left: 0.5rem;
  position: relative;
  transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    margin: auto;
    width: 0%;
    height: 2px;
    color: transparent;
    background: var(--color-gray-light);
    border-radius: 0px 0px 4px 4px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }
  &:hover:after {
    width: 100%;
  }
`;

HeaderItem.propTypes = {
  mostrarBarraBusqueda: PropTypes.func,
  iconDotsVertical: PropTypes.string,
};
