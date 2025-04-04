"use client"
import { SignUp, useUser } from '@clerk/nextjs'
import React, { useEffect } from 'react'
// import { auth, currentUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation';
export default function page ()  {
  const {user, isSignedIn } = useUser();
  const router = useRouter();
  // console.log(user);
  // const { userId } = await auth();
  

  

  if(!user) return (
    <div className='flex justify-center items-center h-screen' >
      <SignUp afterSignUpUrl="localhost:3000/user" />
    </div>
  )
  else{
    router.push('/user');
  }
  

}

// export default page
