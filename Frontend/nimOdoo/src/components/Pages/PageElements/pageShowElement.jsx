import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "./pageShowElement.css"
import { useMutation } from '@apollo/client'
import * as Queries from '../../../apollo/apolloQueries'
import { useParams } from 'react-router-dom'

export default function PageShowElement ({
    edit = false,
    create = false,
    options,
    info,
    elementType,
    deleter,
    editLink,
    editStates,
    editCallback,
    children,
    baseLink,
    uniqueName,
    ClassNAme
}) {
    const { id } = useParams();
    const user = useSelector((state) => state.AppGlobals.User)
    var infoOnArray = [info]
    if (create == true){
        edit = true
        infoOnArray = []
        const object = {}
        for (var i = 0; i < options.length; i++) Object.defineProperty(object, options[i][0], { value: ""})
        infoOnArray.push(object)
    }
    var deleteItem = (id) => {console.log("Pass the query...")}
    var itemDeleter = (id) => {
        deleteItem({
            variables: {
                id: id
            }
        })
    }
    const [logger] = useMutation(Queries.addLog)
    const navigate = useNavigate()
    if (deleter != null || deleter != undefined) {
        [deleteItem] = useMutation(deleter)
        var itemDeleter = (id) => {
            deleteItem({
                variables: {
                    id: infoOnArray[0].ID
                }
            }).finally(() => {
                logger({
                    variables: {
                        userName: user.name,
                        userId: user.ID,
                        message: "The user has deleted a " + uniqueName + " with id " + infoOnArray[0].ID + " successfully!"
                    }
                })
                navigate(baseLink)
            })
        }
    }
    const newItem = () => {
        logger({
            variables: {
                userName: user.name,
                userId: user.ID,
                message: "The user has added a new " + uniqueName + " info successfully!"
            }
        }).finally(() => {navigate(editLink)})
    }
    const editItem = () => {
        logger({
            variables: {
                userName: user.name,
                userId: user.ID,
                message: "The user has edit a " + uniqueName + " info with the id " + id + " successfully!"
            }
        }).finally(() => {navigate(editLink)})
    }
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
        <div className={(ClassNAme != undefined) ? 'infoAdjuster ' + ClassNAme : 'infoAdjuster'}>
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
                                                        ((eachPart[1] != "ID") ? 
                                                            (eachPart[2] != "Boolean") ? <input type="text" onChange={(e) => {editStates[index].setState(e.target.value)}} value={editStates[index].value}/> : 
                                                            (eachPart[2] != "Price") ? <input type="number" onChange={(e) => {editStates[index].setState(e.target.value)}} value={editStates[index].value} maxLength="2"/> : 
                                                            <input type="checkbox" onChange={() => {editStates[index].setState(!editStates[index].value)}} checked={editStates[index].value}/>: showInfo(eachInfo[eachPart[0]], eachPart[2]))
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
                                <button className='info-delete-infoz' onClick={() => itemDeleter(infoOnArray[0].ID)}>Delete</button>
                            </td>
                        </tr>
                    }
                    {
                        (user.admin == true && edit == true && create == false) && <tr id='buttoneditselecionjasfjagjd-tr'>
                            <td colSpan={2} id='buttoneditselecionjasfjagjd'>
                                <button className='info-edit-infoz' onClick={() => { if (editCallback() == true) editItem() }}>Save</button>
                                <button className='info-delete-infoz' onClick={() => {navigate(editLink)}}>Go back</button>
                            </td>
                        </tr>
                    }
                    {
                        (user.admin == true && edit == true && create == true) && <tr id='buttoneditselecionjasfjagjd-tr'>
                            <td colSpan={2} id='buttoneditselecionjasfjagjd'>
                                <button className='info-edit-infoz' onClick={() => { if (editCallback() == true) newItem()}}>Save</button>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}