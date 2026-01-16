'use client'

import { useState } from "react"


import React from 'react'

export default function authLayout() {

    const[input, setInput]= useState<string>('');
  return (
    <div>
      <h1>Auth Layout</h1>
      <input
        className="bg-white text-black border border-black "
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}
