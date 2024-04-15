import { Page } from "../page"
import { LOG_INFO_CONFIG } from "./constants"
import { PageShowInfo, PageLoading } from "../PageElements"
import { useQuery } from "@apollo/client";
import * as Queries from "../../../apollo/apolloQueries"
import { useEffect } from "react";

export default function ShowLogs ({}) {

    const { loading, error, data, refetch } = useQuery(Queries.getAllLogs)

    useEffect(() => { refetch() }, [])
    return (
        data != undefined ? (
        <Page Name={"All Logs"}>
            <PageShowInfo
                title="All Logs"
                infoOrder={LOG_INFO_CONFIG}
                loading={loading}
                error={error}
                info={data.getLogs}
                queryForDelete={Queries.deleteUser}
                refecth={refetch}
                linkToCreate="/user/"
                hasActions={false}
                />
        </Page>) : <PageLoading/>
    )
}