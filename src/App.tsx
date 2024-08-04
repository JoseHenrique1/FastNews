import { useEffect } from "react"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { Main } from "./components/main"
import { Navbar } from "./components/navbar"
import { LinkProvider } from "./contexts/link-context"
import { NewsProvider } from "./contexts/news-context"

function App() {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme && (theme === "light" || theme === "dark")) {
      document.body.classList.add(theme);
    }
  }, [])
  return (
    <LinkProvider>
      <NewsProvider>
        <div>
          <Header />
          <Navbar />
          <Main />
          <Footer />
        </div>
      </NewsProvider>
    </LinkProvider>

  )
}

export default App
