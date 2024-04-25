import { Page } from "../page"
import { useParams } from "react-router-dom";
import { PageLoading, PageShowElement } from "../PageElements";
import { useQuery, useMutation } from "@apollo/client";
import * as Queries from "../../../apollo/apolloQueries"
import { SHOW_CLIENT_INFO_CONFIG } from "./constants";
import { useState, useEffect } from "react";
import Select from 'react-select';

export default function CreateClient ({}) {

    const [aontherLoading, setAnotherLoading] = useState(false)
    const [editer] = useMutation(Queries.addClient)
    const { id } = useParams()

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const { loading : loading2, error : error2, data: data2, refetch: refecth2 } = useQuery(Queries.getAllEnterprises)
    const [options, setOptions] = useState([])
    const [optionSelected, setOptionSelected] = useState(null)

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
                enterpriseId : optionSelected.value
            }
        }).finally(setAnotherLoading(false))
        return true
    }
    useEffect(() => {
        if (loading2 == false) {
            var newOptions = []
            for (var i = 0; i < data2.getEnterprises.length; i++) {
                newOptions.push({value : data2.getEnterprises[i].ID, label: data2.getEnterprises[i].name})
            }
            setOptions(newOptions)
        }
    }, [loading2])
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
                    <tr className="ingoreOverflow">
                        <td>Enterprise</td>
                        <td className="ingoreOverflow"><Select
                            defaultValue={optionSelected}
                            onChange={setOptionSelected}
                            options={options}
                            className="selectitor"
                            autoFocus={false}
                        /></td>
                    </tr>
                </PageShowElement>
            }
        </Page>
    )
}