import Navbar from "./Navbar"
import Footer from "./Footer"

const Layouts = ({ children }) => {
  return (
    <div className="layouts_container">
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layouts