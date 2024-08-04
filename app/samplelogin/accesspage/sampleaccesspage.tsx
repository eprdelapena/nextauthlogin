"use client"

import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

const page = () => {
    const {data: session} = useSession();
    console.log("this is the session: ", session);


  return (
    <>
          <div>Welcome to the dashboard page</div>
      <p> Hello <span>{session?.token}</span></p>
      <p> Hello <span>{session?.userId}</span></p>
      <p> Hello <span>{session?.nick}</span></p>
      <p> Hello <span>{session?.point}</span></p>
      <p> Hello <span>{session?.balance}</span></p>
      <p> Hello <span>{session?.exp}</span></p>
      <button onClick={() => signOut()}> Sign-out </button>

    </>
  )
}

export default page