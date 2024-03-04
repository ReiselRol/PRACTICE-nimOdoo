import { FormSVG } from "./FormSVG/formSVG"
import './formContainer.css'
import { NimOdooLogo } from "../../NimOdooLogo/nimOdooLogo"

export function FormContainer ({children}) {
    return (
        <>
            <FormSVG/>
            <div className="SpaceForForms">
                <div className="nimodooCenter"><NimOdooLogo/></div>
                {children}
            </div>
        </>
    )
}