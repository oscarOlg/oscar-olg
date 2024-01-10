import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-4 shadow rounded-lg p-4  border-2 border-stone-400 w-9/12 m-auto text-stone-700 font-medium"
    >
      <div className="flex flex-col gap-2">
        <label className="flex gap-1">
          Nombre <p className="font-light">(Obligatorio)</p>
        </label>
        <input
          className="rounded-lg py-1 px-2 border-2 border-stone-300"
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
          className="rounded-lg py-1 px-2 border-2 border-stone-300"
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
          className="rounded-lg p-2 border-2 border-stone-300"
          name="message"
          required
        />
      </div>
      <button
        className="transition self-center w-36 rounded-lg border-2 border-stone-300 shadow hover:bg-stone-200 px-3 py-2"
        type="submit"
        disabled={isLoading}
      >
        Enviar
      </button>
      {(success || error) && (
        <p
          className={`self-center font-normal rounded border-2 px-2 py-1 shadow text-center ${getMessageStyles()}`}
        >
          {getMessage()}
        </p>
      )}
      {!(success || error) && <div className="p-4"></div>}
    </form>
  );
};
