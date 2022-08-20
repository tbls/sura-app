
import { Navigate, Route, Routes } from 'react-router-dom'
import { StationsPage } from '../pages/StationsPage'

export const StationsRouter = () => {
   return (
      <Routes>
         <Route path="/" element={ <StationsPage /> } />
         <Route path="/*" element={ <Navigate to="/stations" /> } />
      </Routes>
   )
}
