import { Page } from "../page"
import { useParams } from "react-router-dom";
import { PageLoading, PageShowElement } from "../PageElements";
import { useQuery, useMutation } from "@apollo/client";
import * as Queries from "../../../apollo/apolloQueries"
import { SHOW_CLIENT_INFO_CONFIG } from "./constants";
import { useState, useEffect } from "react";

export default function EditClient ({}) {

    const [aontherLoading, setAnotherLoading] = useState(false)
    const [editer] = useMutation(Queries.updateClient)
    const { id } = useParams();
    const { loading, error, data, refetch} = useQuery(Queries.getClientByID, {
        variables:{
            clientID : id
        }
    });

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const editStates = [
        { value : null, setState : null },
        { value : name, setState : setName },
        { value : surname, setState : setSurname },
        { value : email, setState : setEmail },
        { value : phone, setState : setPhone }
    ]

    const edit = () => {
        setAnotherLoading(true)
        editer ({
            variables:{
                clientId : id,
                name : name,
                surname : surname,
                email : email,
                phone : phone,
            }
        }).finally(setAnotherLoading(false))
        return true
    }

    useEffect(() => {
        if (loading == false) {
            setName(data.getClientByID.name)
            setSurname(data.getClientByID.surname)
            setEmail(data.getClientByID.email)
            setPhone(data.getClientByID.phone)
        }
    }, [loading])
    if (loading || aontherLoading) return <PageLoading/>
    return (
        <Page Name={"Edit a Client"}>
            {
                (data != undefined) && <PageShowElement
                    options={SHOW_CLIENT_INFO_CONFIG}
                    info={data.getClientByID}
                    elementType={"Product: " +  data.getClientByID.name}
                    editLink={"/client/" + id + "/show"}
                    edit={true}
                    editCallback={edit}
                    editStates={editStates}
                >
                    <tr>
                        <td>Enterprise</td>
                    {(data.getClientByID.enterpriseID == null) ? <td>This client dont have an enterprise...</td> : <></>}
                    </tr>
                </PageShowElement>
            }
        </Page>
    )
}