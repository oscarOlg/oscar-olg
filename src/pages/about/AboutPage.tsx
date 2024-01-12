import React from "react";
import profile from "../../assets/images/home/DSCF0291.jpg";
import { Link } from "react-router-dom";

export const AboutPage = () => {
  return (
    <div className="flex gap-4 bg-slate-200 p-9 w-11/12 m-auto shadow">
      <img
        className="h-[500px] rounded-lg"
        src={profile}
        alt="fotografia de retrato del fotografo"
      />
      <div className="flex flex-col gap-2 text-justify p-1 font-medium	text-slate-700">
        <p>
          ¡Bienvenido a mi rincón visual! Soy [Tu Nombre], un apasionado
          fotógrafo con el deseo constante de capturar momentos extraordinarios
          y transformarlos en recuerdos atemporales. Mi viaje en el mundo de la
          fotografía no solo se trata de apretar un botón, sino de congelar
          emociones, contar historias y revelar la belleza en los detalles
          cotidianos.
        </p>
        <p>
          Mi enfoque se basa en la conexión genuina con mis sujetos y la
          habilidad de encontrar la luz perfecta en cualquier entorno. Desde
          retratos íntimos hasta paisajes expansivos, me esfuerzo por capturar
          la esencia única de cada momento. Cada imagen que creo es una obra de
          arte cuidadosamente compuesta, donde la creatividad y la técnica se
          entrelazan para crear una experiencia visual cautivadora.
        </p>
        <p>
          Con años de experiencia y una pasión innata por la fotografía, he
          tenido el privilegio de trabajar en una variedad de proyectos, desde
          bodas y eventos especiales hasta sesiones de retratos y fotografía
          comercial. Cada proyecto es una nueva oportunidad para explorar mi
          creatividad y superar los límites de la expresión visual.
        </p>
        <p>
          A través de mi lente, busco resaltar la autenticidad y la singularidad
          de cada persona y lugar. Cada imagen cuenta una historia única, y mi
          objetivo es que esas historias perduren en el tiempo, evocando
          emociones y recuerdos cada vez que se miran.
        </p>
        <Link
          to="/contact"
          className="w-40 text-center self-center transition rounded-lg font-medium shadow bg-slate-300 hover:bg-slate-400 px-3 py-2"
        >
          Contactame!
        </Link>
      </div>
    </div>
  );
};
