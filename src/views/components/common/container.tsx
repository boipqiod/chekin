import { ReactNode } from "react"
import "../../assets/css/index"

interface CommonProps {
    children?: ReactNode
}

interface ContainerProps extends CommonProps {
    ClassName?: string
    BackgroundColor?: string
}
const Container = (props: ContainerProps) =>{
    const calssName = "container" + (props.ClassName === undefined ? "" : " "+props.ClassName)
    return (
        <div className={calssName}
        style={{backgroundColor:props.BackgroundColor}}
        >
            {props?.children}
        </div>
    )

}

interface InnerProps extends CommonProps {
    ClassName?: string
}
const Inner = (props: InnerProps)=>{
    const calssName = "Inner" + (props.ClassName === undefined ? "" : " "+props.ClassName)
    return (    
        <div className={calssName}>
            {props.children}
        </div>
    )
}
interface CardProps extends CommonProps {
    ClassName?: string
}
const Card = (props: CardProps)=>{
    const calssName = "Card" + (props.ClassName === undefined ? "" : " "+props.ClassName)
    return (    
        <div className={calssName}>
            {props.children}
        </div>
    )
}


Container.Inner = Inner
Container.Card = Card

export {Container}