import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import '../userAccess.css'
import * as Queries from '../../../apollo/apolloQueries'
import { PageLoading } from "../../Pages/PageElements";

export function RegisterForm ({setIsOnLogin, setIsLogged, setUser}) {
    const [name, setname] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [addUser] = useMutation(Queries.addUser);
    const [registredSuccessfully, setRegistredSuccessfully] = useState(false)
    const [loading, setLoading] = useState(false)
    const [logger] = useMutation(Queries.addLog)
    const [errorVisible, setErrorVisible] = useState(false)

    const onChangeEmail = (e) => { setEmail(e.target.value.toLowerCase()) }
    const onChangePassword = (e) => { setPassword(e.target.value) }
    const onChangeConfirmPassword = (e) => { setConfirmPassword(e.target.value) }
    const onChangeName = (e) => { setname(e.target.value) }
    const onChangeSurname = (e) => { setSurname(e.target.value) }

    useEffect(() => {
        if (registredSuccessfully === true) {

        }
    }, [registredSuccessfully])

    const tryRegister = () => {
        setLoading(true)
        if (email != "" && password != "" && name != "" && surname != "" && password == confirmPassword) {
            addUser({
                variables: {
                    email: email,
                    password: password,
                    admin: false,
                    name: name,
                    surname: surname
                }
            }).then((response) => {
                logger({
                    variables: {
                        userName: "System",
                        userId: " ",
                        message: "The user with email " + email+ " was added successfully!" 
                    }
                })
                setErrorVisible(false)
            }).catch(() => {
                setErrorVisible(true)
            }).finally(response => {
                setLoading(false)
                setRegistredSuccessfully(true)
            })
        } else {
            setLoading(false)
            setErrorVisible(true)
        }
    } 

    return (
        (loading == false) ? <div>
            <table className="userFormTable">
                <tbody>
                    <tr>
                        <td><label>Name</label></td>
                        <td><input type="text" name="name" value={name} onChange={onChangeName}/></td>
                    </tr>
                    <tr>
                        <td><label>Surname</label></td>
                        <td><input type="text" name="surname" value={surname} onChange={onChangeSurname}/></td>
                    </tr>
                    <tr>
                        <td><label>Email</label></td>
                        <td><input type="text" name="email" value={email} onChange={onChangeEmail}/></td>
                    </tr>
                    <tr>
                        <td><label>Password</label></td>
                        <td><input type="password" name="password" value={password} onChange={onChangePassword}/></td>
                    </tr>
                    <tr>
                        <td><label>Confirm password</label></td>
                        <td><input type="password" name="password" value={confirmPassword} onChange={onChangeConfirmPassword}/></td>
                    </tr>
                    {
                        (errorVisible) && <tr className="error-tr">
                            <td colSpan={2}>Fields are missing or the email is already in use.</td>
                        </tr>
                    }
                    {
                        (registredSuccessfully && errorVisible == false) && <tr className="success-tr">
                            <td colSpan={2} >The user was created successfully.</td>
                        </tr>
                    }
                    <tr>
                        <td><button onClick={tryRegister}>Register</button></td>
                        <td id="linkTd"><a onClick={() => setIsOnLogin(true)}>I have account</a></td>
                    </tr>
                </tbody>
            </table>
        </div> : <PageLoading/>
    )
}