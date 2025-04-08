import {  useState } from 'react'
import { UseFormRegister } from 'react-hook-form'

// minuto 2:15:00 de la clase FOrmularios 1 explica el checbox, en vez de validar al recibir, valide al enviar, a esperas de que funcione

type FormValues = {
  name: string
  lastName: string
  email: string
  photo: string
  password1: string
  password2: string
}

type InputProps = {
  name: 'name' | 'lastName' | 'email' | 'photo' | 'password1' | 'password2'
  placeholder: string
  type: string
  register?: UseFormRegister<FormValues>
} & React.InputHTMLAttributes<HTMLInputElement>;


function InputComponentZod(props: InputProps) {

  const [activo, setActivo] = useState<boolean>(false); 

  const valido = !props.error[props.name] || false; 

  return (
    <div className={`w-full flex border-2 pl-1.5  flex-col justify-between focus:outline-none ${valido ? "bg-gray-200 border-teal-500 " : "bg-red-100 border-red-600"}`}>
{/*       <label>{activo ? `${props.placeholder}` : ''}</label> */}
      <input
        className="h-10 placeholder:text-2xl focus:outline-none text-2xl placeholder-gray-600 "
        type={props.type}
        placeholder={props.placeholder}
        onFocus={() => setActivo(true)}
        onBlur={() => setActivo(false)} 
        {...props.register?.(props.name)}
      />

      {/*       {!valido && <p className='text-red-600'>{props.generarMensajeError(props.name, inputRef.current?.value)}</p>} */}

    </div>
  );
}

export default InputComponentZod;