import './dinamicLateralBar.css'

export function DinamicLateralBar({isVisible}) {
    console.log('1')
    return (
        <>
            <div className={'dlb-allBlacker' + ( isVisible == true ? 'dlb-allBlackerActived' : 'dlb-allBlackerUnctived')}/>
            <div className={'dlb-container ' + ( isVisible == true ? 'dlb-containerActived' : 'dlb-containerUnactived')}>

            </div>
        </>
    )
}