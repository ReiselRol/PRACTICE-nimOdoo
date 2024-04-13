import { createBrowserRouter } from "react-router-dom"
import { Home } from "./components/Pages/Home/home"
import { AllClients, CreateClient, ShowClient, EditClient } from "./components/Pages/Clients"
import { AllProducts, CreateProduct, EditProduct, ShowProduct } from "./components/Pages/Products"
import { AllSales, CreateSale, EditSale, ShowSale } from "./components/Pages/Sales"
import { AllEnterprises, CreateEnterprise, ShowEnterprise, EditEnterprise } from "./components/Pages/Enterprises"
import { AllSellProposals, CreateSellProposal, ShowSellProposal, EditSellProposal } from "./components/Pages/SellProposals"
import { AppFrame } from "./components/AppFrame/appFrame"
import { NotFoundPage } from "./components/Pages/NotFoundPage/notFoundPage"
import { Modules } from "./components/Pages/Modules/modules"
import { Configurations } from "./components/Pages/Configurations"
import { AllUsers, CreateUser, EditUser, ShowUser } from "./components/Pages/Users"

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
        path: '/client/:id/edit/',
        element: <AppFrame><EditClient/></AppFrame>,
        errorElement: <NotFoundPage/>
    },
    {
        path: '/client/:id/show/',
        element: <AppFrame><ShowClient/></AppFrame>,
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
        path: '/product/:id/edit/',
        element: <AppFrame><EditProduct/></AppFrame>,
        errorElement: <NotFoundPage/>
    },
    {
        path: '/product/:id/show/',
        element: <AppFrame><ShowProduct/></AppFrame>,
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
        path: '/sale/:id/edit/',
        element: <AppFrame><EditSale/></AppFrame>,
        errorElement: <NotFoundPage/>
    },
    {
        path: '/sale/:id/show/',
        element: <AppFrame><ShowSale/></AppFrame>,
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
        path: '/enterprise/:id/edit/',
        element: <AppFrame><EditEnterprise/></AppFrame>,
        errorElement: <NotFoundPage/>
    },
    {
        path: '/enterprise/:id/show/',
        element: <AppFrame><ShowEnterprise/></AppFrame>,
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
        path: '/sell-proposal/:id/edit/',
        element: <AppFrame><EditSellProposal/></AppFrame>,
        errorElement: <NotFoundPage/>
    },
    {
        path: '/sell-proposal/:id/show/',
        element: <AppFrame><ShowSellProposal/></AppFrame>,
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
        path: '/user/:id/edit/',
        element: <AppFrame><EditUser/></AppFrame>,
        errorElement: <NotFoundPage/>
    },
    {
        path: '/user/:id/show/',
        element: <AppFrame><ShowUser/></AppFrame>,
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