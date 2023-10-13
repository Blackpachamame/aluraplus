import PropTypes from "prop-types";
import { Category, SliderTop, SliderVideos } from "./../components";
import { motion } from "framer-motion";

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
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SliderTop />
      <Category formaciones={formaciones} />
      {formaciones.map((item, i) => (
        <SliderVideos
          key={i}
          formacion={item}
          videosUse={formacionesConteo[i]}
        />
      ))}
    </motion.main>
  );
}

Home.propTypes = {
  videosUse: PropTypes.array,
  formaciones: PropTypes.array,
};
