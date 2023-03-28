import React from 'react'
import dynamic from "next/dynamic"

const NavigationBar = dynamic(() => import('@/components/NavigationBar'), {
  ssr: false
})

const Index = () => {
  return (
    <div>
        <NavigationBar/>
    </div>
  )
}

export default Index