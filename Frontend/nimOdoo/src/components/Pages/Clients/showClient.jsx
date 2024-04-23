import { Page } from "../page"
import { useParams } from "react-router-dom";
import { PageLoading, PageShowElement } from "../PageElements";
import { useQuery } from "@apollo/client";
import * as Queries from "../../../apollo/apolloQueries"
import { SHOW_CLIENT_INFO_CONFIG } from "./constants";
import { useEffect } from "react";

export default function ShowClient ({}) {

    const { id } = useParams();
    const { loading, error, data, refetch} = useQuery(Queries.getClientByID, {
        variables:{
            clientID : id
        }
    });
    useEffect(() => { refetch() }, [])
    if (loading) return <PageLoading/>
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
                >
                    <tr>
                        <td>Enterprise</td>
                    {(data.getClientByID.enterpriseID == null) ? <td>This client dont have an enterprise...</td> : <></>}
                    </tr>
                </PageShowElement>
            }
        </Page>
    )
}