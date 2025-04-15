import { useEffect } from "react";

export default function useScrollToTop(){
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])

    window.addEventListener("beforeunload", ()=>{
        window.scrollTo(0,0)
    })
}