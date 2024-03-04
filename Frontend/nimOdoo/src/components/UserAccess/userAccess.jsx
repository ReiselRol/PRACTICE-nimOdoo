import { useState } from "react";
import { LoginForm } from "./LoginForm/loginForm";
import { RegisterForm } from "./RegisterForm/registerForm";
import { FormContainer } from "./FormContainer/formContainer";

export function UserAccess ({setIsLogged, setUser}) {
    const [isOnLogin, setIsOnLogin] = useState(true)
    if (isOnLogin === true) return (
        <FormContainer>
            <LoginForm setIsOnLogin={setIsOnLogin}
                       setIsLogged={setIsLogged}
                       setUser={setUser}/>
        </FormContainer>
    )
    return(
        <FormContainer>
            <RegisterForm setIsOnLogin={setIsOnLogin}/>
        </FormContainer>
    )
}