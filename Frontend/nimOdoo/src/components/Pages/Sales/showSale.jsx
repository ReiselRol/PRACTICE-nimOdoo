import { Page } from "../page"
import { useParams } from "react-router-dom";
import { PageLoading } from "../PageElements";

export default function ShowSale ({}) {

    const { id } = useParams();
    console.log(id);
    return (
        <Page Name={"Show a Sale"}>
            <PageLoading/>
        </Page>
    )
}