import { Page } from "../page"
import { useParams } from "react-router-dom";
import { PageLoading } from "../PageElements";

export default function EditSellProposal ({}) {

    const { id } = useParams();
    return (
        <Page Name={"Edit a Sell Proposal"}>
            <PageLoading/>
        </Page>
    )
}