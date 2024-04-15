import { Page } from "../page"
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { PageLoading, PageShowInfo } from "../PageElements";
import * as Queries from "../../../apollo/apolloQueries"
import { ENTERPRISE_INFO_CONFIG } from "./constants";
export default function AllEnterprises ({}) {

    const { loading, error, data, refetch } = useQuery(Queries.getAllEnterprises)
    useEffect(() => { refetch() }, [])
    
    return (
        data != undefined ? (
            <Page Name={"All Enterprises"}>
                <PageShowInfo
                    title="All Enterprises"
                    Name={"enterprise"}	
                    infoOrder={ENTERPRISE_INFO_CONFIG}
                    loading={loading}
                    error={error}
                    info={data.getEnterprises}
                    queryForDelete={Queries.deleteEnterprise}
                    refecth={refetch}
                    linkToCreate="/enterprise/"
                    fakerQuery={Queries.fakeEnterprise}
                    />
            </Page>
        ) : <PageLoading/>
    )
}