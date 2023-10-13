import { useContext } from "react";
import { MainContext } from "./../context/MainContext";
import { Category, SliderTop, SliderVideos } from "./../components";
import { motion } from "framer-motion";

function separarVideosPorFormacion(videos, formaciones) {
  const videosPorFormacion = [];
  formaciones.map((formacion) => {
    const videosFiltrados = videos.filter(
      (video) => video.formacion === formacion.name
    );
    videosPorFormacion.push(videosFiltrados);
  });
  return videosPorFormacion;
}

export default function Home() {
  const { videosUse, formacionesUse } = useContext(MainContext);
  const formacionesConteo = separarVideosPorFormacion(
    videosUse,
    formacionesUse
  );
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SliderTop />
      <Category />
      {formacionesUse.map((item, i) => (
        <SliderVideos
          key={i}
          formacion={item}
          videosFormacion={formacionesConteo[i]}
        />
      ))}
    </motion.main>
  );
}
