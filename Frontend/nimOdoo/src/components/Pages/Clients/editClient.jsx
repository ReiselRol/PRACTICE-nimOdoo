import { Page } from "../page"
import { useParams } from "react-router-dom";
import { PageLoading } from "../PageElements";

export default function EditClient ({}) {

    const { id } = useParams();
    console.log(id);
    return (
        <Page Name={"Edit a Client"}>
            <PageLoading/>
        </Page>
    )
}