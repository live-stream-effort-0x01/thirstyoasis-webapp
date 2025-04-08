import { ReactNode } from "react";


export type ActionButtonProps = {
    content: string | ReactNode,
    classes: string,
    onClickFunction: Function,
    modalKey: ModalKey };


export type ButtonTypeKey = "PRIMARY" | "SECONDARY";
