import React from "react";
import { ReactComponent as TopArrowIcon } from "../../assets/svg/arrow-top-right-svgrepo-com.svg";
import profile from "../../assets/images/retrato.jpg";
import { Link } from "react-router-dom";
import { SocialsComponent } from "../../components/SocialsComponent";

export const AboutPage = () => {
  return (
    <div className="w-full h-full pt-8 pb-24">
      <div className="flex w-10/12 items-center md:items-start md:flex-row flex-col gap-4 bg-slate-200 p-9 m-auto shadow rounded-lg">
        <img
          className="md:h-[500px]  rounded-lg"
          src={profile}
          alt="fotografia de retrato del fotografo"
        />
        <div className="flex flex-col justify-around gap-4 text-justify p-1	text-slate-700">
          <p>
            ¡Hola! Soy Oscar Sanchez Olguin, ingeniero, esposo y un apasionado
            fotógrafo con el deseo constante de capturar momentos y
            transformarlos en recuerdos atemporales. Mi viaje en el mundo de la
            fotografía se trata de{" "}
            <b>
              congelar emociones, contar historias y revelar la belleza en los
              detalles cotidianos
            </b>
            .
          </p>
          <p>
            He tenido el privilegio de trabajar en una variedad de proyectos,
            desde <b>bodas, eventos especiales y sesiones de retratos</b>. Cada
            proyecto es una nueva oportunidad para explorar mi creatividad y
            superar los límites de la expresión visual.
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
          <SocialsComponent className="self-center mt-5" />
        </div>
      </div>
    </div>
  );
};
