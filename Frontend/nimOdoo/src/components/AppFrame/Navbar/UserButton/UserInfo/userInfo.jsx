import { useSelector, useDispatch } from "react-redux"
import { handleLogOut, closeAll } from "../../../../../redux/Slices/AppSlice"
import { useNavigate } from "react-router-dom"
import { useMutation } from '@apollo/client'
import * as Queries from "../../../../../apollo/apolloQueries"
import './userInfo.css'

export function UserInfo ({}) {
    const user = useSelector((state) => state.AppGlobals.User)
    const isUserInfoOppened = useSelector((state) => state.AppGlobals.UI.isUserInfoOppened)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [logger] = useMutation(Queries.addLog)

    const onClickLogOut = () => {
        var email = user.email
        dispatch(handleLogOut())
        dispatch(closeAll())
        navigate("/")
        logger({
            variables: {
                userName: "System",
                userId: " ",
                message: "The user with email " + email + " has log out successfully!" 
            }
        })
    }

    var classes = (isUserInfoOppened == true) ? "user-info-encapsuler user-info-encapsuler-actived" : "user-info-encapsuler user-info-encapsuler-unctived"
    if (user == null) return (<></>)
    return (
        <div className={classes}>
            <table className="user-info-table">
                <tbody>
                    <tr className="user-info-important-info">
                        <td>nimOdoo</td>
                        <td className="user-info-td-close" onClick={onClickLogOut}>Cerrar sesión</td>
                    </tr>
                    <tr className="user-info-special-tr">
                        <td colSpan={2}>Nombre: {user.surname}, {user.name}</td>
                    </tr>
                    <tr className="user-info-special-tr">
                        <td colSpan={2}>Email: {user.email}</td>
                    </tr>
                    <tr className="user-info-special-tr">
                        <td colSpan={2}>Ver cuenta</td>
                    </tr>
                </tbody>
            </table>
            <br/>
        </div>
    )
}