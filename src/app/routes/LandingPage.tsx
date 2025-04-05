import useFixStylesheetOrder from "../../hooks/useFixStylesheetOrder"
import Header from "../../features/Header/Header";


export default function LandingPage ({isAuth}:AuthProps) {

    document.title = (isAuth)? "ThirstyOasis":"Welcome"

    useFixStylesheetOrder();


    return (
        <div className="container">
            <Header isAuth={isAuth}/>
           
        </div>
    )
}