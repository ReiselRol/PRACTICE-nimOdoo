import { Page } from "../page"
import { useParams } from "react-router-dom";
import { PageLoading, PageShowElement } from "../PageElements";
import { useQuery, useMutation } from "@apollo/client";
import * as Queries from "../../../apollo/apolloQueries"
import { SHOW_ENTERPRISE_INFO_CONFIG } from "./constants";
import { useState, useEffect } from "react";

export default function EditEnterprise ({}) {

    const [editer] = useMutation(Queries.updateEnterprise)
    const { id } = useParams();
    const { loading, error, data, refetch} = useQuery(Queries.getEnterpriseByID, {
        variables:{
            enterpriseID : id
        }
    })
    const [aontherLoading, setAnotherLoading] = useState(false)
    const [cif, setCif] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")

    const editStates = [
        { value : null, setState : null },
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

    useEffect(() => { 
        if (loading == false) {
            setCif(data.getEnterpriseByID.cif)
            setName(data.getEnterpriseByID.name)
            setEmail(data.getEnterpriseByID.email)
            setPhone(data.getEnterpriseByID.phone)
            setAddress(data.getEnterpriseByID.address)
        }
    }, [loading])
    if (loading || aontherLoading) return <PageLoading/>
    return (
        <Page Name={"Edit a Enterprise"}>
            {
                (data != undefined) && <PageShowElement
                    options={SHOW_ENTERPRISE_INFO_CONFIG}
                    info={data.getEnterpriseByID}
                    elementType={"Enterprise : " +  data.getEnterpriseByID.name}
                    editLink={"/enterprise/" + id + "/show"}
                    edit={true}
                    editCallback={edit}
                    editStates={editStates}
                    uniqueName="enterprise"
                />
            }
        </Page>
    )
}