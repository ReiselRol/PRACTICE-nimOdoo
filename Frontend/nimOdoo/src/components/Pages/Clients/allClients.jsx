import { Page } from "../page"
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { PageLoading, PageShowInfo } from "../PageElements";
import { CLIENT_INFO_CONFIG } from "./constants";
import * as Queries from "../../../apollo/apolloQueries"
export default function AllClients ({}) {

    const { loading, error, data, refetch } = useQuery(Queries.getAllClients)
    useEffect(() => { refetch() }, [])

    return (
        data != undefined ? (
            <Page Name={"All Clients"}>
                <PageShowInfo
                    title="All Clients"
                    Name={"client"}
                    infoOrder={CLIENT_INFO_CONFIG}
                    loading={loading}
                    error={error}
                    info={data.getClients}
                    queryForDelete={Queries.deleteClient}
                    refecth={refetch}
                    linkToCreate="/client/"
                    fakerQuery={Queries.fakeClient}
                    />
            </Page>
        ) : <PageLoading/>
    )
}