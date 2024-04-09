import { Page } from "../page"
import { USER_INFO_CONFIG } from "./constants"
import { PageShowInfo } from "../PageElements"
import { useQuery } from "@apollo/client";
import * as Queries from "../../../apollo/apolloQueries"
import { useEffect } from "react";

export default function AllUsers ({}) {

    const { loading, error, data, refetch } = useQuery(Queries.getAllUsers)

    useEffect(() => { refetch() }, [])

    return (
        loading == false && data != undefined ? (<Page Name={"All Users"}>
            <PageShowInfo
                title="All Users"
                infoOrder={USER_INFO_CONFIG}
                loading={loading}
                error={error}
                info={data.getUsers}
                />
        </Page>) : <></>
    )
}