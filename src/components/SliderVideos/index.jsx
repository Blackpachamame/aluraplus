import PropTypes from "prop-types";
import styled from "styled-components";
import SliderComp from "./SliderComp";

const SliderVideos = ({ formacion, videosFormacion }) => {
  return (
    <Container className="slider__videos">
      <StyledTitle
        id={formacion.name.replace(/\s+/g, "").toLowerCase()}
        color={formacion.color}
      >
        <img src={formacion.icon} alt="" width="30" height="30" />
        <span>{formacion.name}</span>
      </StyledTitle>
      <SliderComp formacion={formacion} videosFormacion={videosFormacion} />
    </Container>
  );
};

export default SliderVideos;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 16px 36px;
  position: relative;
  @media (max-width: 425px) {
    padding: 16px 16px 0;
  }
`;

const StyledTitle = styled.h2`
  --color-category: ${(props) => props.color};
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    color: var(--color-category);
    position: relative;
  }
  span:before {
    content: "";
    position: absolute;
    bottom: -2px;
    width: 100%;
    left: 0;
    height: 2px;
    border-radius: 2px;
    background: linear-gradient(
      130deg,
      var(--color-category),
      var(--color-black-dark) 90%
    );
  }
  @media (max-width: 990px) {
    margin-bottom: 0;
    span {
      width: 100%;
    }
    img {
      width: 24px;
      height: 24px;
    }
  }
`;

SliderVideos.propTypes = {
  formacion: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    icon: PropTypes.string,
    color: PropTypes.string,
  }),
  videosFormacion: PropTypes.array,
};
