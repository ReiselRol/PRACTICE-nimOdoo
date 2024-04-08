import { FormSVG } from "./FormSVG/formSVG"
import './formContainer.css'
import { NimOdooLogoDumb } from "../../NimOdooLogoDumb/nimOdooLogoDumb"

export function FormContainer ({children}) {
    return (
        <>
            <FormSVG/>
            <div className="SpaceForForms">
                <div className="nimodooCenter"><NimOdooLogoDumb/></div>
                {children}
            </div>
        </>
    )
}