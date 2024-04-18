import { RouterProvider } from "react-router-dom"
import { UserAccess } from "./components/UserAccess/userAccess"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setIsLoged, handleLogin, setAllModules } from "./redux/Slices/AppSlice"
import { prepareURLModules } from "./App.helper"
import { PageLoading } from "./components/Pages/PageElements"
import { useMutation } from '@apollo/client'
import { useQuery } from "@apollo/client"
import * as Queries from "./apollo/apolloQueries"

export function App () {

    const isLogged = useSelector((state) => state.AppGlobals.UI.isLogged)
    const [logger] = useMutation(Queries.addLog)
    const modulesConfig = useSelector((state) => state.AppGlobals.Modules.Actived)
    const user = useSelector((state) => state.AppGlobals.User)
    const userJSON = localStorage.getItem('user');
    const { loading, error, data, refetch } = useQuery(Queries.getAllUsers)
    const { loading: isConfigLoading, error: isError, data: configData, refetch: refetchConfig } = useQuery(Queries.getConfig)
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()

    console.log(configData)
    
    useEffect(() => {
        if (userJSON != null) setIsLoading(true)
    }, [])

    useEffect(() => {
        if (isConfigLoading == false ) {
            if (configData.getConfig.length > 0) {
                dispatch(setAllModules(configData.getConfig[0].modules))
            }
        }
    }, [isConfigLoading])

    useEffect(() => {
        if (userJSON != null) {
            if (data != undefined) {
                for (var i = 0; i < data.getUsers.length; i++) {
                    if (data.getUsers[i].ID == userJSON) {
                        dispatch(handleLogin(data.getUsers[i]))
                        dispatch(setIsLoged(true))
                        logger({
                            variables: {
                                userName: "System",
                                userId: " ",
                                message: "The user with email " + data.getUsers[i].email + " has logged successfully!" 
                            }
                        })
                        break
                    }
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