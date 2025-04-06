import { forwardRef } from "react";

type formProps = {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void,
  children: React.ReactNode,
}



const FormComponentZod = forwardRef<HTMLFormElement, formProps>(function FormComponentReactForm(props: formProps, ref) {

  return <>
    <form className="shadow-teal-300 inset-shadow-xs shadow-outline p-20 shadow-lg flex flex-col gap-3 bg-gray-100"
          ref={ref}
          onSubmit={props.onSubmit}
    >
      {props.children}
      <button type="submit" className=" w-auto"  >Enviar</button>
    </form>
  </>
})

export default FormComponentZod;