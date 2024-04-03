import './navbar.css'
import { useEffect } from 'react'
import { HAMBURGER_LOGO_URL } from './constant'
import { NimOdooLogo } from '../../NimOdooLogo/nimOdooLogo'
import { UserButton } from './UserButton/userButton'
import { handleLateralBarPosition, setAppName, closeUserInfo } from '../../../redux/Slices/AppSlice'
import { useSelector, useDispatch } from 'react-redux'
import { UserInfo } from './UserButton/UserInfo/userInfo'

export function Navbar () {

    const appName = useSelector((state) => state.AppGlobals.UI.appName)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setAppName("Home"))
    }, [])

    const handleOnCLickHamburger = () => {
        dispatch(handleLateralBarPosition())
        dispatch(closeUserInfo())
    }
    return (
        <>
            <div className='nav-container'>
                <table className='nav-distributionTable'>
                    <tbody>
                        <tr className='nav-distributionTableTr'>
                            <td className='nav-Hamburger' onClick={handleOnCLickHamburger}><img src={HAMBURGER_LOGO_URL} className='nav-Hamburger-img'/></td>
                            <td className='nav-tdLogo'><NimOdooLogo/></td>
                            <td className='nav-tdTitleName'>{appName}</td>
                            <td><UserButton/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <UserInfo/>
        </>
    )
}