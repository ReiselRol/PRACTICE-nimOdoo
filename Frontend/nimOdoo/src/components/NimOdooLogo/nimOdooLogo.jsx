import { useNavigate } from "react-router-dom"
import './nimOdooLogo.css'

export function NimOdooLogo ({linkable}) {
    const navigate = useNavigate()
    return <font className="nimodooLogo" onClick={() => { navigate("/") }}>nimOdoo</font>
}