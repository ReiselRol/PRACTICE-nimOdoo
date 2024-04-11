import { Page } from "../page"
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { PageLoading, PageShowInfo } from "../PageElements";
import * as Queries from "../../../apollo/apolloQueries"
import { PRODUCT_INFO_CONFIG } from "./constants";
export default function AllProducts ({}) {

    const { loading, error, data, refetch } = useQuery(Queries.getAllProducts)
    useEffect(() => { refetch() }, [])
    return (
        data != undefined ? (
            <Page Name={"All Products"}>
                <PageShowInfo
                    title="All Products"
                    infoOrder={PRODUCT_INFO_CONFIG}
                    loading={loading}
                    error={error}
                    info={data.getProducts}
                    queryForDelete={Queries.deleteProduct}
                    refecth={refetch}
                    linkToCreate="/product/"
                    fakerQuery={Queries.fakeProduct}
                    />
            </Page>
        ) : <PageLoading/>
    )
}