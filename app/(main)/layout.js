import React from 'react'

const MainLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10">
        <div className='container mx-auto mt-24 mb-20'>{children}</div>
      </div>
    </div>
  )
}

export default MainLayout