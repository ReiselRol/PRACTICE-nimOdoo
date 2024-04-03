import { USERICON_LOGO_URL } from "../constant"
import { useDispatch } from "react-redux"
import { handleUserInfo } from "../../../../redux/Slices/AppSlice"
import './userButton.css'

export function UserButton ({}) {
    const dispatch = useDispatch()

    return (
        <img src={USERICON_LOGO_URL} onClick={() => dispatch(handleUserInfo())} className="ub-userIconImg"/>
    )
}