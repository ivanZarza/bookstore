import { useState, forwardRef } from 'react'

// minuto 2:15:00 de la clase FOrmularios 1 explica el checbox, en vez de validar al recibir, valide al enviar, a esperas de que funcione

export type FormValues = {
  title: string
  author: string
  type: string
  price: number
  photo: string
}

type InputProps = {
  name: keyof FormValues
  placeholder: string
  type: string
} & React.InputHTMLAttributes<HTMLInputElement>;


const InputComponentZod = forwardRef<HTMLInputElement, InputProps>(function InputComponentZod(props: InputProps, ref) {

  const [activo, setActivo] = useState<boolean>(false);

/*   const valido = !props.error[props.name] || false; */ const valido = true

  return (
    <div className={`w-full flex border-2 pl-1.5  flex-col justify-between focus:outline-none ${valido ? "bg-gray-200 border-teal-500 " : "bg-red-100 border-red-600"}`}>
      <label>{activo ? `${props.placeholder}` : ''}</label>
      <input
        className="h-10 placeholder:text-2xl focus:outline-none text-2xl placeholder-gray-600 "
        type={props.type}
        placeholder={props.placeholder}
        onFocus={() => setActivo(true)}
        onBlur={() => setActivo(false)}

        ref={ref}
      /*         onChange={(event) => { */
      /*        props.recuperarDatos(event.target.name, event.target.value);
                props.validarDatos(event.target.name, event.target.value);  */
      /*         }
              } */
      />

      {/*       {!valido && <p className='text-red-600'>{props.generarMensajeError(props.name, inputRef.current?.value)}</p>} */}

    </div>
  );
})

export default InputComponentZod;