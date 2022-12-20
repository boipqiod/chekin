import { ReactNode } from "react"
import "../../assets/css/index"

interface CommonProps {
    children?: ReactNode
}

interface ContainerProps extends CommonProps {
    ClassName?: string
    BackgroundColor?: string
    fullWidth?: boolean
    fullHeighr?: boolean
    center?: boolean
    flexColumn?: boolean
    marginBottom?: string
}
const Container = (props: ContainerProps) =>{
    let calssName = "container"

    calssName = props.fullWidth ? calssName += " full-width" : calssName
    calssName = props.fullHeighr ? calssName += " full-height" : calssName
    calssName = props.center ? calssName += " center" : calssName
    calssName = props.flexColumn ? calssName += " flex-column" : calssName += " flex-row"

    return (
        <div 
            className={calssName}
            style={{marginBottom:props.marginBottom}}
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
interface FooterProps extends CommonProps {
    ClassName?: string
}
const Footer = (props: FooterProps)=>{
    const calssName = "Footer" + (props.ClassName === undefined ? "" : " "+props.ClassName)
    return (    
        <div className={calssName}>
            {props.children}
        </div>
    )
}

Container.Inner = Inner
Container.Card = Card
Container.Footer = Footer

export {Container}