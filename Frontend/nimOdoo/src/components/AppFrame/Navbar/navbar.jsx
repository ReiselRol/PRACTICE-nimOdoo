import './navbar.css'
import { HAMBURGER_LOGO_URL } from './constant'
import { NimOdooLogo } from './NimOdooLogo/nimOdooLogo'

export function Navbar ({SetIsHamburgerOpened, IsHamburgerOpened}) {
    const changeHamburgerVisibility = () => {
        SetIsHamburgerOpened(!IsHamburgerOpened)
    }
    return (
        <div className='nav-container' onClick={changeHamburgerVisibility}>
            <table className='nav-distributionTable'>
                <tr className='nav-distributionTableTr'>
                    <td className=''><img src='HAMBURGER_LOGO_URL' className=''/></td>
                    <td className='nav-tdLogo'><NimOdooLogo/></td>
                </tr>
            </table>
        </div>
    )
}