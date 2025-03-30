import { useState } from 'react'

type InputProps = {
  placeholder: string
  name: string
}



function InputComponent(props: InputProps) {

  const [isFocused, setIsFocused] = useState(false);


  return (
    <div className="w-full flex bg-gray-200 border-2 border-teal-500  flex-col justify-between focus:outline-none">
      <p>{isFocused ? `${props.placeholder}` : ''}</p>
      <input
        className="h-10 placeholder:text-3xl focus:outline-none text-xl"
        type="text"
        placeholder={props.placeholder}
        name={props.name}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
}

export default InputComponent;