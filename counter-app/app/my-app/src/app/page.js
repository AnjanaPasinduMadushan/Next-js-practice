'use client'
import RootLayout from './layout';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {

  const [counter, setCounter] = useState(0);

  return (

    <RootLayout>
      <center>
      
      <h1>{counter}</h1>
      <button onClick={()=>setCounter(counter+1)}>Increment</button>
      <button onClick={()=>setCounter(counter-1)}>Decrement</button>
      <button onClick={()=>setCounter(0)}>Clear</button>
      <Link href="/stopwatch">Go to Stop Watch Page</Link>
      </center>
      
    </RootLayout>
  )
}
