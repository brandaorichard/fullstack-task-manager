import { Box } from "@chakra-ui/react"
import './App.css'
import { Route, Routes } from "react-router-dom"
import CreateTask from './pages/CreateTask'
import Home from "./pages/Home"
import NavBar from "./components/NavBar"

function App() {

  return (
    <Box minH={"100vh"}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateTask />} />
      </Routes>
    </Box>
  )
}

export default App
