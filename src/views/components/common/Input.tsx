import { ReactNode, ChangeEventHandler } from "react"

interface CommonProps {
    children?: ReactNode
}

interface InputProps{
    id?: string
    lable?: string
    placeholder?: string
    onChange?: ChangeEventHandler<HTMLInputElement>
}

const Input = (props:InputProps) =>{
 return(
    <div
    className="Input"
    >
        { props.lable && 
            <label
            >{props.lable}</label>
        }
        <input 
        placeholder={props.placeholder}
        id={props.id}
        onChange={props.onChange}
        ></input>
    </div>
 )
}

interface ButtonProps extends CommonProps{
    title?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = (props: ButtonProps) =>{

    const title : string | ReactNode = props.children ? props.children : props.title ? props.title : "SUBMIT"

    return(
        <>
            <button
            className="Button"
            onClick={props.onClick}
            >{title}
            </button>
        </>
    )
}

export {
    Input,
    Button
}