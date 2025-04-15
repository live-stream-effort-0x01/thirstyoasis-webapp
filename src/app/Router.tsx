import { Navigate, Route, Routes } from 'react-router'
import LandingPage from './routes/LandingPage'
import StreamPage from './routes/StreamPage'
import NotFoundPage from './routes/NotFoundPage'
import ProfilePage from './routes/ProfilePage'
import { useState } from 'react'

import "../styles/unified.css"


//renamed from App.tsx to Router.tsx
export default function Router() {

    //this can be moved to a context or state library
    const [isAuth, setIsAuth] = useState<boolean>(true);
    // const [credits, setCredits] = useState<number>(5600);
    const [credits] = useState<number>(5600);
    const [modalKey, setModalKey] = useState<ModalKey|null>(null);

  return (
    <>
    <Routes>       
        <Route path="/" 
            element={<LandingPage isAuth={isAuth} setIsAuth={setIsAuth} credits={credits} modalKey={modalKey} setModalKey={setModalKey}/>} 
        />
        
        <Route  path="/stream" 
                element={isAuth? 
                    <StreamPage isAuth={isAuth} setIsAuth={setIsAuth} credits={credits} modalKey={modalKey} setModalKey={setModalKey}/> 
                    : 
                    <Navigate to="/" replace/>} 
        />

        <Route path="/profile" 
               element={isAuth ? 
                <ProfilePage isAuth={isAuth} setIsAuth={setIsAuth} credits={credits} modalKey={modalKey} setModalKey={setModalKey} /> 
                : 
                <Navigate to="/" replace />} />

        <Route path="/404" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}
