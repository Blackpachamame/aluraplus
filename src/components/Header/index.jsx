import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import HeaderItem from "./HeaderItem";
import Logo from "./Logo";
import Perfil from "./Perfil";

const Header = ({ mostrarBarraBusqueda }) => {
  const [toggle, setToggle] = useState(false);
  let menuResponsive = useRef();

  useEffect(() => {
    let handleMenuDownResponsive = (e) => {
      if (!menuResponsive.current.contains(e.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleMenuDownResponsive);

    return () => {
      document.removeEventListener("mousedown", handleMenuDownResponsive);
    };
  });

  return (
    <StyledHeader>
      <nav>
        <div>
          <Logo />
          <StyledUnorderedList>
            <HeaderItem
              mostrarBarraBusqueda={mostrarBarraBusqueda}
              iconDotsVertical="false"
            />
          </StyledUnorderedList>
          <StyledUnorderedListResponsive ref={menuResponsive}>
            <StyledToggle onClick={() => setToggle(!toggle)}>
              <HeaderItem
                mostrarBarraBusqueda={mostrarBarraBusqueda}
                iconDotsVertical="true"
              />
              {toggle ? (
                <StyledDropdown>
                  <HeaderItem
                    mostrarBarraBusqueda={mostrarBarraBusqueda}
                    iconDotsVertical="false"
                  />
                </StyledDropdown>
              ) : null}
            </StyledToggle>
          </StyledUnorderedListResponsive>
        </div>
        <Perfil />
      </nav>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  padding: 16px 36px;
  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    & > div {
      display: flex;
      align-items: center;
      gap: 32px;
    }
  }
  @media (max-width: 425px) {
    padding: 16px;
  }
`;

const StyledUnorderedList = styled.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
    position: relative;
  }
`;

const StyledUnorderedListResponsive = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 32px;
    position: relative;
  }
`;

const StyledToggle = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;

const StyledDropdown = styled.div`
  width: 180px;
  margin-top: 12px;
  padding: 6px 48px 6px 16px;
  background-color: var(--color-black-medium);
  border: 1px solid var(--color-gray-medium);
  border-radius: 4px;
  position: absolute;
  z-index: 1;
`;

Header.propTypes = {
  mostrarBarraBusqueda: PropTypes.func,
};
