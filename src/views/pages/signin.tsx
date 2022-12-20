import { Container, Input, Button } from "../components/index";
import "../assets/css/index"

interface PersonProps {
    name?: string;
}

export const SignIn = (props: PersonProps) =>{
    return (
        <>
            <Container
                fullWidth={true}
                fullHeighr={true}
                center={true}
                flexColumn={true}
            >
                    
                <h1>Login</h1>

                <Input
                    lable="email"
                    placeholder="example@email.com"
                    />
                <Input
                lable="password"
                placeholder="Enter your password"
                />
                <Button>SUBMIT</Button>
            </Container>
        </>
    )
}