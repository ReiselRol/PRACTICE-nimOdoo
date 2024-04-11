import { Page } from "../page"
import { useParams } from "react-router-dom";
import { PageLoading } from "../PageElements";

export default function EditUser ({}) {

    const { id } = useParams();
    console.log(id);
    return (
        <Page Name={"Edit a User"}>
            <PageLoading/>
        </Page>
    )
}