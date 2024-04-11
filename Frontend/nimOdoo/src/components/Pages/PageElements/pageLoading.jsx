import ClipLoader from 'react-spinners/CircleLoader';
import './pageLoading.css'

export default function PageLoading () {
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };
    return <div className='the-loader'><ClipLoader color="#0000ff" cssOverride={override} loading={true} size={300} aria-label="Loading Spinner" data-testid="loader"/><br/>Loading...</div>
}