import Link from 'next/link'
import React from 'react'
import AnimatedTestimonialsDemo from "../components/testimonials"

const Middle = () => {
  return (
    <div className=' flex flex-col justify-center items-center w-full mt-[100px] ' >
      <div className=' text-[48px] text-white mb-[10px] ' >
      Share Code in Real-time with Developers
      </div>
      <div className=' text-[24px] text-white'>
      An online code editor for interviews, troubleshooting, teaching & more…
      </div>
      <div className=' mt-[20px]  text-white w-[169px] h-[51px] rounded-md bg-[#EC3360] flex items-center justify-center text-[16px] mb-[12px] '>
        Start Now
      </div>
      <div className='text-white' >Share code for free</div>
      <div>

        <div className=' flex gap-[50px] ' >
            <div className=' relative mt-[200px]' >
                <img className=' h-[480px] w-auto'  alt='no support' src='/background.png' ></img>
                <video 
                    src="/code.mp4" 
                    className=" h-[250px] absolute top-[60px] left-[20px] object-cover"
                    loop 
                    muted 
                    autoPlay
                    playsInline // Important for iOS
                ></video>
                <video 
                    src="/lady1.mp4" 
                    className=" h-[100px] absolute top-[60px] right-[35px] object-cover"
                    loop 
                    muted 
                    autoPlay
                    playsInline // Important for iOS
                ></video>
                <video 
                    src="/lady3.mp4" 
                    className=" h-[100px] absolute top-[180px] right-[35px] object-cover"
                    loop 
                    muted 
                    autoPlay
                    playsInline // Important for iOS
                ></video>
            </div>
        <div className=' flex flex-col' >
            <div className=' relative mt-[220px]' >
            <img className=' h-[210px] w-auto'  alt='no support' src='/background.png' ></img>
            <video 
                src="/code.mp4" 
                className=" h-[125px] absolute top-[30px] left-[7px] object-cover"
                loop 
                muted 
                autoPlay
                playsInline // Important for iOS
            ></video>
            <video 
                src="/lady1.mp4" 
                className=" h-[50px] absolute top-[30px] right-[17px] object-cover"
                loop 
                muted 
                autoPlay
                playsInline // Important for iOS
            ></video>
            <video 
                src="/lady3.mp4" 
                className=" h-[50px] absolute top-[90px] right-[17px] object-cover"
                loop 
                muted 
                autoPlay
                playsInline // Important for iOS
            ></video>
            </div>
            <div className=' relative mt-[20px]' >
            <img className=' h-[210px] w-auto'  alt='no support' src='/background.png' ></img>
            <video 
                src="/code.mp4" 
                className=" h-[125px] absolute top-[30px] left-[7px] object-cover"
                loop 
                muted 
                autoPlay
                playsInline // Important for iOS
            ></video>
            <video 
                src="/lady1.mp4" 
                className=" h-[50px] absolute top-[30px] z-10 right-[17px] object-cover"
                loop 
                muted 
                autoPlay
                playsInline // Important for iOS
            ></video>
            <video 
                src="/lady3.mp4" 
                className=" h-[50px] absolute top-[90px] right-[17px] object-cover"
                loop 
                muted 
                
                autoPlay
                playsInline // Important for iOS
            >unable to show video </video>
            </div>
        </div>

        </div>


    <div className=' flex mt-[150px] gap-[50px] w-full justify-between mb-[100px] ' >
        <div className=' w-[300px]' >
            <div className=' text-[32px] mb-[20px]  ' >
            Code with your team
            </div>
            <div className=' text-[18px] mb-[20px] ' >
            Open a Codeshare editor, write or copy code, then share it with friends and colleagues. Pair program and troubleshoot together.
            </div>
            <div className=' w-[115px] h-[36px] border-2 flex justify-center items-center rounded-md bg-white text-[#4D76BA] ' >
            <Link href="/" className=' text-[14px]' >Hack Together</Link>
            </div>
        </div>
        <div className=' w-[300px]' >
            <div className=' text-[32px] mb-[20px]  ' >
            Interview developers
            </div>
            <div className=' text-[18px] mb-[20px] ' >
            Set coding tasks and observe in real-time when interviewing remotely or in person. Nobody likes writing code on a whiteboard.
            </div>
            <div className=' w-[115px] h-[36px] border-2 flex justify-center items-center rounded-md bg-white text-[#4D76BA] ' >
            <Link href="/" className=' text-[14px]' >Take Interview</Link>
            </div>
        </div>
        <div className=' w-[300px]' >
            <div className=' text-[32px] mb-[20px]  ' >
            Teach Programming
            </div>
            <div className=' text-[18px] mb-[20px] ' >
            Share your code with students and peers then educate them. Universities and colleges around the world use Codeshare every day.
            </div>
            <div className=' w-[115px] h-[36px] border-2 flex justify-center items-center rounded-md bg-white text-[#4D76BA] ' >
            <Link href="/" className=' text-[14px]' >Teach Coding</Link>
            </div>
        </div>
      </div>
      </div>
      <AnimatedTestimonialsDemo/>



    </div>
  )
}

export default Middle
