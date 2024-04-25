import { Page } from "../page"
import { PageLoading, PageShowElement } from "../PageElements";
import { useQuery, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import * as Queries from "../../../apollo/apolloQueries"
import { SALES_INFO_CONFIG_CREATE } from "./constants";
import Select from 'react-select';
import './sales.css'

export default function CreateSellProposal ({}) {

    const states = ["Confirmed", "Pending", "Cancelled"]
    const { loading: lc, error: ec, data: dc, refetch: rc } = useQuery(Queries.getAllClients)
    const { loading: lp, error: ep, data: dp, refetch: rp } = useQuery(Queries.getAllProducts)
    const [editer] = useMutation(Queries.addSalesProposal)
    
    const [products, setProducts] = useState([])
    const [productOption, setProductOption] = useState([]) 
    const [selectedOption, setSelectedOption] = useState([])

    const [proposerOptions, setProposerOptions] = useState([])
    const [proposerID, setProposerID] = useState(null)
    const [state, setState] = useState(states[1])

    const changeValueCuantity = (index, e) => {
        var prodi =  [...selectedOption]
        if (prodi[index].stock >= e.target.value ) prodi[index].cuantity = e.target.value
        setProductOption(prodi)
    }
    const getState = (sd) => {
        if (sd == states[0]) return 0
        if (sd == states[1]) return 1
        if (sd == states[2]) return 2
    }
    const editStates = [];
    const getPr = (prd) => {
        for (var i = 0; i < products.length; i++) {
            if (dp.getProducts[i].ID == prd.value) return {
                name : dp.getProducts[i].name,
                ID : dp.getProducts[i].ID,
                stock : dp.getProducts[i].stock,
                cuantity : 1
            }
        }
    }
    const addProduct = (toAdd) => {
        const formtedToAdd = getPr(toAdd);
        const newProds = [...selectedOption]
        newProds.push(formtedToAdd)
        setSelectedOption(newProds)
        console.log(selectedOption)
    }

    const getProdArray = (arry) => {
        console.log(arry)
        var arrys = [];
        for (var i = 0; i < arry.length; i++) {
            arrys.push(arry[i].ID)
        }
        console.log(arrys)
        return arrys
    }
    useEffect(() => {
        if (lc == false) {
            var newProposerOptions = []
            for (var i = 0; i < dc.getClients.length; i++) {
                newProposerOptions.push({value : dc.getClients[i].ID, label: dc.getClients[i].name})
            }
            setProposerOptions(newProposerOptions)
        }
    },[lc])

    useEffect(() => { 
        if (lp == false){
            var newProposerOptions = []
            for (var i = 0; i < dp.getProducts.length; i++) {
                newProposerOptions.push({value : dp.getProducts[i].ID, label: dp.getProducts[i].name})
            }
            setProducts(newProposerOptions)
        }
    }, [lp])

    const edit = () => {
        if (products.length == 0) return false
        else {
            editer({
                variables: {
                    proposerId : proposerID.value,
                    clientId : proposerID.value,
                    productIDs : getProdArray(selectedOption),
                    state : getState(state)
                }
            })
        }
        return true
    }

    if (lc || lp) return <PageLoading/>
    return (
        <Page Name={"Create a Sell Proposal"}>
            <PageShowElement
                options={SALES_INFO_CONFIG_CREATE}
                info={undefined}
                elementType={"Create a Sell Proposal"}
                editLink={"/sell-proposal/"}
                create={true}
                editCallback={edit}
                editStates={editStates}
                ClassNAme="jpoderr"
            >
                <tr>
                    <td>State</td>
                    <td className="rfleddgf">
                        <select className='info-selector' value={state} onChange={setState}>
                            <option value={states[0]}>{states[0]}</option>
                            <option value={states[1]}>{states[1]}</option>
                            <option value={states[2]}>{states[2]}</option>
                        </select>
                    </td>
                </tr>
                <tr className="ingoreOverflow">
                        <td>Client</td>
                        <td className="ingoreOverflow"><Select
                            defaultValue={proposerOptions}
                            onChange={setProposerID}
                            options={proposerOptions}
                            className="selectitor"
                            autoFocus={false}
                        /></td>
                </tr>
                <tr className="ingoreOverflow">
                        <td>Products</td>
                        <td className="ingoreOverflow"><Select
                            defaultValue={productOption}
                            onChange={addProduct}
                            options={products}
                            className="selectitor"
                            autoFocus={false}
                        /></td>
                </tr>
                {
                    (selectedOption.length > 0) &&
                    <tr><td colSpan={2}>
                    <table>
                        <tbody>
                        {
                            selectedOption.map((eachInfo, firtsIndex) =>(
                            <tr>
                                <td key={'s' + firtsIndex}>{eachInfo.name}</td>
                                <td key={'sa' + firtsIndex}><input type="number" value={eachInfo.cuantity} onChange={(e) => {changeValueCuantity(firtsIndex, e)}}/></td>
                                <td key={'sal' + firtsIndex}>{eachInfo.stock}</td>
                            </tr>
                            ))
                        }
                        </tbody>
                    </table></td></tr>
                }
            </PageShowElement>
        </Page>
    )
}