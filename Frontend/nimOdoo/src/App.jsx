import { useState } from "react"
import { AppFrame } from "./components/AppFrame/appFrame"
import { NotFoundPage } from "./components/NotFoundPage/notFoundPage"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { UserAccess } from "./components/UserAccess/userAccess"
import { useQuery } from "@apollo/client";
import { getAllUsers } from "./apollo/apolloQueries"

export function App () {

    const {loading, error, data} = useQuery(getAllUsers)
    if (loading == false) console.log(data)

    const [isLogged, setIsLogged] = useState(false)
    const [user, setUser] = useState({})

    const ROUTER = createBrowserRouter([
        {
            path: '/',
            element: <>Hola que tal?</>,
            errorElement: <NotFoundPage/>
        },
    ])

    if (isLogged == false) return (<UserAccess setIsLogged={setIsLogged} setUser={setUser}/>)
    return (
        <AppFrame>
            <RouterProvider router={ROUTER}>

            </RouterProvider>
        </AppFrame>
    )
}