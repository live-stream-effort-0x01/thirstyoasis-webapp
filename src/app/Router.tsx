import { Navigate, Route, Routes } from 'react-router'
import Test from './routes/test_migration/Test'
import LandingPage from './routes/LandingPage'
import StreamPage from './routes/StreamPage'
import NotFoundPage from './routes/NotFoundPage'
import { useState } from 'react'

import "../styles/globals.css"

//renamed from App.tsx to Router.tsx
export default function Router() {

    const [isAuth, setIsAuth] = useState<boolean>(false);//this can be moved to a context or state library
    const [credits, setCredits] = useState<number>(5600);//this can be moved to a context or state library

    console.log("credits",credits)

    return (
    <>
    <Routes>
        <Route path="/test" element={<Test />} />
        
        <Route path="/" element={<LandingPage isAuth={isAuth} credits={credits}/>} />
        
        <Route  path="/stream" 
                element={isAuth? 
                    <StreamPage isAuth={isAuth} credits={credits}/> 
                    : 
                    <Navigate to="/" replace/>} 
        />

        <Route path="/404" element={<NotFoundPage />} />

    </Routes>
    </>
    )
}

