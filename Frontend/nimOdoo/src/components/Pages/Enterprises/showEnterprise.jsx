import { Page } from "../page"
import { useParams } from "react-router-dom";
import { PageLoading, PageShowElement } from "../PageElements";
import { useQuery } from "@apollo/client";
import * as Queries from "../../../apollo/apolloQueries"
import { SHOW_ENTERPRISE_INFO_CONFIG } from "./constants";

export default function ShowEnterprise ({}) {

    const { id } = useParams()
    const { loading, error, data, refetch} = useQuery(Queries.getEnterpriseByID, {
        variables:{
            enterpriseID : id
        }
    });
    if (loading) return <PageLoading/>
    return (
        <Page Name={"Show a Enterprise"}>
            {
                (data != undefined) && <PageShowElement
                    options={SHOW_ENTERPRISE_INFO_CONFIG}
                    info={data.getEnterpriseByID}
                    elementType={"Enterprise : " +  data.getEnterpriseByID.name}
                    editLink={"/enterprise/" + id + "/edit"}
                    deleter={Queries.deleteEnterprise}
                    baseLink="/enterprise/"
                />
            }
        </Page>
    )
}