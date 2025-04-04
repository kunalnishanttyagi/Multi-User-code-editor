"use client"
import React, { useEffect, useState } from 'react'
// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
import { type Metadata } from 'next'

// import { Geist, Geist_Mono } from 'next/font/google'
// import './globals.css'

import {
  ClerkProvider,
  SignIn,
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from '@clerk/nextjs'
import Link from 'next/link';
const Navbar = () => {
  const user = useUser();
  useEffect(()=>{
    if(user){
      // console.log("trying", user);
    }
  },[user])
  return (
    <div className=' flex justify-between ml-[60px] mr-[40px] '>
      <div className=' text-[50px] mt-[20px] text-white ' >
        FelixN
      </div>
      <div className=' flex gap-[30px] mt-[0px] text-gray-300 ' >
        <div className='mt-[35px]' >Pricing</div>
        {/* <div>Signin</div> */}
        {/* <SignInButton>Signin</SignInButton> */}
        {/* <div>Signup</div> */}
        {
          (user.isSignedIn)?(
            <SignOutButton>SignOut</SignOutButton>
          ):(
            <div className=' flex gap-[30px] mt-[35px]'>
              <Link href="/signin" >Signin</Link>
              
              <Link href="/signup" >Signup</Link>
            </div>
            
          )
        }
        {/* <SignUpButton></SignUpButton> */}
      </div>
    </div>
  )
}

export default Navbar
