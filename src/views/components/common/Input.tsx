import { ChangeEventHandler } from "react"

interface InputProps{
    id?: string
    onChange?: ChangeEventHandler<HTMLInputElement>
}

const Input = (props:InputProps) =>{
 return(
    <input 
    id={props.id}
    onChange={props.onChange}
    className="Input"
    ></input>
 )
}

export { Input }