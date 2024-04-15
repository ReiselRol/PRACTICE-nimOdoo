import { Page } from "../page"
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { PageLoading, PageShowInfo } from "../PageElements";
import * as Queries from "../../../apollo/apolloQueries"
import { SALES_INFO_CONFIG } from "./constants";
export default function AllSales ({}) {

    const { loading, error, data, refetch } = useQuery(Queries.getAllSellsProposals)
    useEffect(() => { refetch() }, [])
    return (
        data != undefined ? (
            <Page Name={"All Sales"}>
                <PageShowInfo
                    title="All Sales"
                    Name={"sale"}
                    infoOrder={SALES_INFO_CONFIG}
                    loading={loading}
                    error={error}
                    info={data.getSalesProposals}
                    queryForDelete={Queries.deleteSalesProposal}
                    refecth={refetch}
                    linkToCreate="/sale/"
                    />
            </Page>
        ) : <PageLoading/>
    )
}