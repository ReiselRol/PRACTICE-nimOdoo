import { useSelector, useDispatch } from "react-redux"
import { handleLogOut, closeAll } from "../../../../../redux/Slices/AppSlice"
import './userInfo.css'

export function UserInfo ({}) {
    const user = useSelector((state) => state.AppGlobals.User)
    const isUserInfoOppened = useSelector((state) => state.AppGlobals.UI.isUserInfoOppened)
    const dispatch = useDispatch()
    const onClickLogOut = () => {
        dispatch(handleLogOut())
        dispatch(closeAll())
    }

    var classes = (isUserInfoOppened == true) ? "user-info-encapsuler user-info-encapsuler-actived" : "user-info-encapsuler user-info-encapsuler-unctived"
    if (user == null) return (<></>)
    return (
        <div className={classes}>
            <table className="user-info-table">
                <tbody>
                    <tr>
                        <td>nimOdoo</td>
                        <td className="user-info-td-close" onClick={onClickLogOut}>Cerrar sesión</td>
                    </tr>
                    <tr className="user-info-tr">
                        <td colSpan={2}>Nombre: {user.surname}, {user.name}</td>
                    </tr>
                    <tr className="user-info-tr">
                        <td colSpan={2}>Email: {user.email}</td>
                    </tr>
                    <tr className="user-info-tr">
                        <td colSpan={2}>Ver cuenta</td>
                    </tr>
                </tbody>
            </table>
            <br/>
        </div>
    )
}