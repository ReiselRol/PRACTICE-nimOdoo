import { Navbar } from "./Navbar/navbar"
import { DinamicLateralBar } from "./DinamicLateralBar/dinamicLateralBar"
import { useSelector } from 'react-redux'
import './appFrame.css'

export function AppFrame({children}) {
    
    const isLateralBarOpened = useSelector((state) => state.AppGlobals.UI.isOpened)
    const infoStyle = (isLateralBarOpened) ? "app-container app-darkerBg" : "app-container app-unDarkedBg"
    return (
        <>
            <Navbar/>
            <DinamicLateralBar/>
            <div className={infoStyle}>{children}</div>
        </>
    )
}