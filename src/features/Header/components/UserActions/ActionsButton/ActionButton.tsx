import renderModalSwitch from "./utils/renderModalSwitch";


export default function ActionButton(
    {text, classes, onClickFunction, modalKey}: ActionButtonProps
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