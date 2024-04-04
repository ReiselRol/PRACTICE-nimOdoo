import { useNavigate } from "react-router-dom"
import './nimOdooLogo.css'

export function NimOdooLogo ({linkable}) {
    const navigate = useNavigate()
    return <div className="nimodooLogo" onClick={() => { navigate("/") }}>nimOdoo</div>
}