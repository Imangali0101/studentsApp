import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Students from './components/Students/Students'
import Subjects from './components/Subjects/Subjects'
import Grades from './components/Grades/Grades'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'

function App() {

  return (
    <div className='app'>
      <Sidebar />
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to='/students' />} />
        <Route path='/students' element={<Students />} />
        <Route path='/subjects' element={<Subjects />} />
        <Route path='/grades' element={<Grades />} />
      </Routes>
    </div>
  )
}

export default App;
