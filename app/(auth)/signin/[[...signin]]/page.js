import React from 'react'
import { SignIn } from '@clerk/nextjs'

export const LoginPage = () => {
  return <SignIn path="/signin" routing="path" signUpUrl="/signup" afterSignInUrl="/" />
}

export default LoginPage