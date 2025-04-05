import closeOverlay from "./utils/closeOverlay"

export default function AgreementOverlay(){

    return (
        <div id="age-verification-overlay" className="overlay">
            <div className="overlay-content">
                <h2>Are you 18+?</h2>
                <p>You must be 18 years old and agree to our Terms and Conditions before continuing.</p>
                <button onClick={()=>closeOverlay()} className="button__agree">I agree</button>
                <button onClick={()=>{window.location.href='https://www.google.com'}} className="button__disagree">I am not over
                    18</button>
        </div>
    </div>
    )
}