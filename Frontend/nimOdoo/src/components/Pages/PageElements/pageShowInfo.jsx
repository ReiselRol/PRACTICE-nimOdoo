import { useMutation } from '@apollo/client'
import { PageLoading } from '../PageElements'
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import './pageShowInfo.css'

export default function PageShowInfo ({
    title,
    infoOrder,
    info, 
    loading,
    error,
    linkToCreate,
    queryForDelete,
    refecth,
    fakerQuery = undefined,
}) {
    const [loading2, setLoading2] = useState(true)
    const [infoV2, setInfoToShow] = useState([])
    const [searcher, setSearcher] = useState('')
    const [searchBy, setSearchBy] = useState(infoOrder[0][0])
    const navigate = useNavigate()
    const [deleter] = useMutation(queryForDelete)
    var fakeable = false
    var fakeInfo = () => {}
    if (fakerQuery !== undefined) {
        const [faker] = useMutation(fakerQuery)
        fakeable = true
        var fakeInfo = () => {
            setLoading2(true)
            faker({
                variables: {
                    total : 5
                }
            }).finally(() => {
                refecth()
                setLoading2(false)
            })
        }
    }

    const deleteElement = (elementID) => {
        setLoading2(true)
        deleter({
            variables: {
                id : elementID
            }
        }).finally(() => {
            refecth()
            setLoading2(false)
        })
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
        if (infoToShow.length > 30) infoToShow = infoToShow.substring(0, 30) + '...';
        return infoToShow
    }

    const selectorOnChange = (event) => {
        setSearchBy(event.target.value)
    }

    const textOnChange = (event) => {
        setSearcher(event.target.value)
    }

    const filterWithText = () => {
        if (searcher != '') {
            var newInfo = []
            console.log(infoV2[i])
            for (var i = 0; i < infoV2.length; i++) {
                if (infoV2[i][searchBy].toLowerCase().includes(searcher.toLowerCase())) newInfo.push(infoV2[i])
            }
            setInfoToShow(newInfo)
        } else setInfoToShow([...info])
    }

    useEffect(() => {
        setLoading2(true)
        setInfoToShow([...info])
        setLoading2(false)
    }, [info])

    useEffect(() => {
        setInfoToShow([...info])
        setLoading2(false)
    }, [])

    useEffect(() => {
        filterWithText()
    }, [searcher, searchBy])

    if (loading || loading2) return <PageLoading/>
    if (error) return <PageLoading/>
    return (
        <div className='info-big-div'>
            <table className='info-options'>
                <tbody>
                <tr className='info-title-options'>
                    <td colSpan={3}>Options</td>
                </tr>
                <tr className='info-options-button-selection'>
                    <td><button disabled={!fakeable} className='madafakin-btn-v2 info-show-info' onClick={() => { refecth() }}>Refresh</button></td>
                    <td><button className='madafakin-btn-v2 info-edit-info' onClick={() => { navigate(linkToCreate + 'create')}}>Create +</button></td>
                    <td><button className='madafakin-btn-v2 info-other-info' onClick={fakeInfo}>Fake Info +</button></td>
                </tr>
                <tr className='info-options-selector'>
                    <td id='unbrighter'>Style: </td>
                    <td className='info-brighter'>Raw</td>
                    <td className='info-brighter'>Cards</td>
                </tr>
                </tbody>
            </table>

            <table className='info-find'>
                <tbody>
                    <tr>
                        <td>
                            <input className='info-searcherbar' type='text' value={searcher} onChange={textOnChange}/>
                        </td>
                        <td>
                            <select className='info-selector' value={searchBy} onChange={selectorOnChange}>
                                {
                                    infoOrder.map((eachPart, index) => (
                                        (eachPart[2] == 'Text') ? <option value={eachPart[0]} key={index + " - coso"}>{eachPart[0]}</option> : <></>
                                    ))
                                }
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className='info-table'>
                <tbody>
                    <tr className='info-title'>
                        <td colSpan={infoOrder.length + 1}>{title}</td>
                    </tr>
                    <tr className='info-info'>
                        {
                            infoOrder.map((eachPart, index) => (
                                <td style={{wordWrap: 'break-word', overflow: 'hidden', maxWidth: (100 / (infoOrder.length + 1)) + '%'}} key={index + " - header"}>{eachPart[1]}</td>
                            ))
                        }
                        <td className='info-action'>Actions</td>
                    </tr>
                    {
                        (infoV2.length > 0) ? infoV2.map((eachInfo, firtsIndex) => (
                            <tr className={'info-info-real-info ' + ((firtsIndex % 2 == 0) ? "info-info-real-info-par-info" : "")} key={firtsIndex + " - info - "}>
                                {
                                    infoOrder.map((eachPart, index) => (
                                        <td style={{wordWrap: 'break-word', overflow: 'hidden', maxWidth: (100 / (infoOrder.length + 1)) + '%'}} onClick={() => { navigate(linkToCreate + eachInfo["ID"] + "/show")}} key={firtsIndex + " - " + index}>{showInfo(eachInfo[eachPart[0]], eachPart[2])}</td>
                                    ))
                                }
                                <td className='info-action'>
                                    <button className='madafakin-btn info-show-info' onClick={() => { navigate(linkToCreate + eachInfo["ID"] + "/show")}}>Show</button>
                                    <button className='madafakin-btn info-edit-info' onClick={() => { navigate(linkToCreate + eachInfo["ID"] + "/edit")}}>Edit</button>
                                    <button className='madafakin-btn info-delete-info' onClick={() => deleteElement(eachInfo["ID"])}>Delete</button>
                                </td>
                            </tr>
                        )) : <tr>
                            <td className='info-nothingFound' colSpan={infoOrder.length + 1}>
                                Nothing Found Here <br/> :[
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}