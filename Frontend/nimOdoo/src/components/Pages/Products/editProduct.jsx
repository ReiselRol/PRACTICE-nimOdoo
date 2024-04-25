import { Page } from "../page"
import { useParams } from "react-router-dom";
import { PageLoading, PageShowElement } from "../PageElements";
import { useQuery } from "@apollo/client";
import * as Queries from "../../../apollo/apolloQueries"
import { SHOW_PRODUCT_INFO } from "./constants";
import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";

export default function EditProduct ({}) {

    const [editer] = useMutation(Queries.updateProduct)
    const { id } = useParams();
    const { loading, error, data, refetch} = useQuery(Queries.getProductByID, {
        variables:{
            productID : id
        }
    });

    const [aontherLoading, setAnotherLoading] = useState(false)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)

    const editStates = [
        { value : null, setState : null },
        { value : name, setState : setName },
        { value : description, setState : setDescription },
        { value : price, setState : setPrice },
        { value : stock, setState : setStock },
    ]

    useEffect(() => { 
        if (loading == false) {
            setName(data.getProductByID.name)
            setDescription(data.getProductByID.description)
            setPrice(data.getProductByID.price)
            setStock(data.getProductByID.stock)
        }
    }, [loading])
    const edit = () => {
            setAnotherLoading(true)
            const stockParsed = parseInt(stock)
            const priceParsed = parseFloat(price) 
            if (stockParsed == NaN && priceParsed == NaN) return false
            else {
                editer({
                    variables:{
                        productId : id,
                        name: name,
                        description : description,
                        stock : stockParsed,
                        price : priceParsed
                    }
                }).finally(() => {setAnotherLoading(false)})
                return true
            }
    }
    if (loading == true || aontherLoading == true) return <PageLoading/>
    return (
        <Page Name={"Edit a Product"}>
            {
                (data != undefined) && <PageShowElement
                    options={SHOW_PRODUCT_INFO}
                    info={data.getProductByID}
                    elementType={"Product: " +  data.getProductByID.name}
                    editLink={"/product/" + id + "/show"}
                    edit={true}
                    editCallback={edit}
                    editStates={editStates}
                    uniqueName="product"
                />
            }
        </Page>
    )
}