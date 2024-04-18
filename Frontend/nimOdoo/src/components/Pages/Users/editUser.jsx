import { Page } from "../page"
import { useParams } from "react-router-dom";
import { PageLoading , PageShowElement} from "../PageElements";
import { useQuery } from "@apollo/client";
import * as Queries from "../../../apollo/apolloQueries"
import { SHOW_USER_INFO_CONFIG } from "./constants";
import { useState, useEffect } from "react";

export default function EditUser ({}) {

    const { id } = useParams();
    const { loading, error, data, refetch} = useQuery(Queries.getUserByID, {
        variables:{
            userID : id
        }
    });

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [admin, setAdmin] = useState("")

    const editStates = [
        { value : null, setState : null },
        { value : name, setState : setName },
        { value : surname, setState : setSurname },
        { value : email, setState : setEmail },
        { value : admin, setState : setAdmin }
    ]

    const edit = () => {

    }

    useEffect(() => { 
        if (loading == false) {
                console.log(data.getUserByID.name)
                setName(data.getUserByID.name)
                setSurname(data.getUserByID.surname)
                setEmail(data.getUserByID.email)
                setAdmin(data.getUserByID.admin)
        }
    }, [loading])

    if (loading) return <PageLoading/>
    return (
        <Page Name={"Edit user: " + data.getUserByID.name}>
            {
                (data != undefined) && <PageShowElement
                    options={SHOW_USER_INFO_CONFIG}
                    info={data.getUserByID}
                    elementType={"User: " +  data.getUserByID.name}
                    editLink={"/user/" + id + "/show"}
                    edit={true}
                    editCallback={edit}
                    editStates={editStates}
                />
            }
        </Page>
    )
}