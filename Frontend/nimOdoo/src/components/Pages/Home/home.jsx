import { Page } from "../page"
import { PageTitle, PageImportantText } from "../PageElements"
import { useNavigate } from "react-router-dom"
import './home.css'

export function Home ({}) {
    const navigate = useNavigate()

    return (
        <Page Name={"Home"}>
            <PageTitle>Welcome to nimOdoo</PageTitle>
            <PageImportantText>NimOdoo is a comprehensive business management solution designed to streamline internal processes within a company. With specialized modules, it facilitates the administration of products, clients, companies, sales proposals, and sales. Its focus is on simplifying business operations by centralizing relevant information for informed and effective decision-making.</PageImportantText>
            <table className="home-table">
                <tr>
                    <td><PageTitle>Our Team</PageTitle></td>
                    <td><PageTitle>Our Technology</PageTitle></td>
                </tr>
                <tr>
                    <td><PageImportantText>The ERP development has been led by a developer committed to technical excellence. While the project has been mainly managed by an individual, support has been provided by professionals in key areas such as user interface design and database management. The focus has been on innovation and implementing best development practices to ensure a high-quality end product.</PageImportantText></td>
                    <td><PageImportantText>The platform is built on modern technologies to ensure performance and scalability. The frontend is developed in React, a JavaScript framework known for its ability to create interactive user interfaces. For the backend, an API has been implemented using MongoDB as the database and GraphQL as the query language. This combination provides a flexible and efficient development environment.</PageImportantText></td>
                </tr>
            </table>
            <div className="home-the-center"><button onClick={() => { navigate("/modules") }}>See All Modules</button></div>
        </Page>
    )
}