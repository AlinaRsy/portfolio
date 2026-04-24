import { Footer } from "./layout/footer/Footer"
import { Header } from "./layout/header/Header"
import { Mail } from "./layout/sections/mail/Mail"
import { Main } from "./layout/sections/main/Main"
import { Projects } from "./layout/sections/projects/Projects"
import { Stack } from "./layout/sections/stack/Stack"

function App() {
  return (
    <>
     <Header/>
     <Main/>
     <Stack/>
     <Projects/>
     <Mail/>
     <Footer/>
     <p>
        <span>
          Hello
        </span>
        <a href="">Link</a>
     </p>
    </>
  )
}

export default App
