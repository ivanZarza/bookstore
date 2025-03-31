

type formProps = {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void,
  children: React.ReactNode,
}


function FormComponent(props: formProps) {


  return <>
    <form onSubmit={props.onSubmit} className="shadow-teal-200 shadow-outline p-20 shadow-lg flex flex-col gap-3 ">
      {props.children}
    </form>
  </>
}

export default FormComponent;