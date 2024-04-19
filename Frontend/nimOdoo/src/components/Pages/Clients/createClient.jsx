import { Page } from "../page"
import { useParams } from "react-router-dom";
import { PageLoading, PageShowElement } from "../PageElements";
import { useQuery, useMutation } from "@apollo/client";
import * as Queries from "../../../apollo/apolloQueries"
import { SHOW_CLIENT_INFO_CONFIG } from "./constants";
import { useState, useEffect } from "react";

export default function CreateClient ({}) {

    const [aontherLoading, setAnotherLoading] = useState(false)
    const [editer] = useMutation(Queries.addClient)
    const { id } = useParams();

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
                enterpriseID  : null
            }
        }).finally(setAnotherLoading(false))
        return true
    }
    if (aontherLoading) return <PageLoading/>
    return (
        <Page Name={"Create a Client"}>
            {
                <PageShowElement
                    options={SHOW_CLIENT_INFO_CONFIG}
                    info={undefined}
                    elementType={"Create Client"}
                    editLink={"/client/"}
                    create={true}
                    editCallback={edit}
                    editStates={editStates}
                >
                    <tr>
                        <td>Enterprise</td>
                    
                    </tr>
                </PageShowElement>
            }
        </Page>
    )
}