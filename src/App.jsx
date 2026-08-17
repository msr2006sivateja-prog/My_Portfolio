import { useState, useEffect } from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Contact from './pages/contact'
import ProjectDetail from './pages/projectDetail'
import NotFound from './pages/notFound'
import { Routes, Route } from 'react-router-dom'
function App() {

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    if(savedTheme === 'light') {
      return false
    }
    return true
  })

  useEffect(() => {
    localStorage.setItem(
      'theme',
      darkMode ? 'dark' : 'light'
    )
  },[darkMode])
  return (
    <div className = {darkMode ? 'dark-theme' : 'light-theme'}>
      <Navbar darkMode = {darkMode} setDarkMode = {setDarkMode}/>

      <Routes>
        <Route path = "/Home" element = {<Home />} />
        <Route path = "/About" element = {<About />} />
        <Route path = "/Projects" element = {<Projects />} />
        <Route path = "/projects/:projectId" element = {<ProjectDetail />} />
        <Route path = "/Contact" element = {<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App