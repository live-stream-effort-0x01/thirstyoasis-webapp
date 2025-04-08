
import { ActionButtonProps } from "./types/types";
import renderModalSwitch from "./utils/renderModalSwitch";


export default function ActionButton(
    {content: text, classes, onClickFunction, modalKey}: ActionButtonProps
) {

    return (
    <>
        <li className={classes} 
                onClick={()=>onClickFunction()}>
            {text}
        </li>

        {renderModalSwitch(modalKey)}
    </>
    )

}