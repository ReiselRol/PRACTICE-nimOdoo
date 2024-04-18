import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import "./pageShowElement.css"

export default function PageShowElement ({
    edit = false,
    create = false,
    options,
    info,
    elementType,
    editLink,
    editStates,
    editCallback,
    children
}) {
    const infoOnArray = [info]
    const user = useSelector((state) => state.AppGlobals.User)
    const navigate = useNavigate()
    
    const showInfo = (info, howToTractIt) => {
        var infoToShow = info
        if (howToTractIt == "Password") infoToShow = "········"
        else if (howToTractIt == "Boolean") infoToShow = (info == true) ? "Yes" : "No"
        else if (howToTractIt == "Euro") infoToShow += "€"
        else if (howToTractIt == "Status") {
            if (info == 0) infoToShow = "Confirmed"
            else if (info == 0) infoToShow = "Pending"
            else infoToShow = "Declined"
        }
        const maxChars = 1000
        if (infoToShow.length > maxChars) infoToShow = infoToShow.substring(0, maxChars) + '...';
        return infoToShow
    }
    return (
        <div className='infoAdjuster'>
            <table className="userFormTablez">
                <tbody>
                <tr id="tiitle">
                    <td colSpan={2}>{elementType}</td>
                </tr>
                    {
                        infoOnArray.map((eachInfo, firtsIndex) => (
                            <>
                                {
                                    options.map((eachPart, index) => (
                                        <>
                                            <tr key={"big tr - " + firtsIndex}>
                                                <td key={"nameTD - " + index}>
                                                    {eachPart[1] + ': '}
                                                </td>
                                                <td key={"infoTD - " + index}>
                                                    {
                                                        (edit == false && create == false) ? 
                                                            showInfo(eachInfo[eachPart[0]], eachPart[2]) :
                                                        ((eachPart[1] != "ID") ?<input type="text" onChange={(e) => {editStates[index].setState(e.target.value)}} value={editStates[index].value}/> : showInfo(eachInfo[eachPart[0]], eachPart[2]))
                                                    }
                                                </td>
                                            </tr>
                                        </>
                                    ))
                                }
                            </>
                        ))
                    }
                    {children}
                    {
                        (user.admin == true && edit == false && create == false) && <tr id='buttoneditselecionjasfjagjd-tr'>
                            <td colSpan={2} id='buttoneditselecionjasfjagjd'>
                                <button className='info-edit-infoz' onClick={() => {navigate(editLink)}}>Edit</button>
                                <button className='info-delete-infoz'>Delete</button>
                            </td>
                        </tr>
                    }
                    {
                        (user.admin == true && edit == true && create == false) && <tr id='buttoneditselecionjasfjagjd-tr'>
                            <td colSpan={2} id='buttoneditselecionjasfjagjd'>
                                <button className='info-edit-infoz' onClick={() => {editCallback(); navigate(editLink)}}>Save</button>
                                <button className='info-delete-infoz' onClick={() => {navigate(editLink)}}>Go back</button>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}