import { Container } from "./components/Container"
import { Footer } from "./layout/footer/Footer"
import { Header } from "./layout/header/Header"
import { Mail } from "./layout/sections/mail/Mail"
import { Main } from "./layout/sections/main/Main"
import { Projects } from "./layout/sections/projects/Projects"
import { Stack } from "./layout/sections/stack/Stack"

function App() {
  return (
    <Container>
     <Header/>
     <Main/>
     <Stack/>
     <Projects/>
     <Mail/>
     <Footer/>
    </Container>
  )
}

export default App
