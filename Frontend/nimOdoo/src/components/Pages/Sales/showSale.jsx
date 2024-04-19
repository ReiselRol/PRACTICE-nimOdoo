import { Page } from "../page"
import { useParams } from "react-router-dom";
import { PageLoading } from "../PageElements";

export default function ShowSale ({}) {

    const { id } = useParams();
    return (
        <Page Name={"Show a Sale"}>
            <PageLoading/>
        </Page>
    )
}