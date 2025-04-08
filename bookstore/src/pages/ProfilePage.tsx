import { useState } from "react";
import Heading from "../components/layouts/HeadingComponent";
import InputComponentReactForm from "../components/layouts/InputComponentReactForm";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  lastName: string;
  email: string;
  photo: string;
  password1: string;
  password2: string;
};

type inputLibroProps = {
  name: string
  type: string;
  placeholder: string;
  mensajeError: string;
/*   validators?: {
    maxLength?: { value: number; message: string };
    minLength?: { value: number; message: string };
    required?: { value: boolean; message: string };
    validate?: (value: string) => boolean | string;
  }; */
};

function ProfilePage() {
  const {
    register,
    handleSubmit,
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Datos enviados:", data);
  };

  const datosUsuario: inputLibroProps[] = [
    {
      name: "name",
      type: "text",
      placeholder: "Nombre",
      mensajeError: "El nombre no cumple con los requisitos",
/*       validators: {
        maxLength: { value: 20, message: "El nombre no puede tener más de 20 caracteres" },
        minLength: { value: 3, message: "El nombre no puede tener menos de 3 caracteres" },
        required: { value: true, message: "El nombre es obligatorio" },
      }, */
    },
    {
      name: "lastName",
      type: "text",
      placeholder: "Apellidos",
      mensajeError: "Los apellidos cumplen con los requisitos",
/*       validators: {
        maxLength: { value: 20, message: "Los apellidos no pueden tener más de 20 caracteres" },
        minLength: { value: 3, message: "Los apellidos no pueden tener menos de 3 caracteres" },
        required: { value: true, message: "Los apellidos son obligatorios" },
      }, */
    },
    {
      name: "email",
      type: "email",
      placeholder: "Correo electrónico",
      mensajeError: "El correo no es válido o cumple con los requisitos",
/*       validators: {
        maxLength: { value: 50, message: "El correo no puede tener más de 50 caracteres" },
        minLength: { value: 5, message: "El correo no puede tener menos de 5 caracteres" },
        required: { value: true, message: "El correo es obligatorio" },
      }, */
    },
    {
      name: "photo",
      type: "text",
      placeholder: "URL de la foto",
      mensajeError: "La URL no es válida o cumple con los requisitos",
/*       validators: {
        maxLength: { value: 100, message: "La URL no puede tener más de 100 caracteres" },
        minLength: { value: 5, message: "La URL no puede tener menos de 5 caracteres" },
        required: { value: true, message: "La URL es obligatoria" },
      }, */
    },
    {
      name: "password1",
      type: "password",
      placeholder: "Contraseña",
      mensajeError: "El password no cumple los requisitos",
/*       validators: {
        maxLength: { value: 20, message: "El password no puede tener más de 20 caracteres" },
        minLength: { value: 4, message: "El password no puede tener menos de 4 caracteres" },
        required: { value: true, message: "El password es obligatorio" },
      }, */
    },
    {
      name: "password2",
      type: "password",
      placeholder: "Repite la contraseña",
      mensajeError: "El password no coincide o no cumple los requisitos",
/*       validators: {
        maxLength: { value: 20, message: "El password no puede tener más de 20 caracteres" },
        minLength: { value: 4, message: "El password no puede tener menos de 4 caracteres" },
        required: { value: true, message: "El password es obligatorio" },
        validate: (value: string) =>
          value === watch("password1") || "Las contraseñas no coinciden", // Comparar con password1
      }, */
    },
  ];

  return (
    <>
      <div className="w-full flex flex-col items-center border-2">
        <Heading level="h1" title="TU PÁGINA" />
        <form
          className="shadow-teal-300 inset-shadow-xs shadow-outline p-20 shadow-lg flex flex-col gap-3 bg-gray-100"
          onSubmit={handleSubmit(onSubmit)}
        >
            <input className="h-10 placeholder:text-2xl focus:outline-none text-2xl placeholder-gray-600 "
              placeholder='Nombre'
              type='text'
              {...register('name')}
            />
            <input
              placeholder='Apellidos'
              type='text'
              {...register('lastName')}
              />
            <input
              placeholder='Correo electrónico'
              type='email'
              {...register('email')}
            />
            <input
              placeholder='URL de la foto'
              type='text'
              {...register('photo')}
            />
            <input
              placeholder='Contraseña'
              type='password'
              {...register('password1')}
            />
            <input
              placeholder='Repite la contraseña'
              type='password'
              {...register('password2')}
            />
          <button type="submit" className="w-auto">
            Enviar
          </button>
        </form>
      </div>
    </>
  )
}

export default ProfilePage;