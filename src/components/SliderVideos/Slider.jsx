import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const SliderComp = ({ formacion, videosUse }) => {
  const sliderProject = videosUse.map((item) => {
    return (
      <Link to={`/video/${item.id}`} key={item.id}>
        <StyledFigure className="project" $bgColor={formacion.color}>
          <img src={item.imgVideo} alt={item.title} />
        </StyledFigure>
      </Link>
    );
  });
  const longitudSlider = sliderProject.length;

  var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  var settingsShort = {
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: longitudSlider,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <ContainerSlider>
      {longitudSlider < 3 ? (
        <Slider
          {...settingsShort}
          className={longitudSlider < 2 ? "center mini" : "center short"}
        >
          {sliderProject}
        </Slider>
      ) : (
        <Slider {...settings}>{sliderProject}</Slider>
      )}
    </ContainerSlider>
  );
};

export default SliderComp;

const ContainerSlider = styled.div`
  position: relative;
  margin: 0 auto;
  width: 90%;
  & a {
    pointer-events: none;
  }
`;

const StyledFigure = styled.figure`
  --bg-color: ${(props) => props.$bgColor};
  background-color: var(--color-black-dark);
  margin: 0 0.5rem;
  padding: 0.2rem;
  border-radius: 4px;
  border: 2px solid var(--bg-color);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  :hover > img {
    transform: scale(1.3);
  }
  img {
    border-radius: 3px;
    object-fit: cover;
    transition: transform 400ms ease-in-out;
  }
`;

SliderComp.propTypes = {
  formacion: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    icon: PropTypes.string,
    color: PropTypes.string,
  }),
  videosUse: PropTypes.array,
};
