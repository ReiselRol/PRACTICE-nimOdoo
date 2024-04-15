import { useEffect, useState } from "react"
import { useQuery } from "@apollo/client";
import * as Queries from "../../../apollo/apolloQueries";
import { useDispatch } from "react-redux"
import { setIsLoged, handleLogin } from "../../../redux/Slices/AppSlice";
import { PageLoading } from "../../Pages/PageElements";
import '../userAccess.css'

export function LoginForm({setIsOnLogin}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { loading, error, data, refetch } = useQuery(Queries.getAllUsers)

    const dispatch = useDispatch()

    useEffect(() =>{ refetch() }, [setIsOnLogin])

    const onChangeEmail = (e) => {
        setEmail(e.target.value.toLowerCase())
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const tryLogIn = () => {
        if (email != "" && password != "" && !loading && !error) {
            for (var i = 0; i < data.getUsers.length; i++) {
                if (data.getUsers[i].email == email) {
                    if (data.getUsers[i].password == password) {
                        dispatch(setIsLoged(true))
                        var user = {
                            ID : data.getUsers[i].ID,
                            admin : data.getUsers[i].admin,
                            email : data.getUsers[i].email,
                            name : data.getUsers[i].name,
                            password : data.getUsers[i].password,
                            surname : data.getUsers[i].surname
                        }
                        dispatch(handleLogin(user))
                        localStorage.setItem('user', user.ID);
                    }
                    break
                }
            }
        }
    }

    return (
          (loading == false) ? <div>
                <table className="userFormTable">
                    <tbody>
                        <tr>
                            <td><label>Email</label></td>
                            <td><input type="text" name="email" value={email} onChange={onChangeEmail}/></td>
                        </tr>
                        <tr>
                            <td><label>Password</label></td>
                            <td><input type="password" name="password" value={password} onChange={onChangePassword}/></td>
                        </tr>
                        <tr>
                            <td><button onClick={tryLogIn}>Log In</button></td>
                            <td id="linkTd"><a onClick={() => setIsOnLogin(false)}>I dont have account</a></td>
                        </tr>
                    </tbody>
                </table>
            </div> : <PageLoading/>
    )
}