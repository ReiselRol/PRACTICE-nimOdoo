import { Page } from "../page"
import { useParams } from "react-router-dom";
import { PageLoading } from "../PageElements";

export default function ShowUser ({}) {

    const { id } = useParams();
    console.log(id);
    return (
        <Page Name={"Show a User"}>
            <PageLoading/>
        </Page>
    )
}