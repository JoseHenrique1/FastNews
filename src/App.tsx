import { useEffect } from "react"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { Main } from "./components/main"
import { Navbar } from "./components/navbar"

function App() {
  useEffect(()=>{
    const theme = localStorage.getItem("theme");
    if(theme && (theme === "light" || theme === "dark")) {
      document.body.classList.add(theme);
    }
  },[])
  return (
    <div>
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}

export default App
