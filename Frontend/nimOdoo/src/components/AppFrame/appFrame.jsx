import { useState } from "react"
import { Navbar } from "./Navbar/navbar"
import { DinamicLateralBar } from "./DinamicLateralBar/dinamicLateralBar"
import './appFrame.css'

export function AppFrame({children}) {
    const [isHamburgerOpened, setIsHamburgerOpened] = useState(false)
    return (
        <>
            <Navbar SetIsHamburgerOpened={setIsHamburgerOpened} IsHamburgerOpened={isHamburgerOpened}/>
            <DinamicLateralBar isVisible={isHamburgerOpened}/>
            <div className={(isHamburgerOpened) ? "app-container app-darkerBg" : "app-container app-unDarkedBg"}>{children}</div>
        </>
    )
}