import { Page } from "../page"
import { useParams } from "react-router-dom";
import { PageLoading, PageShowElement } from "../PageElements";
import { useQuery, useMutation } from "@apollo/client";
import * as Queries from "../../../apollo/apolloQueries"
import { ENTERPRISE_INFO_CONFIG } from "./constants";
import { useState, useEffect } from "react";

export default function CreateEnterprise ({}) {

    const [editer] = useMutation(Queries.addEnterprise)
    const { id } = useParams();
    const [aontherLoading, setAnotherLoading] = useState(false)
    const [cif, setCif] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")

    const editStates = [
        { value : cif, setState : setCif },
        { value : name, setState : setName },
        { value : email, setState : setEmail },
        { value : phone, setState : setPhone },
        { value : address, setState : setAddress },
    ]
    
    const edit = () => {
        setAnotherLoading(true)
        editer({
            variables:{
                enterpriseId : id,
                name: name,
                cif : cif,
                email : email,
                phone : phone,
                address : address
            }
        }).finally(() => {setAnotherLoading(false)})
        return true
    }

    if (aontherLoading) return <PageLoading/>
    return (
        <Page Name={"Create a Enterprise"}>
            {
                <PageShowElement
                    options={ENTERPRISE_INFO_CONFIG}
                    info={undefined}
                    elementType={"Create a enterprise"}
                    editLink={"/enterprise/"}
                    create={true}
                    editCallback={edit}
                    editStates={editStates}
                    uniqueName="enterprise"
                />
            }
        </Page>
    )
}