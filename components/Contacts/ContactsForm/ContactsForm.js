import { Title } from "../..";
import contactsForm from "../../../styles/ContactsForm.module.scss";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import React from "react";
import { useForm } from "react-hook-form";

const ContactsForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toastifySuccess = () => {
    toast.success("☑️ Email enviado com sucesso!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };

  const toastifyError = () => {
    toast.error("☑️ Ocorreu um erro, tente novamente!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        toastifySuccess();
        setSubmitted(true);
      } else {
        toastifyError();
      }
    });
    console.log(data);
  };
  return (
    <div className={`${contactsForm.container} centerRow`}>
      <div className={contactsForm.card}>
        <Title text="Fale Connosco" />
        <p className={`${contactsForm.cardText} text`}>
          Quer saber mais sobre a nossa solução, ou pretende uma solução
          personalizada, contacte-nos pelo formulário ou envie um email para
          <b>info@willbe.co</b>
        </p>
        <form className={contactsForm.form} onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <label className={contactsForm.label} htmlFor="name">
            Nome Completo
          </label>
          <input
            name="name"
            className={contactsForm.input}
            {...register("name")}
          />

          <label className={contactsForm.label} htmlFor="email">
            Email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email",
              },
            })}
            type="email"
            name="email"
            required
            className={contactsForm.input}
          />

          {/* include validation with required or other standard HTML validation rules */}
          <label className={contactsForm.label} htmlFor="phone">
            Telefone
          </label>
          <input
            name="©"
            className={contactsForm.input}
            {...register("phone", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.phone && (
            <p className={contactsForm.required}>This field is required</p>
          )}

          <label className={contactsForm.label} htmlFor="mensagem">
            Mensagem
          </label>
          <textarea
            name="Mensagem"
            className={contactsForm.input}
            {...register("message", { pattern: /^[A-Za-z]+$/i })}
          />

          <input
            className={contactsForm.button}
            type="submit"
            value="Pedir Informações"
          />
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactsForm;
