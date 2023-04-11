import Navbar from "./Navbar"
import Footer from "./Footer"
import dynamic from "next/dynamic"


const NavigationBarBg = dynamic(() => import('@/components/NavigationBarBg'), {
  ssr: false
})

const LayoutsBg = ({ children }) => {
  return (
    <div>
        <NavigationBarBg nav='bg-[#3E5CB8]'/>
        {children}
        <Footer/>
    </div>
  )
}

export default LayoutsBg