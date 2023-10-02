import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  --color-primary: rgb(39, 166, 189);
  --color-secondary: rgb(43, 222, 253);
  --color-white: rgb(255, 255, 255);
  --color-black-ultra-dark: rgb(3, 3, 6);
  --color-black-dark: rgb(9, 9, 16);
  --color-black-medium: rgb(30, 36, 47);
  --color-black-light: rgb(21, 21, 30);
  --color-gray-medium: rgb(92, 92, 92);
  --color-gray-light: rgb(245, 245, 245);
  --color-error: rgb(198, 40, 40);
  --ff-title: "Chakra Petch", sans-serif;
  --ff-body: "Inter", sans-serif;
  --fs-regular: 18px;
  --fw-bold: 700;
  --fw-semi-bold: 600;
  --fw-regular: 400;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--ff-body);
  font-size: var(--fs-regular);
  font-weight: var(--fw-regular);
  color: var(--color-gray-light);
  background-color: var(--color-black-dark);
  position: relative;
}

main {
  min-height: calc(100vh - 190px);
  padding-bottom: 16px;
}

h1,
h2,
h3,
h4 {
  font-family: var(--ff-title);
  font-size: 2rem;
}

h1,
h2 {
  font-weight: var(--fw-bold);
}
h3,
h4 {
  font-weight: var(--fw-semi-bold);
}

a {
  color: var(--color-gray-light);
  text-decoration: none;
}

img,
svg {
  max-width: 100%;
  display: block;
}

ul,
li {
  list-style: none;
  white-space: nowrap;
}

.header__nav--busca--visible {
  -webkit-transform: translateY(63px);
  transform: translateY(63px);
}

/* Slider Top */
.sliderTop .slick-slide {
  padding-inline: 10px;
}

.sliderTop .slick-dots li button:before {
  font-size: 6px;
  line-height: 20px;
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  content: "•";
  text-align: center;
  opacity: 0.2;
  color: var(--color-primary);
}

.sliderTop .slick-dots li.slick-active button:before {
  opacity: 1;
  color: var(--color-primary);
}

/* Slider Videos */
:is(.slider__videos) :is(.slick-list, .slick-slider, .slick-track) {
  padding: 1.8rem 0;
}

:is(.slider__videos) :is(.slick-list, .slick-slider, .slick-track .center) {
  padding: 0;
}

.slider__videos .center .slick-center .project {
  transform: scale(1.2);
  z-index: 10000;
  transition: all 400ms ease-in-out;
  pointer-events: all;
  opacity: 1;
  box-shadow: var(--bg-color) 0px 0px 5px 2px;
}

.slider__videos .center .project {
  opacity: 0.5;
}

:is(.short, .mini) .slick-track {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

:is(.short, .mini) .slick-slide {
  max-width: 33.334%;
}

@media (max-width: 990px) {
  .slider__videos .center .slick-center .project {
    transform: scale(1.1);
  }

  .slider__videos .center .project:hover {
    opacity: 1;
    pointer-events: all;
  }

  .short .slick-slide {
    max-width: initial;
  }
  .mini .slick-slide {
    max-width: 50.071%;
  }
}

@media (max-width: 680px) {
  .mini .slick-slide {
    max-width: initial;
  }
}

@media (max-width: 500px) {
  h1,
  h2,
  h3,
  h4 {
    font-size: 1.4rem;
  }
}

@media (max-width: 425px) {
  .slider__videos .center .project {
    opacity: 1;
    box-shadow: var(--bg-color) 0px 0px 5px 2px;
    pointer-events: all;
  }
}

`;

export default GlobalStyle;
