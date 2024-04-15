import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "./pageShowElement.css"

export default function PageShowElement ({
    edit = false,
    create = false,
    options,
    info,
    elementType,
    editLink
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
                                                    {showInfo(eachInfo[eachPart[0]], eachPart[2])}
                                                </td>
                                            </tr>
                                        </>
                                    ))
                                }
                            </>
                        ))
                    }
                    {
                        (user.admin == true) && <tr id='buttoneditselecionjasfjagjd-tr'>
                            <td colSpan={2} id='buttoneditselecionjasfjagjd'>
                                <button className='info-edit-infoz' onClick={() => {navigate(editLink)}}>Edit</button>
                                <button className='info-delete-infoz'>Delete</button>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}