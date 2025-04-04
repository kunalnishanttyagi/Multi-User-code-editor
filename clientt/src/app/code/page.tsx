"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Editor from "../../components/editor";
import Eeditor from "../../components/eeditor";
import { IoCloseSharp } from "react-icons/io5";


const Page = () => {
  const [split, setSplit] = useState(false);
  const [sharedContent, setSharedContent] = useState('# Shared code\nprint("Hello")');
  const [leftContent, setLeftContent] = useState(sharedContent);
  const [rightContent, setRightContent] = useState(sharedContent);
  const [close,setclose]=useState(true);
  useEffect(()=>{
    setLeftContent(leftContent);
  },[close])
  const handleSplit = () => {
    setSplit(!split);
    if(split==false){
      setclose(true);
    }
    setLeftContent(leftContent);
    setRightContent(leftContent);
  };

  // Function to handle content change from Eeditor
  const handleContentChange = (newContent) => {
    setLeftContent(newContent);
  };

  return (
    <div className="h-full w-full relative bg-gradient-to-b from-[#30353E] to-[#4D76BA]">
      <Navbar />
      
      {split ? (
        <div className="flex gap-[10px] w-screen justify-center items-center">
          <Editor  content={leftContent} onChange={setLeftContent} />
          <Editor content={rightContent} onChange={setRightContent} />
          <div
        className="absolute top-[650px] right-[85px] bg-[#EC3360] h-[50px] w-[165px] flex justify-center items-center rounded-2xl "
        
      >
        Save
      </div>
          <div className=" absolute top-[100px] right-[780px] " >
          <IoCloseSharp onClick={()=>{
            setSplit(false);
            setLeftContent(rightContent);
            setclose(false);
          }} color="white" size={30} />

          </div>
          <div className=" absolute top-[100px] right-[70px] " >
          <IoCloseSharp onClick={(handleSplit=>{
            setSplit(false);
            setLeftContent(leftContent);
            setclose(false);
          })} color="white" size={30}  />

          </div>

        </div>
      ) : (
        <div className="flex gap-[10px] w-screen justify-center items-center">
          {/* <div></div> */}
          <Eeditor content={leftContent} onChange={handleContentChange} />
        </div>
      )}

      { (!split) ? <div
        className="absolute top-[650px] right-[685px] bg-[#EC3360] h-[50px] w-[165px] flex justify-center items-center rounded-2xl "
        onClick={handleSplit}
      >
        Split
      </div> :(<div></div>)}
      <div
        className="absolute top-[650px] left-[85px] bg-[#EC3360] h-[50px] w-[165px] flex justify-center items-center rounded-2xl "
        
      >
        Save
      </div>
      
    </div>
  );
};

export default Page;
