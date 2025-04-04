"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Messages from '../../components/Messages'
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
const page = () => {
  const { user, isSignedIn } = useUser();
  const router = useRouter();
  const [isUserSaved, setIsUserSaved] = useState(false);
  async function savetobackend() {
    console.log(user);
    console.log(
      user?.id,user?.username,user?.firstName,user?.lastName,user?.emailAddresses[0].emailAddress,user?.createdAt
    )

    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
  
      const data = await response.json();
      console.log("Server Response:", data,data.firstname);
      if (response.status === 201 || response.status === 200) {
        localStorage.setItem("isUserSaved", "true"); // Prevent future duplicate calls
        setIsUserSaved(true);
        router.push("/user");
      }
      // localStorage.setItem("isUserSaved", "true"); // Prevent future duplicate calls
      //   setIsUserSaved(true);
      // router.push('/user')
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }
  useEffect(() => {
    // co
    console.log("lets see if it is even trying to save to backend");

    if (isSignedIn && user) {
      console.log("yes it is trying");
      const savedUser = localStorage.getItem("isUserSaved");

      if (!savedUser) {
        console.log("lets to try")
        savetobackend();
      }
    }//  hii goes down
  }, [isSignedIn, user]);
  return (
    <div className=' h-full w-full bg-gradient-to-b from-[#30353E] to-[#4D76BA]' >

      <Navbar></Navbar>

      <div className=' mt-[30px] ml-[61px] text-[30px] text-white ' >Welcome {user?.firstName} {user?.lastName}</div>

      <div className=' flex justify-center items-center mt-[50px] rounded-md gap-[50px]  w-full' >
        <div className=' bg-blue-400 h-[400px] w-[1200px] rounded-4xl ml-[100px] ' > 
          <img src='/386745.jpg' className=' object-cover rounded-4xl h-[400px]'></img>
           </div>
        <div className=' flex gap-[20px] flex-wrap mr-[100px] gap-y-[60px] ' >
          <div className=' bg-blue-600 p-[20px] gap-[10px] h-[142px] w-[292px] rounded-3xl  flex flex-col  ' > 
              <div className=' text-[16px]' >Code's Count</div>
              <div className=' flex flex-col gap-[0px]' >
                <div className=' text-[30px]' >30</div>
                <div className=' text-[16px]' >30 Days</div>
              </div>
              </div>
              <div className=' bg-blue-500 p-[20px] gap-[10px] h-[142px] w-[292px] rounded-3xl  flex flex-col  ' > 
              <div className=' text-[16px]' >Word's Count</div>
              <div className=' flex flex-col gap-[0px]' >
                <div className=' text-[30px]' >10000</div>
                <div className=' text-[16px]' >30 Days</div>
              </div>
              </div>
              <div className=' bg-blue-400 p-[20px] gap-[10px] h-[142px] w-[292px] rounded-3xl  flex flex-col  ' > 
              <div className=' text-[16px]' >Friend's Count</div>
              <div className=' flex flex-col gap-[0px]' >
                <div className=' text-[30px]' >10000</div>
                <div className=' text-[16px]' >30 Days</div>
              </div>
              </div>
              <div className=' bg-red-400 p-[20px] gap-[10px] h-[142px] w-[292px] rounded-3xl  flex flex-col  ' > 
              <div className=' text-[16px]' >Active Day's Count</div>
              <div className=' flex flex-col gap-[0px]' >
                <div className=' text-[30px]' >10000</div>
                <div className=' text-[16px]' >30 Days</div>
              </div>
              </div>
          {/* <div className=' bg-red-500 h-[100px] w-[200px] ' > smaill one  </div> */}
          {/* <div className=' bg-red-500 h-[100px] w-[200px] ' > second one </div> */}
          
        </div>
      </div>
      <div className=' mt-[100px]' >
        <Messages></Messages>
      </div>

    </div>
  )
}

export default page
