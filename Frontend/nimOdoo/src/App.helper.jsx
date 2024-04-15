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
import { AllUsers, CreateUser, EditUser, ShowUser, ShowLogs } from "./components/Pages/Users"

export const prepareURLModules = (modulesConfig, admin) => {
    var allURL = [
        {
            path: '/',
            element: <AppFrame><Home/></AppFrame>,
            errorElement: <NotFoundPage/>
        },
        {
            path: '/configuration',
            element: <AppFrame><Configurations/></AppFrame>,
            errorElement: <NotFoundPage/>
        },
        {
            path: '/modules',
            element: <AppFrame><Modules/></AppFrame>,
            errorElement: <NotFoundPage/>
        },
    ]
    for (var module = 0; module < modulesConfig.length; module++) {
        if (modulesConfig[module] == "client") {
            allURL.push({
                path: '/client',
                element: <AppFrame><AllClients/></AppFrame>,
                errorElement: <NotFoundPage/>
            })
            if (admin == true) allURL.push({
                path: '/client/:id/edit/',
                element: <AppFrame><EditClient/></AppFrame>,
                errorElement: <NotFoundPage/>
            })
            allURL.push({
                path: '/client/:id/show/',
                element: <AppFrame><ShowClient/></AppFrame>,
                errorElement: <NotFoundPage/>
            })
            allURL.push({
                path: '/client/create',
                element: <AppFrame><CreateClient/></AppFrame>,
                errorElement: <NotFoundPage/>
            })
        } else if (modulesConfig[module] == "product") {
            allURL.push({
                path: '/product',
                element: <AppFrame><AllProducts/></AppFrame>,
                errorElement: <NotFoundPage/>
            })
            allURL.push({
                path: '/product/create',
                element: <AppFrame><CreateProduct/></AppFrame>,
                errorElement: <NotFoundPage/>
            })
            if (admin == true) allURL.push({
                path: '/product/:id/edit/',
                element: <AppFrame><EditProduct/></AppFrame>,
                errorElement: <NotFoundPage/>
            })
            allURL.push({
                path: '/product/:id/show/',
                element: <AppFrame><ShowProduct/></AppFrame>,
                errorElement: <NotFoundPage/>
            })
        } else if (modulesConfig[module] == "sale") {
            allURL.push({
                path: '/sale',
                element: <AppFrame><AllSales/></AppFrame>,
                errorElement: <NotFoundPage/>
            })
            allURL.push({
                path: '/sale/create',
                element: <AppFrame><CreateSale/></AppFrame>,
                errorElement: <NotFoundPage/>
            })
            if (admin == true) allURL.push({
                path: '/sale/:id/edit/',
                element: <AppFrame><EditSale/></AppFrame>,
                errorElement: <NotFoundPage/>
            })
            allURL.push({
                path: '/sale/:id/show/',
                element: <AppFrame><ShowSale/></AppFrame>,
                errorElement: <NotFoundPage/>
            })
        } else if (modulesConfig[module] == "enterprise") {
            allURL.push({
                path: '/enterprise',
                element: <AppFrame><AllEnterprises/></AppFrame>,
                errorElement: <NotFoundPage/>
            })
            allURL.push({
                path: '/enterprise/create',
                element: <AppFrame><CreateEnterprise/></AppFrame>,
                errorElement: <NotFoundPage/>
            })
            if (admin == true) allURL.push({
                path: '/enterprise/:id/edit/',
                element: <AppFrame><EditEnterprise/></AppFrame>,
                errorElement: <NotFoundPage/>
            })
            allURL.push({
                path: '/enterprise/:id/show/',
                element: <AppFrame><ShowEnterprise/></AppFrame>,
                errorElement: <NotFoundPage/>
            })
        } else if (modulesConfig[module] == "sell-proposal") {
            allURL.push({
                path: '/sell-proposal',
                element: <AppFrame><AllSellProposals/></AppFrame>,
                errorElement: <NotFoundPage/>
            })
            allURL.push({
                path: '/sell-proposal/create',
                element: <AppFrame><CreateSellProposal/></AppFrame>,
                errorElement: <NotFoundPage/>
            })
            if (admin == true) allURL.push({
                path: '/sell-proposal/:id/edit/',
                element: <AppFrame><EditSellProposal/></AppFrame>,
                errorElement: <NotFoundPage/>
            })
            allURL.push({
                path: '/sell-proposal/:id/show/',
                element: <AppFrame><ShowSellProposal/></AppFrame>,
                errorElement: <NotFoundPage/>
            })
        } else if (admin == true) {
            allURL.push({
                path: '/user',
                element: <AppFrame><AllUsers/></AppFrame>,
                errorElement: <NotFoundPage/>
            })
            allURL.push({
                path: '/user/create',
                element: <AppFrame><CreateUser/></AppFrame>,
                errorElement: <NotFoundPage/>
            })
            allURL.push({
                path: '/user/:id/edit/',
                element: <AppFrame><EditUser/></AppFrame>,
                errorElement: <NotFoundPage/>
            })
            allURL.push({
                path: '/user/:id/show/',
                element: <AppFrame><ShowUser/></AppFrame>,
                errorElement: <NotFoundPage/>
            })
            allURL.push({
                path: '/logs',
                element: <AppFrame><ShowLogs/></AppFrame>,
                errorElement: <NotFoundPage/>
            })
        }
    }
    return createBrowserRouter(allURL)
} 