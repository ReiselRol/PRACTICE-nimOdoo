
/*
    inforOrder:
    [['nombrePropiedad', 'titulo'], ['nombrePropiedad', 'titulo']]
    info :
    [{}, {}, {}]
*/

export default function PageShowInfo ({title, infoOrder, info, loading, error}) {

    if (loading) return <></>
    else if (error) return<></>
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td colSpan={title.length}>{title}</td>
                    </tr>
                    <tr>
                        {
                            infoOrder.map((eachPart, index) => (
                                <td key={index + " - header"}>{eachPart[1]}</td>
                            ))
                        }
                    </tr>
                    {
                        info.map((eachInfo, firtsIndex) => (
                            <tr key={firtsIndex + " - info"}>
                                {
                                    infoOrder.map((eachPart, index) => (
                                        <td key={firtsIndex + " - " + index}>{eachInfo[eachPart[0]]}</td>
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