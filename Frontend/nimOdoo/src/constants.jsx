import { createBrowserRouter } from "react-router-dom"
import { Home } from "./components/Pages/Home/home"
import { AllClients, CreateClient } from "./components/Pages/Clients"
import { AllProducts, CreateProduct } from "./components/Pages/Products"
import { AllSales, CreateSale } from "./components/Pages/Sales"
import { AllEnterprises, CreateEnterprise } from "./components/Pages/Enterprises"
import { AllSellProposals, CreateSellProposal } from "./components/Pages/SellProposals"
import { AppFrame } from "./components/AppFrame/appFrame"
import { NotFoundPage } from "./components/Pages/NotFoundPage/notFoundPage"
import { Modules } from "./components/Pages/Modules/modules"
import { Configurations } from "./components/Pages/Configurations"
import { AllUsers, CreateUser } from "./components/Pages/Users"

export const lowDisplaySize = '400px'
export const BROWSE_ROUTER = createBrowserRouter([
    {
        path: '/',
        element: <AppFrame><Home/></AppFrame>,
        errorElement: <NotFoundPage/>
    },
    {
        path: '/client',
        element: <AppFrame><AllClients/></AppFrame>,
        errorElement: <NotFoundPage/>
    },
    {
        path: '/client/create',
        element: <AppFrame><CreateClient/></AppFrame>,
        errorElement: <NotFoundPage/>
    },
    {
        path: '/product',
        element: <AppFrame><AllProducts/></AppFrame>,
        errorElement: <NotFoundPage/>
    },
    {
        path: '/product/create',
        element: <AppFrame><CreateProduct/></AppFrame>,
        errorElement: <NotFoundPage/>
    },
    {
        path: '/sale',
        element: <AppFrame><AllSales/></AppFrame>,
        errorElement: <NotFoundPage/>
    },
    {
        path: '/sale/create',
        element: <AppFrame><CreateSale/></AppFrame>,
        errorElement: <NotFoundPage/>
    },
    {
        path: '/enterprise',
        element: <AppFrame><AllEnterprises/></AppFrame>,
        errorElement: <NotFoundPage/>
    },
    {
        path: '/enterprise/create',
        element: <AppFrame><CreateEnterprise/></AppFrame>,
        errorElement: <NotFoundPage/>
    },
    {
        path: '/sell-proposal',
        element: <AppFrame><AllSellProposals/></AppFrame>,
        errorElement: <NotFoundPage/>
    },
    {
        path: '/sell-proposal/create',
        element: <AppFrame><CreateSellProposal/></AppFrame>,
        errorElement: <NotFoundPage/>
    },
    {
        path: '/user',
        element: <AppFrame><AllUsers/></AppFrame>,
        errorElement: <NotFoundPage/>
    },
    {
        path: '/user/create',
        element: <AppFrame><CreateUser/></AppFrame>,
        errorElement: <NotFoundPage/>
    },
    {
        path: '/modules',
        element: <AppFrame><Modules/></AppFrame>,
        errorElement: <NotFoundPage/>
    },
    {
        path: '/configuration',
        element: <AppFrame><Configurations/></AppFrame>,
        errorElement: <NotFoundPage/>
    },
])