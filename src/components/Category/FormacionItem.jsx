import PropTypes from "prop-types";
import styled from "styled-components";

function FormacionItem({ name, color, icon }) {
  return (
    <StyledCategoryItem>
      <StyledCategory>
        <StyledCategoryLink href={"#" + name.replace(/\s+/g, "").toLowerCase()}>
          <figure
            style={{
              backgroundColor: color + "30",
            }}
          >
            <img src={icon} alt={name} width={30} height={30} />
          </figure>
          <StyledNameCategory style={{ color: color }}>
            {name}
          </StyledNameCategory>
        </StyledCategoryLink>
      </StyledCategory>
    </StyledCategoryItem>
  );
}

export default FormacionItem;

const StyledCategoryItem = styled.div`
  width: calc(20% - 16px);
  flex: 0 0 211px;
  @media (max-width: 525px) {
    flex: 0 1 0;
  }
`;

const StyledCategory = styled.div`
  font-family: var(--ff-title);
  padding: 18px;
  background: linear-gradient(45deg, rgba(5, 29, 59, 1) 50%, rgb(9 9 16) 100%);
  border-radius: 4px;
  border: solid 2px #051d3b;
  box-shadow: rgba(0, 0, 0, 0.73) 0px 15px 5px -10px;
  position: relative;
  z-index: 1;
  transition: all 0.5s;
  &:hover {
    transform: translateY(2px);
    box-shadow: none;
  }
  &::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(
      45deg,
      rgb(9 9 16) 0%,
      rgba(5, 29, 59, 1) 100%
    );
    z-index: -1;
    transition: opacity 0.5s linear;
    opacity: 0;
  }
  &:hover::before {
    opacity: 1;
  }
  @media (max-width: 525px) {
    padding: 0;
    background: none;
    border: none;
    box-shadow: none;
    &:hover {
      transform: translateY(2px);
      box-shadow: rgba(0, 0, 0, 0.73) 0px 15px 5px -10px;
    }
    &:hover::before {
      opacity: 0;
    }
  }
`;

const StyledCategoryLink = styled.a`
  color: var(--color-gray-light);
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  & figure {
    width: 40px;
    height: 40px;
    border-radius: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StyledNameCategory = styled.h3`
  font-size: 15px;
  margin-top: 10px;
  @media (max-width: 525px) {
    display: none;
  }
`;

FormacionItem.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
};
