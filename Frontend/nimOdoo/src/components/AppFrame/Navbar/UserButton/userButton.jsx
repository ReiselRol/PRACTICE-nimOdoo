import { USERICON_LOGO_URL } from "../constant"
import './userButton.css'

export function UserButton ({}) {
    return (
        <img src={USERICON_LOGO_URL} className="ub-userIconImg"/>
    )
}