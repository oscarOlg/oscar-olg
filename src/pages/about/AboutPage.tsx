import React from "react";
import profile from "../../assets/images/retrato.jpg";
import { Link } from "react-router-dom";

export const AboutPage = () => {
  return (
    <div className="w-full h-full pt-8">
      <div className="flex gap-4 bg-slate-200 p-9 w-11/12 m-auto shadow rounded-lg">
        <img
          className="h-[500px] rounded-lg"
          src={profile}
          alt="fotografia de retrato del fotografo"
        />
        <div className="flex flex-col justify-around text-justify p-1	text-slate-700">
          <p>
            ¡Hola! Soy Oscar Sanchez Olguin, un apasionado fotógrafo con el
            deseo constante de capturar momentos y transformarlos en recuerdos
            atemporales. Mi viaje en el mundo de la fotografía se trata de{" "}
            <b>
              congelar emociones, contar historias y revelar la belleza en los
              detalles cotidianos
            </b>
            .
          </p>
          <p>
            Con una pasión innata por la fotografía, he tenido el privilegio de
            trabajar en una variedad de proyectos, desde{" "}
            <b>bodas, eventos especiales y sesiones de retratos</b>. Cada
            proyecto es una nueva oportunidad para explorar mi creatividad y
            superar los límites de la expresión visual.
          </p>
          <p>
            <b>Gracias por visitar y ser parte de mi viaje fotográfico</b>.
            Estoy emocionado de poder compartir contigo la magia detrás de cada
            imagen.
          </p>
          <p className="text-xl	border-b-2 font-medium border-slate-400 w-fit pb-1">
            ¡Capturando momentos, creando recuerdos!
          </p>
          <Link
            to="/contact"
            className="w-40 text-center self-center transition rounded-lg font-medium shadow bg-slate-300 hover:bg-slate-400 px-3 py-2"
          >
            Contactame!
          </Link>
        </div>
      </div>
    </div>
  );
};
