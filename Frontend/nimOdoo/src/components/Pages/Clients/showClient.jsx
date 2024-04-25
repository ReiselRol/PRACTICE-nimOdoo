import { Page } from "../page"
import { useParams } from "react-router-dom";
import { PageLoading, PageShowElement } from "../PageElements";
import { useQuery } from "@apollo/client";
import * as Queries from "../../../apollo/apolloQueries"
import { SHOW_CLIENT_INFO_CONFIG } from "./constants";
import { useEffect, useState } from "react";

export default function ShowClient ({}) {

    const { id } = useParams();
    var [enterpriseID, setEnterpriseID] = useState("")
    const { loading : loadingE, error : errorE, data: dataE, refetch: refetchE} = useQuery(Queries.getEnterpriseByID, {
        variables:{
            enterpriseID : enterpriseID
        }
    });
    const { loading, error, data, refetch} = useQuery(Queries.getClientByID, {
        variables:{
            clientID : id
        }
    });
    useEffect(() => { refetch() }, [])
    useEffect(() => { if (loading == false) setEnterpriseID(data.getClientByID.enterpriseID) }, [loading])
    useEffect(() => { refetchE() }, [enterpriseID])
    if (loading || loadingE) return <PageLoading/>
    return (
        <Page Name={"Show a Client"}>
            {
                (data != undefined) && <PageShowElement
                    options={SHOW_CLIENT_INFO_CONFIG}
                    info={data.getClientByID}
                    elementType={"Product: " +  data.getClientByID.name}
                    editLink={"/client/" + id + "/edit"}
                    deleter={Queries.deleteClient}
                    baseLink="/client/"
                    uniqueName="client"
                >
                    <tr>
                        <td>Enterprise</td>
                    {(data.getClientByID.enterpriseID == null) ? <td>This client dont have an enterprise...</td>
                    : (dataE != undefined) ? <td>{dataE.getEnterpriseByID.name}</td> : <></>}
                    </tr>
                </PageShowElement>
            }
        </Page>
    )
}