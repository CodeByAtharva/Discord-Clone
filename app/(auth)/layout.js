import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div className='h-screen w-screen flex justify-center align-center bg-[#f6f6f6]'>
    <div className='px-8 py-8 flex flex-col justify-center align-center'>{children}</div>
    </div>
  )
}

export default AuthLayout