import { Navbar } from "./Navbar/navbar"
import { DinamicLateralBar } from "./DinamicLateralBar/dinamicLateralBar"
import { DinamicBarSelector } from "./DinamicLateralBar/DinamicBarSelector/dinamicBarSelector"
import { useSelector } from 'react-redux'
import { LateralMenus } from "./constants"
import './appFrame.css'

export function AppFrame({children}) {
    
    const isLateralBarOpened = useSelector((state) => state.AppGlobals.UI.isOpened)
    const infoStyle = (isLateralBarOpened) ? "app-container app-darkerBg" : "app-container app-unDarkedBg"

    return (
        <>
            <Navbar/>
            <DinamicLateralBar>
                {
                    LateralMenus.map((apartados, index) => (
                        <DinamicBarSelector title={apartados.title} subelements={apartados.submenu}/>
                    ))
                }
            </DinamicLateralBar>
            <div className={infoStyle}>{children}</div>
        </>
    )
}