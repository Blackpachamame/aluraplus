import styled from "styled-components";
import Slider from "react-slick";
import { banners } from "../../assets/data/banners.js";

export default function SliderTop() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <SliderContainer className="sliderTop">
      <Slider {...settings}>
        {banners.map((item) => {
          return (
            <StyledImg
              src={item.imgUrl}
              key={item.id}
              width="100%"
              height="100%"
              alt=""
            />
          );
        })}
      </Slider>
    </SliderContainer>
  );
}

const SliderContainer = styled.section`
  position: relative;
  width: 90%;
  margin: 0 auto;
  padding: 0 36px 32px;
  @media (max-width: 425px) {
    width: 100%;
    padding: 0 6px 32px;
  }
`;

const StyledImg = styled.img`
  max-height: 320px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;
