import React from 'react'

const MainLayout = ({ children }) => {
  return (
//Redirect user after login to the onboarding page

    <div className='container mx-auto mt-24 mb-20'>{children}</div>
  )
}

export default MainLayout