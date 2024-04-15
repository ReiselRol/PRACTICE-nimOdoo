import { Page } from "../page"
import { useParams } from "react-router-dom";
import { PageLoading } from "../PageElements";
import { useQuery } from "@apollo/client";
import * as Queries from "../../../apollo/apolloQueries"

export default function ShowUser ({}) {

    const { id } = useParams();
    const { loading, error, data, refetch} = useQuery(Queries.getUserByID, {
        
    });
    if (!loading) console.log(data)
    return (
        <Page Name={"Show a User"}>
            <PageLoading/>
        </Page>
    )
}