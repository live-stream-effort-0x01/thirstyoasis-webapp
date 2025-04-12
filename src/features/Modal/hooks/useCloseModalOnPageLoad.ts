import { useEffect } from "react";

export default function useCloseModalOnPageLoad(
    setModalKey: React.Dispatch<React.SetStateAction<ModalKey | null>>
){
    useEffect(()=>{
        setModalKey(null)
    }, [])
}