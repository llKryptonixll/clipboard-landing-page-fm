import Header from "./components/header/Header"
import ClipboardManagement from "./components/ClipboardManagement/ClipboardManagement"
import ClipboardAccess from "./components/ClipboardAccess/ClipBoardAccess"
import Workflow from "./components/Workflow/Workflow"
import ClipboardMobile from "./components/ClipboardMobile/ClipboardMobile"
import Footer from "./components/Footer/Footer"
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main className='font-bai_jamjuree text-base_font_size'>
        <ClipboardManagement />
        <ClipboardAccess />
        <Workflow />
        <ClipboardMobile />
      </main>
      <Footer />
    </>
  )
}

export default App
