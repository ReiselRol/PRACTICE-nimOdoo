import { Page } from "../page"
import { useParams } from "react-router-dom";
import { PageLoading } from "../PageElements";

export default function EditEnterprise ({}) {

    const { id } = useParams();
    console.log(id);
    return (
        <Page Name={"Edit a Enterprise"}>
            <PageLoading/>
        </Page>
    )
}