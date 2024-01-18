import React from "react";
import { useFirestore } from "../../hooks/useFirestore";
import { CarouselComponent } from "../../components/CarouselComponent";
import { Link } from "react-router-dom";
import { SocialsComponent } from "../../components/SocialsComponent";
import profile from "../../assets/images/retrato.jpg";
import { ReactComponent as TopArrowIcon } from "../../assets/svg/arrow-top-right-svgrepo-com.svg";

export const HomePage = () => {
  const { data: images } = useFirestore("photos");

  return (
    <div className="flex flex-col bg-slate-300 gap-7 md:pt-9 pb-9">
      <CarouselComponent images={images} />
      <Link
        to="/portfolio"
        className="transition w-30 self-center rounded-lg bg-slate-200 border-slate-400 border-2 font-medium hover:bg-slate-100 px-3 py-2"
      >
        Ver Portafolio
      </Link>
      <div className="h-[300px] shadow items-center justify-evenly p-3 flex bg-[url('./assets/images/bg-image.jpg')] md:bg-fixed bg-cover bg-center">
        <p className="italic text-xl w-10/12 md:text-2xl font-medium text-slate-50">
          Explorando la vida a través de la lente, capturando la esencia de cada
          instante.
        </p>
      </div>
      <div className="flex md:w-11/12 w-10/12 items-center md:items-start md:flex-row flex-col gap-4 bg-slate-200 p-9 m-auto shadow rounded-lg">
        <img
          className="md:h-[400px] h-[300px] rounded-lg"
          src={profile}
          alt="retrato del fotografo"
        />
        <div className="flex flex-col justify-around gap-4 text-justify p-1	text-slate-700">
          <p className="text-slate-700 italic text-xl font-medium">
            Conoce a tu fotógrafo:
          </p>
          <p>
            ¡Hola! Soy Oscar Sanchez Olguin, esposo, ingeniero y un apasionado
            fotógrafo, con el deseo constante de{" "}
            <u>capturar momentos y transformarlos en recuerdos atemporales.</u>
          </p>
          <p>
            He tenido el privilegio de trabajar en una variedad de proyectos, en
            Ciudad Jaurez, Chihuahua y en El Paso, Texas, desde{" "}
            <b>bodas, eventos especiales y sesiones de retratos</b>. Considero
            cada proyecto una nueva oportunidad para explorar mi creatividad,
            contar historias, congelar emociones, y revelar la belleza en los
            detalles cotidianos.
          </p>
          <p>
            <b>Gracias por visitar y ser parte de mi viaje fotográfico</b>.
            Estoy emocionado de poder compartir contigo la magia detrás de cada
            imagen.
          </p>
          <Link
            to="/contact"
            className="mt-6 text-center self-center transition rounded-lg font-medium shadow text-slate-200 bg-slate-700 hover:bg-slate-500 px-3 py-2"
          >
            <div className="text-xl flex items-center font-medium">
              ¡Capturemos momentos, creando recuerdos!{" "}
              <TopArrowIcon className="inline-block	h-[70px] w-[70px] sm:h-7 sm:w-7 md:h-[30px] md:w-[30px]" />
            </div>
          </Link>
        </div>
      </div>
      <SocialsComponent className="self-center" />
      {/* <img src={bgImage} /> */}
    </div>
  );
};
