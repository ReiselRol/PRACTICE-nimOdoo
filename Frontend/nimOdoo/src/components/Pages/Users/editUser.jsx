import { Page } from "../page"
import { useParams } from "react-router-dom";
import { PageLoading , PageShowElement} from "../PageElements";
import { useQuery } from "@apollo/client";
import * as Queries from "../../../apollo/apolloQueries"
import { SHOW_USER_INFO_CONFIG } from "./constants";
import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";

export default function EditUser ({}) {
    const [editer] = useMutation(Queries.updateUser)
    const { id } = useParams();
    const [aontherLoading, setAnotherLoading] = useState(false)
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
        setAnotherLoading(true)
        editer({
            variables:{
                userId : id,
                name : name,
                surname : surname,
                email : email,
                password : data.getUserByID.password,
                admin: admin
            }
        }).finally(() => {setAnotherLoading(false)})
        return true
    }

    useEffect(() => { 
        if (loading == false) {
                setName(data.getUserByID.name)
                setSurname(data.getUserByID.surname)
                setEmail(data.getUserByID.email)
                setAdmin(data.getUserByID.admin)
        }
    }, [loading])

    if (loading || aontherLoading) return <PageLoading/>
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