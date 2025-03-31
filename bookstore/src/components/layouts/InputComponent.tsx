import { useState } from 'react'

type InputProps = {
  placeholder: string
  name: string
  recuperarDatos: ({ name, value } : { name: string, value: string | number }) => void
}


function InputComponent(props: InputProps) {

  const [activo, setActivo] = useState(false);


  return (
    <div className="w-full flex bg-gray-200 border-2 border-teal-500  flex-col justify-between focus:outline-none">
      <p>{activo ? `${props.placeholder}` : ''}</p>
      <input 
        className="h-10 placeholder:text-2xl focus:outline-none text-2xl placeholder-gray-500 my-0.5"
        type="text"
        placeholder={props.placeholder}
        name={props.name}
        onFocus={() => setActivo(true)}
        onBlur={() => setActivo(false)}
        onChange={(event) => props.recuperarDatos(event.target)} 
      />
    </div>
  );
}

export default InputComponent;