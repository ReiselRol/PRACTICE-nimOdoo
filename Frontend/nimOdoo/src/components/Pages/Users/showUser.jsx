import { Page } from "../page"
import { useParams } from "react-router-dom";
import { PageLoading , PageShowElement} from "../PageElements";
import { useQuery } from "@apollo/client";
import * as Queries from "../../../apollo/apolloQueries"
import { SHOW_USER_INFO_CONFIG } from "./constants";
import { useEffect } from "react";

export default function ShowUser ({}) {

    const { id } = useParams();
    const { loading, error, data, refetch} = useQuery(Queries.getUserByID, {
        variables:{
            userID : id
        }
    });
    useEffect(() => { refetch() }, [])
    if (loading) return <PageLoading/>
    return (
        <Page Name={"Show user: " + data.getUserByID.name}>
            {
                (data != undefined) && <PageShowElement
                    options={SHOW_USER_INFO_CONFIG}
                    info={data.getUserByID}
                    elementType={"User: " +  data.getUserByID.name}
                    editLink={"/user/" + id + "/edit"}
                    baseLink="/user/"
                    deleter={Queries.deleteUser}
                    uniqueName="user"
                />
            }
        </Page>
    )
}