import { Page } from "../page"
import { Module } from "./Module/module"
import { useSelector } from "react-redux"
import "./modules.css"

export const Modules = ({}) => {
    
    const allModules = useSelector((state) => state.AppGlobals.Modules.Actived)

    return (
        <Page Name={"All Modules"}>
            <table className="modules-info">
                <tbody>
                    <tr>
                        <td>
                            <Module
                                name="Products"
                                configName="product"
                                baseUrl="/product"
                                imageName="ProductIcon.png"
                                isDefaultEnabled={allModules.includes('product')}
                            />
                        </td>
                        <td>
                            <Module
                                name="Clients"
                                configName="client"
                                baseUrl="/client"
                                imageName="ClientIcon.png"
                                isDefaultEnabled={allModules.includes('client')}
                            />
                        </td>
                        <td>
                            <Module
                                name="Enterprises"
                                configName="enterprise"
                                baseUrl="/enterprise"
                                imageName="EnterpriseIcon.png"
                                isDefaultEnabled={allModules.includes('enterprise')}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                                <Module
                                name="Sell proposals"
                                configName="sell-proposal"
                                baseUrl="/sell-proposal"
                                imageName="SalePropossalImg.png"
                                isDefaultEnabled={allModules.includes('sell-proposal')}
                            />
                        </td>
                        <td>
                            <Module
                                name="Sales"
                                configName="sale"
                                baseUrl="/sale"
                                imageName="SellsIcon.png"
                                isDefaultEnabled={allModules.includes('sale')}
                            />
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </Page>
    )
}