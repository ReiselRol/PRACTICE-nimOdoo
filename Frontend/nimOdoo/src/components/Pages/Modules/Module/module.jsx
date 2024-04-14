import { useState } from "react"
import { useDispatch } from "react-redux"
import { setNewModul, deleteModul } from "../../../../redux/Slices/AppSlice"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import "./module.css"

export const Module = ({name, configName, baseUrl, isDefaultEnabled, imageName}) => {

    const initialURl = '/assets/imgs/'
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isEnabled, setIsEnabled] = useState(isDefaultEnabled)
    const user = useSelector((state) => state.AppGlobals.User)

    const handleOnPress = () => {
        if (isEnabled == true) {
            dispatch(deleteModul(configName))
            setIsEnabled(false)
        } else {
            dispatch(setNewModul(configName))
            setIsEnabled(true)
        }
    }

    return (
        <>
            <div className="module-enapsules">
                <div className="module-title">{name}</div>
                <div className="module-info-i-swear">
                    {
                        imageName && <div className="module-img-encapsuler"><img className="module-img" src={initialURl + imageName}/></div>
                    }
                    <div className="module-btn-encapsuler">
                    {
                        (isEnabled == true) ?
                            <>
                                <button className="module-show-btn" onClick={() => navigate(baseUrl)}>See Module</button>
                                {(user.admin == true) ? <button className="module-remove-btn" onClick={handleOnPress}>Remove Module</button> : <></>}
                            </> : (user.admin == true) ? <button className="module-add-btn" onClick={handleOnPress}>Add Module</button> : <button disabled={true} className="module-na-btn">Not added</button>

                    }
                    </div>
                </div>
            </div>
        </>
    )
}