import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SocialsComponent } from "../../components/SocialsComponent";
import { motion } from "framer-motion";

export const ContactPage = () => {
  const form = useRef(null);

  const [isLoading, setisLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const getMessage = () => {
    if (success) {
      return "Enviado";
    } else if (error) {
      return "Error al enviar";
    }
  };

  const getMessageStyles = () => {
    if (success) {
      return "border-green-400 bg-green-300";
    } else if (error) {
      return "border-red-400 bg-red-300";
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccess(false);
      setError(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [error, success]);

  const sendEmail = (e: React.SyntheticEvent<HTMLFormElement>) => {
    setisLoading(true);
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID!,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
        )
        .then(
          (result) => {
            (e.target as any).reset();
            setSuccess(true);
          },
          (error) => {
            setError(true);
          }
        )
        .finally(() => {
          setisLoading(false);
        });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccess(false);
      setError(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [success, error]);

  return (
    <div>
      <div className="h-[300px] shadow items-center justify-evenly p-3 flex md:flex-row flex-col bg-[url('./assets/images/bg-image.jpg')] md:bg-fixed bg-cover bg-center">
        <p className="italic text-xl w-10/12 md:text-2xl font-medium text-slate-50">
          Explorando la vida a través de la lente, capturando la esencia de cada
          instante.
        </p>
      </div>
      <div className="flex pt-8 pb-24 w-10/12	 m-auto md:justify-around items-center md:items-start gap-10 md:flex-row flex-col ">
        <div className="flex flex-col md:w-full w-3/4 gap-6">
          <div className="flex flex-col gap-3 text-justify p-1 text-slate-700">
            <p>
              <b>¡Me encantaría escuchar de ti! </b>Si tienes alguna pregunta o
              estás interesado en{" "}
              <u>
                conocer los costos y paquetes para reservar una sesión o un
                evento de acuerdo a tus necesidades
              </u>
              , no dudes en ponerte en contacto, tendre una respuesta para ti en
              las proximas horas de recibir tu mensaje.
            </p>
            <p>
              <u>Estoy abierto a colaboraciones y proyectos especiales</u>. Si
              tienes una idea única en mente, <b>¡hablemos!</b> Estoy emocionado
              por la oportunidad de explorar nuevas posibilidades creativas.
            </p>
          </div>
          <p className="font-bold">oscar.olg.photo@gmail.com</p>
          <SocialsComponent />
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col w-full gap-4 shadow rounded-lg p-4 bg-slate-300 border-2 border-slate-400 text-slate-700 font-medium"
        >
          <div className="flex flex-col gap-2">
            <label className="flex gap-1">
              Nombre <p className="font-light">(Obligatorio)</p>
            </label>
            <input
              className="rounded-lg py-1 px-2 border-2 border-slate-400"
              type="text"
              name="user_name"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="flex gap-1">
              Email <p className="font-light">(Obligatorio)</p>
            </label>
            <input
              className="rounded-lg py-1 px-2 border-2 border-slate-400"
              type="email"
              name="user_email"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="flex gap-1">
              Mensaje <p className="font-light">(Obligatorio)</p>
            </label>
            <textarea
              className="rounded-lg p-2 min-h-28 border-2 border-slate-400"
              name="message"
              required
            />
          </div>
          <button
            className="transition self-center w-36 rounded-lg text-slate-100 shadow bg-slate-800 hover:bg-slate-700 px-3 py-2"
            type="submit"
            disabled={isLoading}
          >
            Enviar
          </button>
          {(success || error) && (
            <motion.p
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`self-center font-normal rounded border-2 px-2 py-1 shadow text-center ${getMessageStyles()}`}
            >
              {getMessage()}
            </motion.p>
          )}
          {!(success || error) && <div className="p-4"></div>}
        </form>
        <hr className="w-1/2 h-1 mx-auto mt-10 border-0 rounded-lg bg-slate-400" />
      </div>
    </div>
  );
};
