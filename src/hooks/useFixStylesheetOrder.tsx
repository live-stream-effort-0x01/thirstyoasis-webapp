import { useEffect } from "react";

export default function useFixStylesheetOrder(){
    useEffect(()=>{
        
        document.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
            document.head.appendChild(link); // Moves links to the end of <head>
        });

    }, [])
}