
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Pages/Header'
import Home from './Pages/Home'
import Footer from './Pages/Footer'
import History from './Pages/History'
import DiatPlan from './Pages/DiatPlan'
import WorkOut from './Pages/WorkOut'


function App() {


  return (
    <>
<Header/>

<Routes>
  <Route element={<Home/>} path='/'/>
  <Route element={<History/>} path='/history'/>
  <Route element={<DiatPlan/>} path='/Diatplan'/>
  <Route element={<WorkOut/>} path='/Workouts'/>
  
</Routes>

<Footer/>
    
    </>
  )
}

export default App
