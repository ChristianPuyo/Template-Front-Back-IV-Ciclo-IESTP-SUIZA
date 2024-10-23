import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeComponent from './components/homeComponent/HomeComponent'
import StudentForm from './components/studentForm/StudentForm'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeComponent/>} />
          <Route path='/studentform' element={<StudentForm/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
