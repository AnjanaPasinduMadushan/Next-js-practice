'use client'

import RootLayout from "../layout";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function Stopwatch(){

const [time, setTime] = useState(0);

const [isContinue, setIsContinue] = useState(false)

useEffect(() => {
  let intervalId;
  if (isContinue) {
    // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
    intervalId = setInterval(() => setTime(time + 1), 10);
  }
  return () => clearInterval(intervalId);
}, [isContinue, time]);


const hour = Math.floor(time / 360000);

const min = Math.floor((time % 360000) / 6000);

const sec = Math.floor((time % 6000) / 100);

const milisec = Math.floor(time%100);

const handleContinue = () => {
  setIsContinue(!isContinue)
}

const handleReset = () =>{
  setTime(0);
}

  return(
  <RootLayout>
    <center>
  <h1>Stopwatch</h1>
      <h2>{hour}:{min.toString().padStart(2, "0")}:{sec.toString().padStart(2, "0")}:{milisec.toString().padStart(2, "0")}</h2>
      <button onClick={()=>handleContinue()}>{isContinue? 'Stop':'Start'}</button>
      <button onClick={handleReset}>Reset</button>
      <Link href="/page">Go to Counter</Link>
      </center>
  </RootLayout>
  
  )
}