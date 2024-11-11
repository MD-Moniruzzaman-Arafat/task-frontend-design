
import './App.css'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import bannerBg from "./assets/bg-bannar.png"

function App() {

  return (
    <>
      <div className='bg-[#BD1F17] h-full w-full' style={{ backgroundImage: `url(${bannerBg})` }}>
        <Navbar />
        <Banner />
      </div>
    </>
  )
}

export default App
