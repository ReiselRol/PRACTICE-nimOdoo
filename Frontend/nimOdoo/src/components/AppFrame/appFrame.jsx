import { Navbar } from "./Navbar/navbar"
import { DinamicLateralBar } from "./DinamicLateralBar/dinamicLateralBar"
import { DinamicBarSelector } from "./DinamicLateralBar/DinamicBarSelector/dinamicBarSelector"
import { useSelector } from 'react-redux'
import { getModulesOptions, getQuickAccess } from "./appFrame.helper"
import { DinamicBarFolder } from "./DinamicLateralBar/DinamicBarFolder/dinamicBarFolder"
import './appFrame.css'

export function AppFrame({children}) {
    
    const isLateralBarOpened = useSelector((state) => state.AppGlobals.UI.isOpened)
    const infoStyle = (isLateralBarOpened) ? "app-container app-darkerBg" : "app-container app-unDarkedBg"
    const modulesConfig = useSelector((state) => state.AppGlobals.Modules.Actived)
    const user = useSelector((state) => state.AppGlobals.User)
    const QuickAccess = getQuickAccess(user.admin)
    const ModuleOptions = getModulesOptions(modulesConfig)
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
                        ModuleOptions.map((apartados, index) => (
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