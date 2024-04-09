import { useSelector } from 'react-redux'
import './dinamicLateralBar.css'

export function DinamicLateralBar({children}) {
    const isVisible = useSelector((state) => state.AppGlobals.UI.isOpened)
    return (
        <>
            <div className={'dlb-position ' + ( isVisible == true ? 'dlb-containerActived' : 'dlb-containerUnactived')}>
                {children}
            </div>
            <div className={'dlb-container ' + ( isVisible == true ? 'dlb-containerActived' : 'dlb-containerUnactived')}/>
            <div className={'dlb-allBlacker' + ( isVisible == true ? 'dlb-allBlackerActived' : 'dlb-allBlackerUnctived')}/>
        </>
    )
}