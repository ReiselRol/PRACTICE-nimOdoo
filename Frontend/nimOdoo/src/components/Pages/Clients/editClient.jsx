import { Page } from "../page"
import { useParams } from "react-router-dom";
import { PageLoading, PageShowElement } from "../PageElements";
import { useQuery, useMutation } from "@apollo/client";
import * as Queries from "../../../apollo/apolloQueries"
import { SHOW_CLIENT_INFO_CONFIG } from "./constants";
import { useState, useEffect } from "react";
import Select from 'react-select';
import './client.css'

export default function EditClient ({}) {

    const [aontherLoading, setAnotherLoading] = useState(false)
    const [editer] = useMutation(Queries.updateClient)
    const { id } = useParams();
    const { loading, error, data, refetch} = useQuery(Queries.getClientByID, {
        variables:{
            clientID : id
        }
    });

    const { loading : loading2, error : error2, data: data2, refetch: refecth2 } = useQuery(Queries.getAllEnterprises)
    const [options, setOptions] = useState([])
    const [optionSelected, setOptionSelected] = useState(null)

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
                enterpriseId : optionSelected.value
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

    useEffect(() => {
        if (loading2 == false) {
            var newOptions = []
            for (var i = 0; i < data2.getEnterprises.length; i++) {
                newOptions.push({value : data2.getEnterprises[i].ID, label: data2.getEnterprises[i].name})
            }
            setOptions(newOptions)
        }
    }, [loading2])

    if (loading || aontherLoading) return <PageLoading/>
    return (
        <Page Name={"Edit a Client"}>
            {
                (data != undefined) && <PageShowElement
                    options={SHOW_CLIENT_INFO_CONFIG}
                    info={data.getClientByID}
                    elementType={"Client: " +  data.getClientByID.name}
                    editLink={"/client/" + id + "/show"}
                    edit={true}
                    editCallback={edit}
                    editStates={editStates}
                    uniqueName="client"
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