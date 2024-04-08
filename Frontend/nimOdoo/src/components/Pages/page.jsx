import './page.css';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setAppName } from '../../redux/Slices/AppSlice';

export function Page ({children, Name}) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setAppName(Name))
    }, [])

    return (
        <div className='page-class'>{children}</div>
    )
}