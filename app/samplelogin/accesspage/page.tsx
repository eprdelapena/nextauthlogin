"use client"

import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

const page = () => {
    const {data: session} = useSession();
    console.log("this is the session: ", session);
  
  return (
    <>
          <div>Welcome to the dashboard page</div>
      <p> Hello <span>{session?.userEmail}</span></p>
      <p> Hello <span>{session?.userPassword}</span></p>
      <button onClick={() => signOut()}> Sign-out </button>

    </>
  )
}

export default page