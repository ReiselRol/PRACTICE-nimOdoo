import { Page } from "../page"
import { useParams } from "react-router-dom";
import { PageLoading } from "../PageElements";

export default function ShowEnterprise ({}) {

    const { id } = useParams();
    console.log(id);
    return (
        <Page Name={"Show a Enterprise"}>
            <PageLoading/>
        </Page>
    )
}