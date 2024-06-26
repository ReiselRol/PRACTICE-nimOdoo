import { Page } from "../page"
import { useParams } from "react-router-dom";
import { PageLoading, PageShowElement } from "../PageElements";
import { useQuery } from "@apollo/client";
import * as Queries from "../../../apollo/apolloQueries"
import { SHOW_PRODUCT_INFO } from "./constants";
import { useEffect } from "react";

export default function ShowProduct ({}) {

    const { id } = useParams();
    const { loading, error, data, refetch} = useQuery(Queries.getProductByID, {
        variables:{
            productID : id
        }
    });

    useEffect(()=>{ refetch() },[])

    if (loading) return <PageLoading/>
    return (
        <Page Name={"Show a Product"}>
            {
                (data != undefined) && <PageShowElement
                    options={SHOW_PRODUCT_INFO}
                    info={data.getProductByID}
                    elementType={"Product: " +  data.getProductByID.name}
                    editLink={"/product/" + id + "/edit"}
                    deleter={Queries.deleteProduct}
                    baseLink="/product/"
                    uniqueName="product"
                />
            }
        </Page>
    )
}