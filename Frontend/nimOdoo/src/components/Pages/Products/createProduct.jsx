import { Page } from "../page"
import { useParams } from "react-router-dom";
import { PageLoading, PageShowElement } from "../PageElements";
import { useQuery } from "@apollo/client";
import * as Queries from "../../../apollo/apolloQueries"
import { PRODUCT_INFO_CONFIG } from "./constants";
import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";

export default function CreateProduct ({}) {

    const [editer] = useMutation(Queries.addProduct)

    const [aontherLoading, setAnotherLoading] = useState(false)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)

    const editStates = [
        { value : name, setState : setName },
        { value : description, setState : setDescription },
        { value : price, setState : setPrice },
        { value : stock, setState : setStock },
    ]

    const edit = () => {
        if ( parseInt(price) == undefined || parseInt(stock) == undefined ) return false
        setAnotherLoading(true)
        editer({
            variables:{
                name : name,
                description : description,
                price : parseInt(price),
                stock : parseInt(stock),
            }
        }).finally(() => {setAnotherLoading(false)})
        return true
    }
    if (aontherLoading == true) return <PageLoading/>
    return (
        <Page Name={"Edit a Product"}>
            {
                <PageShowElement
                    options={PRODUCT_INFO_CONFIG}
                    info={undefined}
                    elementType={"Create product"}
                    editLink={"/product/"}
                    create={true}
                    editCallback={edit}
                    editStates={editStates}
                    uniqueName="product"
                />
            }
        </Page>
    )
}