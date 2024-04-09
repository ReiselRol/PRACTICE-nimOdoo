import { Navbar } from "./Navbar/navbar"
import { DinamicLateralBar } from "./DinamicLateralBar/dinamicLateralBar"
import { DinamicBarSelector } from "./DinamicLateralBar/DinamicBarSelector/dinamicBarSelector"
import { useSelector } from 'react-redux'
import { LateralMenus, QuickAccess } from "./constants"
import { DinamicBarFolder } from "./DinamicLateralBar/DinamicBarFolder/dinamicBarFolder"
import './appFrame.css'

export function AppFrame({children}) {
    
    const isLateralBarOpened = useSelector((state) => state.AppGlobals.UI.isOpened)
    const infoStyle = (isLateralBarOpened) ? "app-container app-darkerBg" : "app-container app-unDarkedBg"

    return (
        <>
            <Navbar/>
                <DinamicLateralBar>
                    <DinamicBarFolder title={'Quick Access'}>
                    {
                        QuickAccess.map((apartados, index) => (
                            <DinamicBarSelector title={apartados.title} subelements={apartados.submenu}/>
                        ))
                    }
                    </DinamicBarFolder>
                    <DinamicBarFolder title={'Modules'}>
                    {
                        LateralMenus.map((apartados, index) => (
                            <DinamicBarSelector title={apartados.title} subelements={apartados.submenu}/>
                        ))
                    }
                    </DinamicBarFolder>
                    <br/>
                </DinamicLateralBar>
                
            <div className={infoStyle}>{children}</div>
        </>
    )
}