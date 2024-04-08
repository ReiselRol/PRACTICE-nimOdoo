import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { handleOpenLateralBarPosition } from "../../../../redux/Slices/AppSlice"
import './dinamicBarSelector.css'

export const DinamicBarSelector = ({title, subelements}) => {
    const [isOpened, setIsOpened] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isLateralBarOpened = useSelector((state) => state.AppGlobals.UI.isOpened)

    useEffect(()=>{
        if (isLateralBarOpened == false) {
            if (isOpened) setIsOpened(false)
        }
    },[isLateralBarOpened])

    const changeOpenState = () => {
        var isOpenRightNow = isOpened
        setIsOpened(!isOpened)
        if (!isOpenRightNow == true) dispatch(handleOpenLateralBarPosition())
    }

    return (
        <>
            <div className="dinamic-selector">
                <div className="dinamic-selector-title" onClick={changeOpenState}>{title}</div>
                <div className={"dinamic-slector-hidder " + (isOpened ? "dinamic-slector-opened" : "dinamic-slector-hidden")}>
                    {
                        subelements.map((element, index) => (
                            <div className="dinamic-element" onClick={() => navigate(element.path)} key={title + ' - ' + index}>· {element.name}</div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}