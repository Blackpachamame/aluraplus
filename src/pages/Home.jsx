import PropTypes from "prop-types";
import SliderTop from "../components/SliderTop";
import Category from "../components/Category";
import SliderVideos from "../components/SliderVideos";

function buscandoAndo(videosUse, formaciones) {
  const arregloPosta = [];
  formaciones.map((formacion) => {
    const prueba = videosUse.filter(
      (video) => video.formacion === formacion.name
    );
    arregloPosta.push(prueba);
  });
  return arregloPosta;
}

export default function Home({ videosUse, formaciones }) {
  const formacionesConteo = buscandoAndo(videosUse, formaciones);
  // console.log(formacionesConteo[0]);
  // formacionesConteo.forEach((element) => {
  //   if (element.length < 3) {
  // element.forEach((item) => {
  //   console.log(item);
  // });
  //   console.log(element);
  // }
  // });
  return (
    <main>
      <SliderTop />
      <Category formaciones={formaciones} />
      {formaciones.map((item, i) => (
        <SliderVideos
          key={i}
          formacion={item}
          videosUse={formacionesConteo[i]}
        />
      ))}
    </main>
  );
}

Home.propTypes = {
  videosUse: PropTypes.array,
  formaciones: PropTypes.array,
};
