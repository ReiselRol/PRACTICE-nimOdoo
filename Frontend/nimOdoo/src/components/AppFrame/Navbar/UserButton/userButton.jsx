import { USERICON_LOGO_URL } from "../constant"
import { useDispatch } from "react-redux"
import { handleUserInfo } from "../../../../redux/Slices/AppSlice"
import './userButton.css'

export function UserButton ({}) {
    const dispatch = useDispatch()
    const handleOnClick = () => {
        dispatch(handleUserInfo())
    }

    return (
        <img src={USERICON_LOGO_URL} onClick={handleOnClick} className="ub-userIconImg"/>
    )
}