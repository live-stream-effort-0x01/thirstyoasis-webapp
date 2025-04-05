import { Route, Routes } from 'react-router'
import Test from './routes/test_migration/Test'
import LandingPage from './routes/LandingPage'
import StreamPage from './routes/StreamPage'
import NotFoundPage from './routes/NotFoundPage'
import { useState } from 'react'

import "../styles/globals.css"

//renamed from App.tsx to Router.tsx
export default function Router() {

    const [isAuth, setIsAuth] = useState<boolean>(true);//this can be moved to a context or state library

    return (
    <>
    <Routes>
        <Route path="/test" element={<Test />} />
        
        <Route path="/" element={<LandingPage isAuth={isAuth}/>} />
        
        <Route path="/stream" element={<StreamPage isAuth={isAuth}/>} />

        <Route path="/404" element={<NotFoundPage />} />

    </Routes>
    </>
    )
}

