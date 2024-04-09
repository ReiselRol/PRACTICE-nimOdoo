import { useState } from "react"
import { useDispatch } from 'react-redux'
import { handleOpenLateralBarPosition } from "../../../../redux/Slices/AppSlice"
import './dinamicBarFolder.css'

export const DinamicBarFolder = ({children, title}) => {

    const [isOpened, setIsOpened] = useState(true)
    const dispatch = useDispatch()

    const changeOpenState = () => {
        var isOpenRightNow = isOpened
        setIsOpened(!isOpened)
        if (!isOpenRightNow == true) dispatch(handleOpenLateralBarPosition())
    }

    return (
        <div>
            <div className='folder-title' onClick={changeOpenState}>{title}</div>
            <div className={"folder-css " + ((isOpened) ? "folder-opended" : "folder-closed")}>{children}</div>
        </div>
    )
}