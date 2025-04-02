import { Route, Routes } from 'react-router'
import Test from './routes/test_migration/Test'

//renamed from App.tsx to Router.tsx
export default function Router() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Test />} />
        {/* <Route path="/" element={<Home />} /> */}

            {/* <Route path="/messages" element={<Messages />}>
            <Route path=":id" element={<Chats />} /> */}
        {/* </Route> */}
        {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
    </>
  )
}

