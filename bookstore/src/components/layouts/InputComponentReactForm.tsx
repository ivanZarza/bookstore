import { forwardRef } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form';
// minuto 2:15:00 de la clase FOrmularios 1 explica el checbox, en vez de validar al recibir, valide al enviar, a esperas de que funcione



type InputProps = {
  placeholder: string
  type: string
/*   mensajeError: string */
/*   register: UseFormRegister<FormValues> */
register: UseFormRegister<FormValues>
    maxLength?: { value: number; message: string }
    minLength?: { value: number; message: string }
    required?: { value: boolean; message: string }
    validate?: (value: string) => boolean | string
  }
  error?: FieldError; 
} */}& React.InputHTMLAttributes<HTMLInputElement>; 


const InputComponentReactForm = forwardRef<HTMLInputElement, InputProps>(function InputComponentReactForm(props: InputProps, ref: React.Ref<HTMLInputElement>) {

  return (
    <div className="w-full flex border-2 pl-1.5  flex-col justify-between focus:outline-none bg-gray-200 border-teal-500  ">
      <label>{props.placeholder}</label>
      <input
        className="h-10 placeholder:text-2xl focus:outline-none text-2xl placeholder-gray-600 "
        ref={ref}
        type={props.type}
        placeholder={props.placeholder}
        {...props.register(props.name)}
      />

{/*       {!valido && <p className='text-red-600'>{props.generarMensajeError(props.name, inputRef.current?.value)}</p>}
 */}
    </div>
  );
})

export default InputComponentReactForm;