import Navbar from "./Navbar"
import Footer from "./Footer"
import dynamic from "next/dynamic"

const NavigationBar = dynamic(() => import('@/components/NavigationBar'), {
  ssr: false
})

const Layouts = ({ children }) => {
  return (
    <div>
        <NavigationBar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layouts