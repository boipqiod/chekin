import { Container, Input, Button } from "../components/index";
import "../assets/css/index"

interface PersonProps {
    name?: string;
}

export const SignIn = (props: PersonProps) =>{

    const login = ()=>{
        const email = document.getElementById("email")
        const password = document.getElementById("password")

        if(!email || !password) return 
        if(email.textContent === "" || password.textContent === ""){
            alert("이메일과 비밀번호를 확인해주세요.")
            return
        }
    }


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
                id="email"
                lable="email"
                placeholder="example@email.com"
                    />
                <Input
                id="password"
                lable="password"
                placeholder="Enter your password"
                />
                <Button
                title="LOGIN"
                onClick={login}
                />
                <div className="bottom150"></div>
            </Container>
        </>
    )
}