import { Container, Input } from "../components/index";
import "../assets/css/index"

interface PersonProps {
    name?: string;
}

export const SignIn = (props: PersonProps) =>{
    return (
        <>
        <Container 
        ClassName="wide center"
        BackgroundColor="rgb(153, 181, 206)">
            <Container.Inner>
                <div
                className="textLeft"
                >email</div>
                <Input/>
                <Input/>
            </Container.Inner>
        </Container>
        </>
    )
}