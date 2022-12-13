import { ReactNode } from "react"

import "../assets/css/common.css"

interface CommonProps {
    children?: ReactNode
}

interface ContainerProps extends CommonProps {
    ClassName?: string
}
const Container = (props: ContainerProps) =>{
    const calssName = "continaer" + (props.ClassName === undefined ? "" : " "+props.ClassName)
    return (
        <div className={calssName}>
            {props?.children}
        </div>
    )

}

interface InnerProps extends CommonProps {
    ClassName?: string
}
const inner = (props: InnerProps)=>{
    const calssName = "inner" + (props.ClassName === undefined ? "" : " "+props.ClassName)
    return (    
        <div className={calssName}>
            {props.children}
        </div>
    )
}


Container.inner = inner

export {Container}