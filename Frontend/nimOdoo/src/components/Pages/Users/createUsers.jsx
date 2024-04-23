import { Page } from "../page"
import { PageLoading , PageShowElement} from "../PageElements";
import * as Queries from "../../../apollo/apolloQueries"
import { USER_INFO_CREATE_CONFIG } from "./constants";
import { useState } from "react";
import { useMutation } from "@apollo/client";
export default function CreateUser ({}) {
    const [editer] = useMutation(Queries.addUser)
    const [aontherLoading, setAnotherLoading] = useState(false)
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const editStates = [
        { value : name, setState : setName },
        { value : surname, setState : setSurname },
        { value : email, setState : setEmail },
        { value : password, setState : setPassword }
    ]

    const edit = () => {
        setAnotherLoading(true)
        editer({
            variables:{
                name : name,
                surname : surname,
                email : email,
                password : password,
                admin: false
            }
        }).finally(() => {setAnotherLoading(false)})
        return true
    }

    if (aontherLoading) return <PageLoading/>
    return (
        <Page Name={"Create user"}>
            {
                <PageShowElement
                    options={USER_INFO_CREATE_CONFIG}
                    info={undefined}
                    elementType={"Create user"}
                    editLink={"/user/"}
                    create={true}
                    editCallback={edit}
                    editStates={editStates}
                />
            }
        </Page>
    )
}