import { RouterProvider } from "react-router-dom"
import { UserAccess } from "./components/UserAccess/userAccess"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setIsLoged, setAllModules, handleLogin } from "./redux/Slices/AppSlice"
import { prepareURLModules } from "./App.helper"
import { PageLoading } from "./components/Pages/PageElements"
import { useQuery } from "@apollo/client"
import * as Queries from "./apollo/apolloQueries"

export function App () {

    const isLogged = useSelector((state) => state.AppGlobals.UI.isLogged)
    const modulesConfig = useSelector((state) => state.AppGlobals.Modules.Actived)
    const user = useSelector((state) => state.AppGlobals.User)
    const userJSON = localStorage.getItem('user');
    const { loading, error, data, refetch } = useQuery(Queries.getAllUsers)
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        if (userJSON != null) setIsLoading(true)
    }, [])

    useEffect(() => {
        if (userJSON != null) {
            if (loading == true && error == false) {
                for (var i = 0; i < data.getUsers.length; i++) {
                    
                }
                setIsLoading(false)
            }
        } 
    }, [loading, error])

    if (isLoading == true) return <PageLoading/>
    if (isLogged == false) return  <UserAccess/>
    if (user != null) {
        const ROUTER = prepareURLModules(modulesConfig, user.admin)
        return <RouterProvider router={ROUTER}/>
    } else return <PageLoading/>
}