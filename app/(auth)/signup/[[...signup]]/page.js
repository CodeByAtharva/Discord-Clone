import React from 'react'
import { SignUp } from '@clerk/nextjs'

const signup = () => {
  return <SignUp path="/signup" routing="path" signInUrl="/signin" afterSignUpUrl="/" />
}

export default signup