import { Page } from "../page"
import { useParams } from "react-router-dom";
import { PageLoading } from "../PageElements";

export default function EditSale ({}) {

    const { id } = useParams();
    return (
        <Page Name={"Edit a Sale"}>
            <PageLoading/>
        </Page>
    )
}