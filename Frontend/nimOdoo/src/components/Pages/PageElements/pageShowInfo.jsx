import './pageShowInfo.css'

export default function PageShowInfo ({title, infoOrder, info, loading, error}) {

    const showInfo = (info, howToTractIt) => {
        var infoToShow = info
        if (howToTractIt == "Password") infoToShow = "········"
        else if (howToTractIt == "Boolean") infoToShow = (info == true) ? "Yes" : "No"
        return infoToShow
    }

    if (loading) return <></>
    if (error) return<></>
    return (
        <div className='info-big-div'>
            <table className='info-table'>
                <tbody>
                    <tr className='info-title'>
                        <td colSpan={title.length}>{title}</td>
                    </tr>
                    <tr className='info-info'>
                        {
                            infoOrder.map((eachPart, index) => (
                                <td key={index + " - header"}>{eachPart[1]}</td>
                            ))
                        }
                    </tr>
                    {
                        info.map((eachInfo, firtsIndex) => (
                            <tr className={'info-info-real-info ' + ((firtsIndex % 2 == 0) ? "info-info-real-info-par-info" : "")} key={firtsIndex + " - info"}>
                                {
                                    infoOrder.map((eachPart, index) => (
                                        <td key={firtsIndex + " - " + index}>{showInfo(eachInfo[eachPart[0]], eachPart[2])}</td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}